import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
              <Shield className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last Updated: November 4, 2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Yuika Technologies Inc. ("we," "our," or "us") operates the AI Stock Intelligence service. We are committed to protecting your privacy and handling your personal information responsibly in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may collect the following types of information when you use our Service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access log information (IP address, browser type, access time, etc.)</li>
                <li>Information collected through cookies and similar technologies</li>
                <li>Service usage history (viewed stocks, analyses performed, etc.)</li>
                <li>Contact information (email address, name) when you contact us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Providing, maintaining, and improving the Service</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Analyzing service usage and creating statistical data</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Enforcing our Terms of Service</li>
                <li>Sending service-related communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Google AdSense</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-gray-800 font-semibold mb-2">Third-Party Advertising</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We use Google AdSense to display advertisements on our Service. Google AdSense uses cookies to serve ads based on your visits to this site and other sites.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google's Ads Settings</a>.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use cookies to improve user experience and enhance our Service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Cookies are small text files sent to your computer by websites and stored in your browser. Cookies help us remember your preferences and provide a better service experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can configure your browser to reject cookies, but this may affect some features of our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Sharing Information with Third Parties</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We do not share your personal information with third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>When required by law or legal process</li>
                <li>To protect life, health, or property</li>
                <li>To cooperate with government agencies in performing their duties as required by law</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us through our Contact page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Service is not intended for individuals under the age of 18. If you are under 18, please obtain parental consent before using our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Changes to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Updated policies will be effective when posted on the Service. We encourage you to review this policy periodically.
              </p>
            </section>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-sm text-gray-700 mb-2">
                If you have questions about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Yuika Technologies Inc.</strong>
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Email: ahuang2025123123@gmail.com
              </p>
              <p className="text-sm text-gray-700">
                Hours: Weekdays 9:00-18:00 JST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
