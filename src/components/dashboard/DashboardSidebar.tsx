import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock,
  Calendar,
  DollarSign,
  Users,
  Bell,
  BookOpen,
  Building2,
  Settings,
  LogOut,
  Calculator,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Clock, label: "Prayer Times", href: "/dashboard/prayer-times" },
  { icon: Calendar, label: "Events", href: "/dashboard/events" },
  { icon: DollarSign, label: "Finances", href: "/dashboard/finances" },
  { icon: Users, label: "Members", href: "/dashboard/members" },
  { icon: Bell, label: "Announcements", href: "/dashboard/announcements" },
  { icon: BookOpen, label: "Education", href: "/dashboard/education" },
  { icon: Building2, label: "Facilities", href: "/dashboard/facilities" },
  { icon: Calculator, label: "Zakat Calculator", href: "/dashboard/zakat" },
  { icon: FileText, label: "Reports", href: "/dashboard/reports" },
];

const bottomMenuItems = [
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: LogOut, label: "Logout", href: "/logout" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen gradient-primary flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <span className="text-primary-foreground font-heading text-xl">ا</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg text-primary-foreground font-bold">
              AmanahMasjid
            </span>
            <span className="text-xs text-primary-foreground/60">Management</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-secondary"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-sidebar-border">
        <ul className="space-y-1">
          {bottomMenuItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-all duration-200"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
