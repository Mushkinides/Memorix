"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-clinet";

export function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };
  return (
    <Button variant={"outline"} onClick={handleLogout}>
      Logout
    </Button>
  );
}
