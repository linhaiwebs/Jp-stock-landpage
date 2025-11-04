import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last Updated: November 4, 2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                These Terms of Service govern your use of the AI Stock Intelligence service (the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to these Terms, you may not access or use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                The Service provides AI-powered stock market analysis and information tools.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                The Service includes the following features:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Display of basic stock information</li>
                <li>Stock price trend visualization</li>
                <li>AI-generated stock analysis reports</li>
                <li>Market data aggregation and statistical information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Important Notice</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <p className="text-gray-800 font-semibold mb-2">Critical Information</p>
                <p className="text-gray-700 leading-relaxed">
                  The Service is for informational purposes only and does not constitute investment advice, financial advice, trading advice, or any other type of professional advice. We are not registered investment advisors. The information provided should not be the sole basis for making investment decisions.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You are solely responsible for your investment decisions. We assume no liability for any losses incurred from using the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You agree not to engage in any of the following activities:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Violating any applicable laws or regulations</li>
                <li>Engaging in any unlawful or fraudulent activities</li>
                <li>Interfering with the operation of the Service</li>
                <li>Infringing on the rights of others</li>
                <li>Providing false or misleading information</li>
                <li>Using the Service for commercial purposes without authorization</li>
                <li>Attempting unauthorized access to our systems</li>
                <li>Placing excessive load on our systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                All content, text, images, software, and other materials in the Service are owned by us or our licensors and are protected by intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Service Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice. We shall not be liable for any modifications, suspensions, or discontinuations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms at any time. Updated Terms will be effective when posted on the Service. Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                These Terms shall be governed by and construed in accordance with the laws of Japan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Tokyo District Court.
              </p>
            </section>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-sm text-gray-700">
                If you have any questions about these Terms, please contact us through our Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
