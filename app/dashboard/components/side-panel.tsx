"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  // Home,
  PlusCircle,
  Settings,
  Users,
  LayoutDashboard,
  Clapperboard,
} from "lucide-react";

const items = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-primary-400",
  },
  {
    name: "Movies",
    href: "/dashboard/movies",
    icon: Clapperboard,
    color: "text-primary-400",
  },
  {
    name: "Add Movie",
    href: "/dashboard/add-movie",
    icon: PlusCircle,
    color: "text-primary-400",
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: Users,
    color: "text-primary-400",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    color: "text-primary-400",
  },
];

interface SidePanelProps {
  isCollapsed: boolean;
}

export function SidePanel({ isCollapsed }: SidePanelProps) {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <div className={`space-y-4 py-4 ${isCollapsed ? "px-2" : "px-3"}`}>
        <div className="px-0 py-2">
          <h2
            className={`hidden mb-2 px-4 text-lg font-semibold tracking-tight text-gray-500 ${
              isCollapsed ? "sr-only" : ""
            }`}
          >
            Navigation
          </h2>
          <div className="space-y-1">
            {items.map((item) => (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={`w-full justify-start ${
                      isCollapsed ? "px-0 justify-center" : ""
                    } ${
                      pathname === item.href
                        ? `bg-gray-100 ${item.color}`
                        : "hover:bg-gray-100"
                    }`}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                      {!isCollapsed && (
                        <span
                          className={
                            pathname === item.href
                              ? item.color
                              : "text-gray-700"
                          }
                        >
                          {item.name}
                        </span>
                      )}
                    </Link>
                  </Button>
                </TooltipTrigger>
                {isCollapsed && (
                  <TooltipContent side="right">
                    <p>{item.name}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
