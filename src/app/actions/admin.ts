"use server";

import { db } from "@/db";
import { examples, packs, siteSettings } from "@/db/schema";
import { eq } from "drizzle-orm";
import { isAdmin } from "./auth";
import { revalidatePath } from "next/cache";

export async function addExample(formData: FormData) {
  if (!(await isAdmin())) throw new Error("Unauthorized");

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const link = formData.get("link") as string;

  await db.insert(examples).values({ title, description, imageUrl, link });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteExample(id: number) {
  if (!(await isAdmin())) throw new Error("Unauthorized");
  await db.delete(examples).where(eq(examples.id, id));
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function addPack(formData: FormData) {
  if (!(await isAdmin())) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const features = (formData.get("features") as string).split("\n").filter(f => f.trim() !== "");

  await db.insert(packs).values({ name, price, description, features });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deletePack(id: number) {
  if (!(await isAdmin())) throw new Error("Unauthorized");
  await db.delete(packs).where(eq(packs.id, id));
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function updateSiteSetting(key: string, value: string) {
  if (!(await isAdmin())) throw new Error("Unauthorized");

  await db
    .insert(siteSettings)
    .values({ key, value })
    .onConflictDoUpdate({
      target: siteSettings.key,
      set: { value, updatedAt: new Date() },
    });
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function getSiteSettings() {
  const settings = await db.select().from(siteSettings);
  return settings.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {} as Record<string, string>);
}
