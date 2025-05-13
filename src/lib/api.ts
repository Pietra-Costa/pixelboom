const BASE_URL = "/api/user";

export type User = {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: 0 | 1 | 2;
  sessionTime: string;
  lastLogin: string;
  active: boolean;
  cpf?: string;
  rg?: string;
  phone?: string;
  isWhatsApp?: boolean;
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Erro ao buscar usuários");

    const rawUsers = await res.json();

    return rawUsers.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      gender: user.gender,
      sessionTime: user.sessionTime,
      lastLogin: user.lastLogin,
      active: user.active,
      cpf: user.cpf,
      rg: user.rg,
      telefone: user.telefone,
      isWhatsapp: user.isWhatsapp,
    }));
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

export const createUser = async (userData: Omit<User, "id">): Promise<User> => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!res.ok) throw new Error("Erro ao criar usuário");
    return res.json();
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const updateUser = async (
  id: string,
  userData: Partial<User>,
  usePut: boolean = false
): Promise<User> => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: usePut ? "PUT" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!res.ok) throw new Error("Erro ao atualizar usuário");
    return res.json();
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};
