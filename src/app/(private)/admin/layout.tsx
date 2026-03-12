import { Avatar, AvatarFallback, Button, Input, Separator } from "@/components/ui";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminAppSidebar } from "./app-sidebar";
import Link from "next/link";
import { Bell, Search } from "lucide-react";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminAppSidebar />
      <SidebarInset>
        <header className="flex items-center justify-between gap-4 p-6 h-20">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <DynamicBreadcrumb />
          </div>

          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-[360px] hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search anything..."
                className="pl-11 h-12 rounded-2xl text-sm"
              />
            </div>

            {/* Actions & Profile */}
            <div className="flex items-center gap-4">
              {/* Notification Bell */}
              <button className="relative h-12 w-12 flex items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-sm hover:bg-slate-50 transition-colors">
                <Bell className="h-5 w-5 text-slate-500" />
                <span className="absolute top-[14px] right-[14px] h-2 w-2 bg-rose-500 rounded-full border-2 border-white" />
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-3 ml-2">
                <div className="flex flex-col items-end">
                  <span className="text-[15px] font-bold text-[#1e293b] leading-tight">Admin</span>
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Zouhair</span>
                </div>
                <Avatar className="h-12 w-12 rounded-2xl bg-sky-400">
                  <AvatarFallback className="bg-sky-400 text-white font-bold text-lg rounded-2xl">A</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>
        <div className="p-6 gap-4 bg-background flex flex-col flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
