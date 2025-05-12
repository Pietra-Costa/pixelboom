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
import { XIcon } from "lucide-react";
import { toast } from "sonner"


const handleSubmit = () => {
  toast("usuário adicionado com sucesso!", {
    duration: 5000,
    onDismiss: () => {
      console.log("Toast dismissed");
    },
    action: (
      <Button onClick={() => toast.dismiss()} variant="outline" className="px-4 py-2.5 rounded-full border h-10 w-[89px] border-[#E4E4E7]">
        Fechar
      </Button>
    ),
  });
};

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

          <SheetContent className="w-[560px]">
            <SheetHeader className="px-10 pt-10">
              <div className="flex items-center justify-between">
                <SheetTitle className="font-noto text-2xl text-[#18181B]">
                  Adicionar Usuário
                </SheetTitle>

                <SheetClose asChild>
                  <Button
                    className='ml-2 rounded-full bg-transparent border border-[#e4e4e7] text-[#18181B] w-[40px] h-[40px]'
                    size="icon"
                  >
                    <XIcon />
                  </Button>
                </SheetClose>
              </div>
            </SheetHeader>

            <div className="grid gap-5 px-10 mt-1">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="font-medium text-sm text-[#18181B]">Nome Completo</Label>
                <Input id="name" placeholder="Digite o nome" className="h-10 w-full shadow-none outline-none rounded-md border border-[#e4e4e7] placeholder:text-[#71717A] placeholder:text-sm" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="username" className="font-medium text-sm text-[#18181B]">E-mail</Label>
                <Input id="username" placeholder="Digite o e-mail" className="h-10 w-full shadow-none outline-none rounded-md border border-[#e4e4e7]" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="telefone" className="font-medium text-sm text-[#18181B]">Telefone</Label>
                <Input id="telefone" placeholder="Informe o telefone" className="h-10 w-full shadow-none outline-none rounded-md border border-[#e4e4e7]" />
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="accent-[#102822] w-4 h-4" />
                  WhatsApp
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="cpf" className="font-medium text-sm text-[#18181B]">CPF</Label>
                  <Input id="cpf" placeholder="Informe o CPF" className="h-10 w-full shadow-none outline-none rounded-md border border-[#e4e4e7]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="rg" className="font-medium text-sm text-[#18181B]">RG</Label>
                  <Input id="rg" placeholder="Informe o RG" className=" h-10 w-full shadow-none outline-none rounded-md border border-[#e4e4e7]" />
                </div>
              </div>

              <div className="flex items-center justify-between h-[66px] bg-[#FAFAFA] p-4 border border-[#E4E4E7] rounded-md">
                <div className="flex flex-col">
                  <Label htmlFor="status" className="font-medium text-sm text-[#18181B]">Status</Label>
                  <p className="text-xs text-muted-foreground">
                    Defina se o usuário estará ativo ao ser adicionado.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer w-12 h-12">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#102822] transition-all peer-focus:ring-2 peer-focus:ring-[#102822]"></div>
                    <div className="absolute  bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full peer-checked:left-1"></div>
                  </label>
                  <span className="text-sm font-medium text-[#18181B]">Ativo</span>
                </div>
              </div>
            </div>

            <SheetFooter className="px-10">
              <SheetClose asChild>
                <div className="flex justify-end gap-3">
                  <Button type="submit" variant="outline" className="px-4 py-2.5 rounded-full border h-10 w-[89px] border-[#E4E4E7]">Cancelar</Button>
                  <Button type="submit" className=" px-4 py-2.5 rounded-full border h-10 w-[89px]" onClick={handleSubmit}>Adicionar</Button>
                </div>
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
