"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HeartHandshake,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
  Store,
  Truck,
  UserRoundPen
} from "lucide-react";

import { siteConfig } from "@/config/site";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar";


const data = {
  info: {
    title: "",
    subtitle: ""
  },
  navMain: [
    {
      title: "MAIN",
      items: [
        {
          title: "Dashboard",
          url: "/area-manager",
          icon: LayoutDashboard
        },
        {
          title: "Stores",
          url: "/area-manager/stores",
          icon: Store
        },
        {
          title: "Orders",
          url: "/area-manager/orders",
          icon: ShoppingCart
        },
        {
          title: "Suppliers",
          url: "/area-manager/suppliers",
          icon: Truck
        }
      ]
    }
  ],
  navSec: [
    {
      title: "Footer",
      items: [
        {
          title: "Profile",
          url: "#",
          icon: UserRoundPen
        },
        {
          title: "Support",
          url: "#",
          icon: HeartHandshake
        }
      ]
    }
  ]
};

export function AreaManagerAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center">
        <Link href="/">
          <Image src={siteConfig.favicon} alt="Logo" width={100} height={100} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      className="rounded-2xl data-[active=true]:text-white data-[active=true]:shadow-xl data-[active=true]:backdrop-blur-sm"
                    >
                      <Link href={item.url} className="py-6">
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="space-y-5">
            <SidebarMenuButton asChild className="group-data-[collapsible=icon]:w-full">
              <Link href="/login" className="flex items-center justify-center gap-4 bg-muted text-red-500 hover:text-white size-4 group-data-[collapsible=icon]:h-5 group-data-[collapsible=icon]:w-5">
                <LogOut className="size-4 group-data-[collapsible=icon]:h-5 group-data-[collapsible=icon]:w-5" />
                <span className="group-data-[collapsible=icon]:hidden">Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
