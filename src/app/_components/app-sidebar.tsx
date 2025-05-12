"use client"

import { Settings, Activity, User, FileCheck, ChevronDown, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, LogOut, Headset } from "lucide-react";

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
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Activity,
  },
  {
    title: "Usuários",
    url: "#",
    icon: User,
  },
  {
    title: "Documentos",
    url: "#",
    icon: FileCheck,
  },

  {
    title: "Geral",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b flex justify-center border-[#e4e4e7] h-[72px] pl-6">
        <Button className="w-24 h-8">Logo</Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-0">

          <div className="m-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage />
                    <AvatarFallback className="rounded-lg text-xs font-semibold">FA</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left ">
                    <span className="truncate font-semibold text-[#3F3F46] text-sm">Filial A</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={"right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold"></span>
                      <span className="truncate text-xs"></span>
                    </div>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
            <SidebarGroupLabel className="font-normal text-xs text-[#3F3F46] mt-4 mb-3.5">Menu</SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="pl-1">
                {items
                  .filter(item => item.title !== "Geral")
                  .map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="text-[#71717A]" />
                          <span className="pl-3 text-[#71717A]">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>

            <SidebarGroupLabel className="font-normal text-xs text-[#3F3F46] mt-1.5 mb-3.5">Configurações</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="pl-1">
                {items
                  .filter(item => item.title === "Geral")
                  .map(item => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="text-[#71717A] h-4 w-4" />
                          <span className="pl-3 text-[#71717A]">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>

          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white flex p-8 flex-row items-center justify-between gap-2">
        <h1 className="text-sm text-[#102822] font-normal">Precisa de ajuda?</h1>
        <Headset className="w-4 h-4  text-[#3F3F46]" />
      </SidebarFooter>

    </Sidebar>
  );
}
