import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Bell, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

const titles: Record<string, { t: string; s: string }> = {
  "/admin": { t: "Dashboard", s: "Live overview of your review queue" },
  "/admin/import": { t: "Import Reviews", s: "Bring reviews in from any source" },
  "/admin/queue": { t: "Queue", s: "Search, filter and inspect every review" },
  "/admin/history": { t: "History", s: "Timeline of everything you've served" },
  "/admin/settings": { t: "Settings", s: "URLs, QR code and danger zone" },
};

function AdminLayout() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const info = titles[pathname] || { t: "Admin", s: "" };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl">
            <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
              <SidebarTrigger />
              <div className="flex-1 min-w-0">
                <h1 className="font-display font-bold text-lg leading-none truncate">{info.t}</h1>
                <p className="text-xs text-muted-foreground mt-1 truncate">{info.s}</p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-4 w-4" />
              </Button>
              <ThemeToggle />
              <Button asChild size="sm" variant="outline" className="rounded-full hidden sm:inline-flex">
                <Link to="/">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Public page
                </Link>
              </Button>
            </div>
          </header>
          <main className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
