import { ArrowLeft, Building, Target, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
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
              <Building className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About Our AI Stock Diagnosis Service</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our AI Stock Diagnosis Service leverages cutting-edge artificial intelligence technology to analyze stock market data and provide valuable insights to investors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to democratizing investment information through technology, empowering more people to make informed investment decisions based on accurate and accessible data.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-800 font-semibold mb-3">
                  "Making Investment Information More Accessible and Understandable Through AI Technology"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to simplify complex stock market data using AI technology, helping investors make better-informed decisions with confidence and clarity.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Service Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-2">AI Analysis Technology</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We use state-of-the-art machine learning algorithms to extract valuable insights from vast amounts of market data.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-2">User-Friendly Interface</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Our intuitive interface makes it easy for everyone, from beginners to professionals, to access powerful stock analysis tools.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-2">Near Real-Time Data</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Market data is updated in near real-time, ensuring you always have access to the latest information.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-2">Free to Use</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Basic features are available for free, democratizing access to quality investment information for everyone.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Our Core Values</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Transparency</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We clearly explain our AI analysis methods and their limitations, helping users understand and interpret information correctly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Neutrality</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We do not recommend specific stocks or solicit trades. Our focus is on providing objective information only.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Continuous Improvement</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We value user feedback and are committed to continuously improving our services based on your input.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Compliance</strong>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We adhere to all applicable securities regulations and laws, ensuring proper and ethical service operations.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Company Overview</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <dl className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Company Name</dt>
                    <dd className="text-gray-700">Yuika Technologies Inc.</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">CEO</dt>
                    <dd className="text-gray-700">Harushi Nagata</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Location</dt>
                    <dd className="text-gray-700">Jinnan Building 6F, 1-12-4 Jinnan, Shibuya-ku, Tokyo, Japan</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Phone</dt>
                    <dd className="text-gray-700">080-3376-0625</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Email</dt>
                    <dd className="text-gray-700">ahuang2025123123@gmail.com</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <dt className="font-semibold text-gray-900 w-32 flex-shrink-0">Business</dt>
                    <dd className="text-gray-700">
                      Stock market data analysis and information services<br />
                      Development and operation of AI-powered investment information platforms
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Important Notice</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-amber-900 font-semibold mb-2">Not a Registered Investment Advisor</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  This service is not a registered broker-dealer or investment advisor under U.S. securities laws.
                  We do not provide investment advice, portfolio management services, or securities brokerage services.
                  All information provided by our service should be used for informational purposes only.
                </p>
              </div>
            </section>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-sm text-gray-700 mb-3">
                For questions, feedback, or inquiries about our service,
                please reach out through our contact form.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Go to Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
