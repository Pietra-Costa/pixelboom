import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecionando...",
  description: "Redirecionamento para a página de usuários.",
};

export default function Home() {
  redirect("/user");
}
