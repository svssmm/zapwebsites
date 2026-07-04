import { isAdmin } from "@/app/actions/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { examples, packs, siteSettings } from "@/db/schema";
import AdminDashboard from "@/components/AdminDashboard";

export default async function AdminPage() {
  if (!(await isAdmin())) {
    redirect("/login");
  }

  const examplesData = await db.select().from(examples);
  const packsData = await db.select().from(packs);
  const settingsData = await db.select().from(siteSettings);
  
  const settings = settingsData.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {} as Record<string, string>);

  return (
    <main className="min-h-screen p-6 md:p-12">
      <AdminDashboard 
        initialExamples={examplesData} 
        initialPacks={packsData} 
        initialSettings={settings} 
      />
    </main>
  );
}
