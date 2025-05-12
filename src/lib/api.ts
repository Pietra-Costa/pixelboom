const BASE_URL = "/api/user";

export type User = {
  id: string;
  name: string;
  age: number;
  gender: "Masculino" | "Feminino" | "Outro";
  sessionTime: string;
  lastLogin: string;
  active: boolean;
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Erro ao buscar usuários");

    const rawUsers = await res.json();

    return rawUsers.map((user: any) => ({
      id: user.id,
      name: user.name,
      age: user.age,
      gender:
        user.gender === 0
          ? "Masculino"
          : user.gender === 1
          ? "Feminino"
          : "Outro",
      sessionTime: user.sessionTime,
      lastLogin: user.lastLogin,
      active: user.active,
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
