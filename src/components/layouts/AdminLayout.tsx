// src/components/layouts/AdminLayout.tsx
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users as UsersIcon,
  Calendar,
  Briefcase,
  Settings,
  FileText,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface NavItem {
  path: string;
  icon: any;
  label: string;
}

const SIDEBAR_COLLAPSE_KEY = "admin_sidebar_collapsed";

const AdminLayout: React.FC = () => {
  const location = useLocation();

  // init collapsed from localStorage or viewport width
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const [sidebarOpenMobile, setSidebarOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_COLLAPSE_KEY, collapsed ? "1" : "0");
    } catch {}
  }, [collapsed]);

  // close mobile drawer when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpenMobile(false);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems: NavItem[] = [
    { path: "/admin", icon: LayoutDashboard, label: "الرئيسية" },
    { path: "/admin/users", icon: UsersIcon, label: "المستخدمون" },
    { path: "/admin/bookings", icon: Calendar, label: "الحجوزات" },
    { path: "/admin/services", icon: Briefcase, label: "الخدمات" },
    { path: "/admin/settings", icon: Settings, label: "الإعدادات" },
    { path: "/admin/logs", icon: FileText, label: "السجلات" },
  ];

  const isActive = (path: string) =>
    path === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(path);

  const sidebarWidthClass = collapsed ? "w-20" : "w-64";
  const labelBase = "whitespace-nowrap transition-all duration-300 ease-in-out overflow-hidden text-right";
  const labelHidden = "opacity-0 -translate-x-2 max-w-0";
  const labelVisible = "opacity-100 translate-x-0 max-w-[200px]";

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      {/* mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-primary">لوحة التحكم</h1>
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpenMobile(s => !s)} aria-label="Toggle sidebar">
          {sidebarOpenMobile ? <X /> : <Menu />}
        </Button>
      </div>

      {/* sidebar */}
      <aside
        data-admin-sidebar="1"
        className={`fixed top-0 right-0 h-full bg-background border-l border-border z-40 transform transition-[width,transform] duration-300 ease-in-out ${sidebarWidthClass}
          ${sidebarOpenMobile ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
        style={{ transitionProperty: "width, transform" }}
      >
        <div className="h-16 flex items-center px-4 border-b border-border justify-between">
            
          {!collapsed &&
          <><div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary" />
            </div>
          <Link to={`/`} className={`${labelBase} ${collapsed ? labelHidden : labelVisible} text-lg font-semibold text-primary`} >
            Maha Aldafer
          </Link></>
          }

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex">
              <Button variant="ghost" size="icon" onClick={() => setCollapsed(s => !s)} aria-label="Toggle collapse">
                {collapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        <nav className="p-2 mt-2 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
              dir="ltr"
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpenMobile(false)}
                className={`group relative flex flex-row-reverse items-center ${collapsed ? "gap-0 justify-center" : "gap-3"} py-3 px-3 rounded-xl transition-colors duration-200
                  ${active ? "bg-primary text-primary-foreground shadow-sm" : "text-foreground hover:bg-secondary"}`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className={`${labelBase} ${collapsed ? labelHidden : labelVisible}`}>{item.label}</span>
                {collapsed && (
                  <span className="absolute right-full text-primary top-1/2 -translate-y-1/2 mr-3 rounded-md bg-background border border-border px-3 py-2 text-sm shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none z-50" role="tooltip">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-4 border-t border-border">
          <Button variant="ghost" className={`w-full ${collapsed ? "justify-center" : "gap-3"}`} onClick={() => (window.location.href = "/")}>
            <LogOut className="w-5 h-5" />
            <span className={collapsed ? "sr-only" : ""}>تسجيل الخروج</span>
          </Button>
        </div>
      </aside>

      {/* mobile overlay */}
      {sidebarOpenMobile && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpenMobile(false)} />}

      {/* main */}
      <main className={`flex-1 min-h-screen transition-[margin] duration-300 ${collapsed ? "lg:mr-20" : "lg:mr-64"} pt-16 lg:pt-0`}>
        <div className="p-6 lg:p-8"><Outlet /></div>
      </main>
    </div>
  );
};

export default AdminLayout;
