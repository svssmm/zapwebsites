import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-8 text-glow">Privacy <span className="text-purple-500">Policy</span></h1>
        
        <div className="space-y-8 text-gray-400">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>We only collect information that you voluntarily provide to us when you contact us via email, Instagram, or phone. This may include your name, business name, email address, and project requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Communicate with you regarding your project.</li>
              <li>Provide customer support.</li>
              <li>Send invoices and process payments through WHISH Money.</li>
              <li>Improve our web development services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection</h2>
            <p>We implement appropriate technical and organizational measures to maintain the security of your personal information. We do not sell, trade, or otherwise transfer your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Links</h2>
            <p>Our website may contain links to external sites (like our portfolio examples). We are not responsible for the content or privacy practices of these third-party websites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
            <p>ZapWebsites uses essential cookies for administrative functions (like the admin login). We do not use tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>If you have any questions regarding this Privacy Policy, you may contact us using the information on our Contact page.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
