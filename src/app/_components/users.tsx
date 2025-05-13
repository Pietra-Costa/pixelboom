'use client';

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { getUsers, User } from '@/lib/api';
import { FiUser } from "react-icons/fi";
import { mockUsers } from '@/lib/mockUsers';
import { CiCalendar, CiClock2, CiSearch } from 'react-icons/ci';
import { LuTag } from "react-icons/lu";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { IoMdMore } from "react-icons/io";
import { format } from 'date-fns';
import { MdFilterList } from 'react-icons/md';

interface UsersProps {
    users: User[];
}

function getInitials(fullName: string) {
    const names = fullName.trim().split(' ');
    return names[0]?.[0] + (names[1]?.[0]?.toUpperCase() ?? '');
}

function Users({ users: initialUsers }: UsersProps) {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getGenderLabel = (gender: 0 | 1 | 2): string => {
        switch (gender) {
            case 0:
                return "Homem";
            case 1:
                return "Mulher";
            case 2:
                return "Outro";
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <p className="p-10">Carregando usuários...</p>;

    return (
        <div>

            <div className="mt-5 w-full">
                <div className="flex flex-row sm:flex-row gap-2 sm:gap-2 h-[40px] w-full">
                    <div className="flex items-center border border-[#E4E4E7] rounded-md h-[40px] px-3.5 flex-grow">
                        <CiSearch className="text-[#71717A] mr-1.5 text-base h-4 w-4" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Buscar..."
                            className="outline-none w-full bg-transparent placeholder:text-[#71717A] placeholder:text-sm"
                        />
                    </div>
                    <Button
                        className="rounded-full bg-transparent border border-[#e4e4e7] text-[#18181B] w-[40px] h-[40px] flex-shrink-0"
                        size="icon"
                    >
                        <MdFilterList />
                    </Button>
                </div>
            </div>

            <div className="mt-5">
                {filteredUsers.map((user) => {
                    const isApiUser = user.hasOwnProperty('lastLogin') && user.hasOwnProperty('sessionTime');
                    const hasValidDate = isApiUser && user.lastLogin && !isNaN(new Date(user.lastLogin).getTime());
                    const formattedLastLogin = hasValidDate
                        ? format(new Date(user.lastLogin), "dd/MM/yyyy - hh:mmaaa", { locale: ptBR })
                        : user.lastLogin;
                    const formattedSessionTime = isApiUser && user.sessionTime
                        ? (new Date(user.sessionTime).getTime() && !isNaN(new Date(user.sessionTime).getTime()))
                            ? new Date(user.sessionTime).toISOString().substr(11, 8).replace(":", "min").replace(":", "s") + "ms"
                            : user.sessionTime
                        : user.sessionTime;

                    return (
                        <div
                            key={user.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 sm:h-24 mb-5 pl-3 pr-4 py-4 border rounded-xl border-[#E4E4E7]"
                        >
                            <div className="flex items-start sm:items-center space-x-3">
                                <Avatar className="h-14 w-14 rounded-lg">
                                    <AvatarFallback className="rounded-full text-base font-medium">
                                        {getInitials(user.name)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col justify-center">
                                    <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-2 sm:gap-3">
                                        <span className="font-medium font-inter text-sm text-[#18181B]">{user.name}</span>
                                        <span className="flex items-center gap-1 text-[#71717A] text-sm font-normal">
                                            <FiUser className="text-[#A1A1AA] text-xs w-3 h-3 font-inter" />
                                            {user.age} anos, {getGenderLabel(user.gender)}
                                        </span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-sm text-gray-700 mt-1">
                                        <span className="flex items-center gap-1">
                                            <CiCalendar className='text-[#A1A1AA] text-xs w-3 h-3' />
                                            <p className='font-inter text-[#71717A] text-xs font-normal'>{formattedLastLogin}</p>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <CiClock2 className='text-[#A1A1AA] text-xs w-3 h-3' />
                                            <p className='font-inter text-[#71717A] text-xs font-normal'>{formattedSessionTime}</p>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <LuTag className='text-[#A1A1AA] text-xs w-3 h-3' />
                                            <p className='font-inter text-[#71717A] text-xs font-normal'>Usuário Padrão</p>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
                                <span
                                    className={`text-xs font-semibold ${user.active ? 'bg-[#F4F4F5] text-[#18181B] w-[49px] h-5 rounded-full flex items-center justify-center' : 'bg-white border border-[#e4e4e7] text-[#18181B] w-[57px] h-5 rounded-full flex items-center justify-center'}`}
                                >
                                    {user.active ? 'Ativo' : 'Inativo'}
                                </span>
                                <button><IoMdMore /></button>
                            </div>
                        </div>
                    );
                })}


                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 mt-1 gap-4 sm:gap-0 px-4 sm:px-0">
                    <div className="text-sm text-[#74747a]">
                        {`6 de 294 itens`}
                    </div>

                    <Pagination>
                        <PaginationContent className='w-full sm:w-[372px] justify-center sm:justify-start'>
                            <PaginationItem>
                                <PaginationPrevious href="#">Anterior</PaginationPrevious>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">58</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#">Próxima</PaginationNext>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                    <div className="flex items-center justify-end sm:justify-start">
                        <span className="text-sm text-[#74747a] mr-2">Itens por página:</span>
                        <Select defaultValue="10">
                            <SelectTrigger className="p-2 text-sm border rounded w-[70px] h-[40px]">
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Users;

