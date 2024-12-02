import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  FileText,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    link: "/admin/dashboard",
  },
  {
    title: "Users",
    icon: Users,
    link: "/admin/dashboard",
  },
  {
    title: "Settings",
    icon: Settings,
    link: "/me",
  },
];

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-background border-r transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={cn(
                  "flex items-center space-x-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground",
                  collapsed && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={cn(
          "mt-auto p-4 border-t",
          collapsed ? "flex justify-center" : "space-y-4"
        )}
      >
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "default"}
          className="w-full"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-2" />
          {!collapsed && "Logout"}
        </Button>
      </div>
    </aside>
  );
}
