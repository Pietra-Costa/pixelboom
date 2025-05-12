'use client';

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { getUsers, User } from '@/lib/api';

function getInitials(fullName: string) {
    const names = fullName.trim().split(' ');
    return names[0]?.[0].toUpperCase() + (names[1]?.[0]?.toUpperCase() ?? '');
}

function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            console.log("Iniciando fetch dos usuários...");
            try {
                const data = await getUsers();
                console.log("Usuários carregados:", data);
                setUsers(data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, []);

    if (loading) return <p className="p-10">Carregando usuários...</p>;

    return (
        <div className="mt-5 ml-10 mr-10 space-y-4">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="flex items-center justify-between p-4 border rounded-xl border-[#E4E4E7]"
                >
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-10 w-10 rounded-lg">
                            <AvatarFallback className="rounded-lg text-sm font-bold">
                                {getInitials(user.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-lg">{user.name}</p>
                            <p className="text-sm text-gray-500">
                                {user.gender} · {user.age} anos
                            </p>
                        </div>
                    </div>
                    <div className="text-sm text-right">
                        <p className="text-gray-700">
                            Sessão há{' '}
                            {formatDistanceToNow(new Date(user.sessionTime), {
                                locale: ptBR,
                            })}
                            .
                        </p>
                        <p className="text-gray-700">
                            Último login há{' '}
                            {formatDistanceToNow(new Date(user.lastLogin), {
                                locale: ptBR,
                            })}
                            .
                        </p>
                        <span
                            className={`text-xs font-medium px-2 py-1 rounded ${user.active
                                ? 'bg-green-100 text-green-700'
                                : 'bg-red-100 text-red-700'
                                }`}
                        >
                            {user.active ? 'Ativo' : 'Inativo'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Users;
