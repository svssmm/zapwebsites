import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold mb-8 text-glow">Terms & <span className="text-purple-500">Conditions</span></h1>
        
        <div className="space-y-8 text-gray-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the services of ZapWebsites, you agree to comply with and be bound by these Terms and Conditions. These terms apply to all visitors, users, and clients of ZapWebsites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Project Engagement & Scope</h2>
            <p>All projects begin with a formal scope of work. ZapWebsites will provide the services as detailed in the chosen "Pack" or as agreed upon in a custom proposal. Any changes to the scope after the project has started may result in additional fees and timeline extensions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms (WHISH Money)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A non-refundable deposit of 50% is required to initiate any project.</li>
              <li>The remaining 50% balance is due immediately upon completion and prior to the website being launched or files being handed over.</li>
              <li>We exclusively accept payments via WHISH Money. Details will be provided in the invoice.</li>
              <li>Late payments may result in the suspension of work or a delay in project delivery.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
            <p>Upon receipt of full payment, ZapWebsites transfers all ownership rights of the final website design and code to the client. ZapWebsites retains the right to use the completed project in our portfolio, marketing materials, and social media (Instagram, etc.) unless a non-disclosure agreement is signed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Client Responsibilities</h2>
            <p>Clients must provide all necessary content (text, logos, high-resolution images) and feedback within the agreed-upon timeframe. Delays in providing materials will result in project timeline shifts.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Revision Policy</h2>
            <p>Each pack includes a set number of revision rounds. A "round" is defined as a list of changes requested by the client. Significant design changes after the initial mockup approval will be billed as additional work.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
