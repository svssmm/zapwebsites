import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { db } from "@/db";
import { examples, packs, siteSettings } from "@/db/schema";

export default async function Home() {
  const examplesData = await db.select().from(examples);
  const packsData = await db.select().from(packs);
  const settingsData = await db.select().from(siteSettings);
  
  const settings = settingsData.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {} as Record<string, string>);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio examples={examplesData} />
      <Pricing packs={packsData} />
      <Contact 
        instagram={settings.instagram} 
        email={settings.email} 
        phone={settings.phone} 
        whishMoney={settings.whishMoney} 
      />
      <Footer />
    </main>
  );
}
