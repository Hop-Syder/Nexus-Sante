/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Terms & Conditions page for Nexus Santé Next.js
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Terms & Conditions | Nexus Santé",
  description: "Read our terms and conditions for using Nexus Santé services.",
};

export default function TermsConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <PageHeader title="Terms & Conditions" breadcrumb="Terms & Conditions" />
        
        <div className="container py-16 lg:py-24">
          <article className="prose prose-slate mx-auto max-w-4xl prose-headings:text-primary prose-h2:border-b prose-h2:border-secondary/20 prose-h2:pb-2 prose-strong:text-primary prose-a:text-secondary hover:prose-a:text-primary">
            <p className="lead">
              Welcome to Nexus Santé! These Terms and Conditions (&apos;Terms&apos;) govern your access to and use of our website. By accessing or using our Website, you agree to comply with and be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, please refrain from using the Website.
            </p>

            <h2>2. Use of the Website</h2>
            <p>
              You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations.</li>
              <li>Transmit any harmful or malicious content.</li>
              <li>Interfere with the Website&apos;s proper functioning.</li>
              <li>Use the Website for unauthorized commercial purposes.</li>
            </ul>

            <h2>3. Medical Disclaimer</h2>
            <p>
              The information provided on this Website is for general informational purposes only and should not be considered medical advice. Always consult a qualified healthcare professional for medical concerns or treatment.
            </p>

            <h2>4. Appointments and Payments</h2>
            <ul>
              <li>Appointments booked through the Website are subject to availability.</li>
              <li>Payments for services must be made in accordance with the policies outlined during the booking process.</li>
              <li>Cancellation and refund policies will be communicated at the time of appointment confirmation.</li>
            </ul>

            <h2>5. Intellectual Property Rights</h2>
            <p>
              All content on this Website, including text, graphics, logos, images, and software, is the property of Nexus Santé or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Nexus Santé shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use or inability to use the website.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms are governed by the laws of our jurisdiction, without regard to its conflict of law principles. Any disputes arising from these Terms shall be resolved in the appropriate local courts.
            </p>

            <div className="mt-12 rounded-2xl bg-secondary/5 p-8 border border-secondary/10">
              <h3 className="mt-0">Questions?</h3>
              <p>If you have any questions or concerns about these Terms, please contact us at:</p>
              <ul className="list-none pl-0">
                <li className="flex items-center gap-2">
                  <strong>Email:</strong> <a href="mailto:info@healthora.com">info@healthora.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <strong>Phone:</strong> <a href="tel:+111-111-1111">+111-111-1111</a>
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
