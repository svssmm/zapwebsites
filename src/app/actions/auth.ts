"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === "admin" && password === "gettfoff") {
    (await cookies()).set("admin_session", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return { success: true };
  }

  return { error: "Invalid credentials" };
}

export async function logout() {
  (await cookies()).delete("admin_session");
  redirect("/login");
}

export async function isAdmin() {
  const session = (await cookies()).get("admin_session");
  return session?.value === "true";
}
