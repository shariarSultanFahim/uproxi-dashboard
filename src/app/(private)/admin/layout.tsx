import { Separator } from "@/components/ui";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminAppSidebar } from "./app-sidebar";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminAppSidebar />
      <SidebarInset>
        <header className="flex items-center gap-2 p-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <DynamicBreadcrumb />
        </header>
        <div className="p-6 gap-4 bg-background flex flex-col flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
