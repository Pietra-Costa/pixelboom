import { User } from "./api";

export const mockUsers: User[] = [
    {
        id: 'mock-1',
        name: 'José Ricardo Gomes',
        age: 51,
        gender: 0, // Homem
        sessionTime: "38m22s",
        lastLogin: '22/03/2025 - 10:21am',
        active: true,
        email: 'jose.ricardo@example.com', // Novo campo
    },
    {
        id: 'mock-2',
        name: 'Helena Soares',
        age: 46,
        gender: 1, // Mulher
        sessionTime: "38m22s",
        lastLogin: '22/03/2025 - 10:21am',
        active: false,
        email: 'helena.soares@example.com', // Novo campo
    },
    {
        id: 'mock-3',
        name: 'Débora Santan',
        age: 24,
        gender: 1, // Mulher
        sessionTime: "38m22s",
        lastLogin: '22/03/2025 - 10:21am',
        active: false,
        email: 'debora.santan@example.com', // Novo campo
    },
    {
        id: 'mock-4',
        name: 'Lucas Rocha Silveira',
        age: 31,
        gender: 0, // Homem
        sessionTime: "38m22s",
        lastLogin: '22/03/2025 - 10:21am',
        active: true,
        email: 'lucas.rocha@example.com', // Novo campo
    },
    {
        id: 'mock-5',
        name: 'Sérgio Arantes',
        age: 36,
        gender: 0, // Homem
        sessionTime: "38m22s",
        lastLogin: '22/03/2025 - 10:21am',
        active: true,
        email: 'sergio.arantes@example.com', // Novo campo
    },
    {
        id: 'mock-6',
        name: 'Adriano Costa',
        age: 38,
        gender: 0, // Homem
        sessionTime: "38m22s",
        lastLogin: '22/03/2025 - 10:21am',
        active: true,
        email: 'adriano.costa@example.com', // Novo campo
    },
];
