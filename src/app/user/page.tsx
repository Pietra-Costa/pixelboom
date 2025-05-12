"use client";

import React from "react";
import Navbar from "../_components/navbar";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import Search from "../_components/search-bar";
import Users from "../_components/users";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


function User() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="ml-10 mr-10 mt-10 h-[60px] border border-amber-400 flex justify-between">
        <h1 className="text-mint font-noto text-3xl">Usuários</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-[#102822] text-[#FAFAFA] rounded-full flex items-center gap-2">
              <AiOutlinePlus className="w-[9px] h-[9px] text-[14px] font-thin" />
              <span className="text-[14px]">Adicionar</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

      </div>

      <div className="mt-5 mb-5 ml-10 mr-10 h-[100px] gap-5 border border-amber-400 flex">
        <div className="flex-1 border border-amber-400">
          <p>Usuários</p>
          <h1>294</h1>
        </div>

        <div className="flex-1 border border-amber-400">
          <p>Tempo de Sessão</p>
          <h1>31m 20s</h1>
        </div>

        <div className="flex-1 border border-amber-400">
          <p>Ativos</p>
          <h1>203</h1>
        </div>

        <div className="flex-1 border border-amber-400">
          <p>Inativos</p>
          <h1>127</h1>
        </div>
      </div>

      <div>
        <Search />
      </div>

      <div>
        <Users />
      </div>

    </div>
  );
}

export default User;
