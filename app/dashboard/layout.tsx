"use client";

import { useState } from "react";
import Link from "next/link";
import { SidePanel } from "./components/side-panel";
import { UserNav } from "./components/user-nav";
import { Button } from "@/components/ui/button";
import { Menu, Home } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <aside
        className={`${
          isCollapsed ? "w-[60px]" : "w-64"
        } overflow-y-auto border-r bg-white shadow-lg transition-all duration-300 ease-in-out`}
      >
        <SidePanel isCollapsed={isCollapsed} />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="text-gray-500 hover:text-gray-700"
          >
            <Menu className="h-6 w-6 text-primary-400" />
          </Button>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-primary-400">
                MFlix Dashboard
              </h1>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden text-purple-600 border-purple-600 hover:bg-purple-50"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
            </div>
            <UserNav />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
