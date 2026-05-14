/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Privacy Policy page for Nexus Santé Next.js
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Privacy Policy | Nexus Santé",
  description: "Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <PageHeader title="Privacy Policy" breadcrumb="Privacy Policy" />
        
        <div className="container py-16 lg:py-24">
          <article className="prose prose-slate mx-auto max-w-4xl prose-headings:text-primary prose-h2:border-b prose-h2:border-secondary/20 prose-h2:pb-2 prose-strong:text-primary prose-a:text-secondary hover:prose-a:text-primary">
            <p className="lead">
              Welcome to Nexus Santé! We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Personal Identification Information</h3>
            <p>
              When you visit the Website, we may collect personally identifiable information such as your name, email address, phone number, etc. We collect this information when you voluntarily provide it to us through forms on our website or other direct interactions.
            </p>

            <h3>Usage Data</h3>
            <p>
              We may collect information about your device, browsing actions, and patterns when you visit our website. This may include your IP address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, and other statistics.
            </p>

            <h3>Cookies and Tracking Technologies</h3>
            <p>
              Our website may use &quot;cookies&quot; to enhance the user experience. A cookie is a small file placed on your device that helps us analyze web traffic and remember your preferences. You can choose to accept or decline cookies.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To personalize user experience and respond to your individual needs.</li>
              <li>To improve our website based on the information and feedback we receive from you.</li>
              <li>To process transactions and manage your appointments effectively.</li>
              <li>To send periodic emails regarding your order or other products and services.</li>
              <li>To comply with legal requirements and protect our rights.</li>
            </ul>

            <h2>3. How We Protect Your Information</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. We use secure servers, databases, and access protocols to ensure that your data is protected against unauthorized access.
            </p>

            <h2>4. Disclosure of Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personal Identification Information. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.
            </p>

            <h2>5. Your Consent</h2>
            <p>
              By using our Website, you consent to our website&apos;s privacy policy.
            </p>

            <h2>6. Changes to Our Privacy Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <div className="mt-12 rounded-2xl bg-secondary/5 p-8 border border-secondary/10">
              <h3 className="mt-0">Contacting Us</h3>
              <p>If there are any questions regarding this privacy policy, you may contact us:</p>
              <ul className="list-none pl-0">
                <li className="flex items-center gap-2">
                  <strong>Email:</strong> <a href="mailto:info@healthora.com">info@healthora.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <strong>Phone:</strong> <a href="tel:+111-111-1111">+111-111-1111</a>
                </li>
                <li className="flex items-center gap-2">
                  <strong>Address:</strong> 4648 Lorem ipsum Consectetur AA, 1920
                </li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
