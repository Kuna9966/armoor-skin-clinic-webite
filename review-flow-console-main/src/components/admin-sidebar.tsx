import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Upload, ListOrdered, History, Settings, Sparkles } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard, exact: true },
  { title: "Import Reviews", url: "/admin/import", icon: Upload },
  { title: "Queue", url: "/admin/queue", icon: ListOrdered },
  { title: "History", url: "/admin/history", icon: History },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/admin" className="flex items-center gap-2.5 px-2 py-2">
          <div className="h-9 w-9 rounded-xl gradient-bg flex items-center justify-center shadow-glow">
            <Sparkles className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-display font-bold text-sm leading-tight">Review Flow</span>
            <span className="text-[10px] text-muted-foreground">Admin Console</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = item.exact ? pathname === item.url : pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="glass-card rounded-xl p-3 group-data-[collapsible=icon]:hidden">
          <p className="text-xs font-semibold">Queue healthy</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">947 reviews ready to serve</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
