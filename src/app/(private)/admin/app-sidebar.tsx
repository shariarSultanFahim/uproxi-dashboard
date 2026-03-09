"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BadgeCheck,
  BadgeDollarSign,
  BarChart,
  ClipboardList,
  Clock,
  CreditCard,
  Film,
  HeartHandshake,
  LayoutDashboard,
  LogOut,
  Map,
  Package,
  Scale,
  UserRoundPen,
  Users
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

import { Button } from "../../../components/ui";

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
          url: "/admin",
          icon: LayoutDashboard
        },
        {
          title: "Cut-Off Manager",
          url: "/admin/cut-off-manager",
          icon: Clock
        }
      ]
    },
    {
      title: "OPERATIONS",
      items: [
        {
          title: "Zoning",
          url: "/admin/zoning",
          icon: Map
        },
        {
          title: "User Management",
          url: "/admin/user-management",
          icon: Users
        },
        {
          title: "Product approval",
          url: "/admin/product-approval",
          icon: Package
        },
        {
          title: "Orders",
          url: "/admin/orders",
          icon: ClipboardList
        },
        {
          title: "Brand Promotion",
          url: "/admin/brand-promotion",
          icon: BadgeCheck
        }
      ]
    },
    {
      title: "FINANCE & GROWTH",
      items: [
        {
          title: "Feed & Reels",
          url: "/admin/feed-reels",
          icon: Film
        },
        {
          title: "Analytics management",
          url: "/admin/analytics",
          icon: BarChart
        },
        {
          title: "Invoices",
          url: "/admin/invoices",
          icon: CreditCard
        },
        {
          title: "Legal",
          url: "/admin/legal",
          icon: Scale
        }
      ]
    },
    {
      title: "COST & COMMISSION",
      items: [
        {
          title: "Cost & commission",
          url: "/admin/cost-commission",
          icon: BadgeDollarSign
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

export function AdminAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center">
        <Link href="/">
          <Image src={siteConfig.favicon} alt="Logo" width={80} height={80} />
        </Link>
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image src={siteConfig.favicon} alt="Logo" width={100} height={100} />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
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
                    {/* <SidebarMenuBadge>
                      <LeafyGreen className="size-3" />
                    </SidebarMenuBadge> */}
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
            {/* <div className="hidden flex-col gap-4 group-data-[collapsible=icon]:flex">
              <Avatar size="lg" className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
              <div className="flex items-center justify-start gap-4">
                <Avatar size="lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">John Doe</h2>
                  <h3 className="text-sm text-gray-500">john@riseimpact.com</h3>
                </div>
              </div>
            </div> */}
            <SidebarMenuButton asChild className="group-data-[collapsible=icon]:w-full">
              <Button
                variant="outline"
                className="w-full border-none bg-muted text-red-500 group-data-[collapsible=icon]:p-0"
              >
                <span className="group-data-[collapsible=icon]:hidden">Logout</span>
                <LogOut className="size-4 group-data-[collapsible=icon]:h-5 group-data-[collapsible=icon]:w-5" />
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
