"use client";

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../_components/navbar";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import Search from "../_components/search-bar";
import Users from "../_components/users";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { XIcon } from "lucide-react";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { createUser, getUsers } from "@/lib/api";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";

const User = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [active, setActive] = useState(false);
  const [gender, setGender] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("username") as HTMLInputElement)?.value;
    const telefone = (document.getElementById("telefone") as HTMLInputElement)?.value;
    const cpf = (document.getElementById("cpf") as HTMLInputElement)?.value;
    const rg = (document.getElementById("rg") as HTMLInputElement)?.value;
    const isWhatsapp = (document.querySelector("input[type=checkbox]") as HTMLInputElement)?.checked;
    const age = parseInt((document.getElementById("age") as HTMLInputElement)?.value || "0");

    try {
      const newUser = await createUser({
        id: uuidv4(),
        name,
        email,
        phone: telefone,
        cpf,
        rg,
        isWhatsApp: isWhatsapp,
        active,
        age,
        gender,
        sessionTime: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      });

      setUsers((prevUsers) => [...prevUsers, newUser]);

      toast("Usuário adicionado com sucesso!", {
        duration: 5000,
        action: (
          <Button
            onClick={() => toast.dismiss()}
            variant="outline"
            className="px-4 py-2.5 ml-4 rounded-full border h-10 w-[89px] border-[#E4E4E7]"
          >
            Fechar
          </Button>
        ),
      });
    } catch (error) {
      toast.error("Erro ao adicionar usuário.");
      console.error("Erro:", error);
    }
  };

  const getGenderLabel = (gender: 0 | 1 | 2): string => {
    switch (gender) {
      case 0:
        return "Homem";
      case 1:
        return "Mulher";
      case 2:
        return "Outro";
      default:
        return "Desconhecido";
    }
  };

  const usersWithLabels = users.map((user) => ({
    ...user,
    genderLabel: getGenderLabel(user.gender),
  }));

  return (

    <div className="w-full">
      <Navbar />

      <div className="px-4 sm:px-10 mt-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-mint font-noto text-3xl">Usuários</h1>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-[#102822] text-[#FAFAFA] rounded-full flex items-center gap-2">
                <AiOutlinePlus className="w-[9px] h-[9px] text-[14px] font-thin" />
                <span className="text-[14px]">Adicionar</span>
              </Button>
            </SheetTrigger>

            <SheetContent className="w-full max-w-[560px] sm:w-[560px] px-4 sm:px-10 py-10 overflow-y-auto">
              <SheetHeader className="px-0 sm:px-10 pt-10">
                <div className="flex items-center justify-between">
                  <SheetTitle className="font-noto text-2xl text-[#18181B]">Adicionar Usuário</SheetTitle>
                  <SheetClose asChild>
                    <Button className="ml-2 rounded-full bg-transparent border border-[#e4e4e7] text-[#18181B] w-[40px] h-[40px]" size="icon">
                      <XIcon />
                    </Button>
                  </SheetClose>
                </div>
              </SheetHeader>

              <div className="grid gap-5 px-0 sm:px-10 mt-1">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Digite o nome" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="username">E-mail</Label>
                  <Input id="username" placeholder="Digite o e-mail" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="Informe o telefone" />
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" className="accent-[#102822] w-4 h-4" />
                    WhatsApp
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="Informe o CPF" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="rg">RG</Label>
                    <Input id="rg" placeholder="Informe o RG" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="age">Idade</Label>
                  <Input id="age" placeholder="Idade" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <Label htmlFor="gender">Gênero</Label>
                  <Select
                    value={String(gender)}
                    onValueChange={(value) => setGender(Number(value) as 0 | 1 | 2)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o Gênero" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      <SelectItem value="0">Masculino</SelectItem>
                      <SelectItem value="1">Feminino</SelectItem>
                      <SelectItem value="2">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between h-[66px] bg-[#FAFAFA] p-4 border border-[#E4E4E7] rounded-md">
                  <div className="flex flex-col">
                    <Label>Status</Label>
                    <p className="text-xs text-muted-foreground">Defina se o usuário estará ativo ao ser adicionado.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch checked={active} onCheckedChange={(checked) => setActive(checked)} />
                    <span className="text-sm font-medium text-[#18181B]">Ativo</span>
                  </div>
                </div>
              </div>

              <SheetFooter className="px-0 sm:px-10">
                <SheetClose asChild>
                  <div className="flex justify-end gap-3 mt-6">
                    <Button variant="outline" className="rounded-full border h-10 w-[89px]">Cancelar</Button>
                    <Button className="rounded-full h-10 w-[89px]" onClick={handleSubmit}>Adicionar</Button>
                  </div>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="mt-5 mb-5 gap-5  flex flex-wrap sm:flex-col md:flex-row">
          <div className="flex-1 min-w-[150px]   rounded-[8px] h-[100px] bg-[#FAFAFA] p-6">
            <p className="font-inter text-[#71717A] text-xs">Usuários</p>
            <h1 className="font-noto text-3xl">294</h1>
          </div>
          <div className="flex-1 min-w-[150px] h-[100px]   bg-[#FAFAFA] p-6">
            <p className="font-inter text-[#71717A] text-xs">Tempo de Sessão</p>
            <h1 className="font-noto text-3xl">31m 20s</h1>
          </div>
          <div className="flex-1 min-w-[150px] h-[100px]  bg-[#FAFAFA] p-6">
            <p className="font-inter text-[#71717A] text-xs">Ativos</p>
            <h1 className="font-noto text-3xl">203</h1>
          </div>
          <div className="flex-1 min-w-[150px] h-[100px]   bg-[#FAFAFA] p-6">
            <p className="font-inter text-[#71717A] text-xs">Inativos</p>
            <h1 className="font-noto text-3xl">127</h1>
          </div >
        </div>

        <Users users={usersWithLabels} />
      </div>
    </div>




  );
};

export default User;

