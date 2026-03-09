import { AppSidebar } from "@/components/layouts/app-sidebar";
import { Separator } from "@/components/ui";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <section>
        <header className="flex items-center gap-2 p-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <DynamicBreadcrumb />
        </header>
        <section className="p-6">{children}</section>
      </section>
    </SidebarProvider>
  );
}
