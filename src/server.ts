import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { handleApiRoute } from "./lib/api-handlers";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://ssl.google-analytics.com https://analytics.google.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://www.googletagmanager.com https://ssl.google-analytics.com https://analytics.google.com",
    "frame-src 'self' https://www.google.com",
    "connect-src 'self' https://www.googletagmanager.com https://ssl.google-analytics.com https://analytics.google.com https://*.googleapis.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; "),
};

async function addResponseHeaders(request: Request, response: Response): Promise<Response> {
  const url = new URL(request.url);
  const isStaticAsset =
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.match(/\.(ico|png|webp|jpg|jpeg|svg|webmanifest|txt|xml)$/i);

  const headers = new Headers(response.headers);

  if (!isStaticAsset) {
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      if (!headers.has(key)) {
        headers.set(key, value);
      }
    }
  }

  if (isStaticAsset) {
    const ext = url.pathname.split(".").pop()?.toLowerCase();
    if (ext === "js" || ext === "mjs" || ext === "css") {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (ext?.match(/^(png|webp|jpg|jpeg|svg|ico)$/)) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    }
  } else if (response.headers.get("content-type")?.includes("text/html")) {
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      console.log(`[SERVER] fetch called: ${request.method} ${url.pathname}`);
      if (url.pathname.startsWith("/api/")) {
        console.log(`[SERVER] API intercept: ${url.pathname}`);
        return await handleApiRoute(url.pathname, request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      return await addResponseHeaders(request, normalized);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
