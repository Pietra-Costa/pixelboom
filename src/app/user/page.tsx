"use client";

import React from "react";
import Navbar from "../_components/navbar";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";

function User() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="ml-10 mr-10 mt-10 h-[60px] border border-amber-400 flex justify-between">
        <h1 className="text-mint font-noto text-3xl">Usuários</h1>
        <Button className="bg-[#102822] text-[#FAFAFA] rounded-full flex items-center gap-2">
          <AiOutlinePlus className="w-[9px] h-[9px] text-[14px] font-thin" />
          <span className="text-[14px]">Adicionar</span>
        </Button>
      </div>

      <div className="mt-5 nb-5 ml-10 mr-10 h-[100px] border border-amber-400 flex">
        <div className="w-[225px]  border border-amber-400">
          <p>Usuários</p>
          <h1>294</h1>
        </div>

        <div className="w-[225px]  border border-amber-400">
          <p>Tempo de Sessão</p>
          <h1>31m 20s</h1>
        </div>

        <div className="w-[225px]  border border-amber-400">
          <p>Ativos</p>
          <h1>203</h1>
        </div>

        <div className="w-[225px]  border border-amber-400">
          <p>Inativos</p>
          <h1>127</h1>
        </div>
      </div>
    </div>
  );
}

export default User;
