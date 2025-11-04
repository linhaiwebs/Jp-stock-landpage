import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
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
            <div className="bg-amber-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-amber-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Disclaimer</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last Updated: November 4, 2025</p>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
              <p className="text-red-900 font-bold mb-2">Important Notice</p>
              <p className="text-red-800 leading-relaxed">
                This Service is for informational purposes only and does not constitute investment advice or solicitation. All investment decisions are your sole responsibility.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Nature of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                AI Stock Intelligence is an information and analysis tool that uses AI technology.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                This Service does NOT provide:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Investment advisory services</li>
                <li>Investment management services</li>
                <li>Financial product intermediation services</li>
                <li>Securities trading recommendations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                We are not registered investment advisors, brokers, or financial planners. We are not registered under any financial services regulations and cannot provide personalized investment advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information Accuracy</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                While we obtain information from sources we believe to be reliable, we make no representations or warranties regarding the accuracy, completeness, timeliness, or usefulness of any information provided.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                AI analysis results are based on historical data and statistical methods. They do not guarantee future investment performance. Market conditions can change, and actual results may differ significantly from analysis predictions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Stock price data, financial data, and other information may contain delays, interruptions, or errors due to data provider circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Investment Risks</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <p className="text-amber-900 font-semibold mb-2">Stock Investment Risks</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Stock investing involves the following risks:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Market Risk:</strong> Stock prices fluctuate due to market conditions, company performance, and economic factors, and you may lose your principal</li>
                  <li><strong>Credit Risk:</strong> Changes in a company's financial condition may significantly reduce investment value</li>
                  <li><strong>Liquidity Risk:</strong> You may not be able to buy or sell at desired prices or quantities</li>
                  <li><strong>Currency Risk:</strong> Foreign investments may incur losses due to exchange rate fluctuations</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Past performance does not guarantee future results. Market conditions can change unexpectedly, potentially causing significant losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Your Responsibility</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Information provided by this Service is for reference purposes only.
              </p>
              <p className="text-red-700 font-bold leading-relaxed mb-3">
                All investment decisions are your sole responsibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any damages (including but not limited to direct, indirect, special, incidental, or consequential damages) arising from your use of the Service. This limitation applies except in cases of our willful misconduct or gross negligence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We do not guarantee that the Service will:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Operate without interruption</li>
                <li>Be free of errors or bugs</li>
                <li>Provide the most current information at all times</li>
                <li>Function properly in all environments</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                The Service may be suspended without notice due to system maintenance, failures, or other reasons.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                The Service may contain links to external websites. We are not responsible for the content of external sites. Use of external sites is subject to their respective terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Professional Consultation</h2>
              <p className="text-gray-700 leading-relaxed">
                Before making investment decisions, consult with licensed securities firms, financial advisors, tax professionals, or legal counsel. We strongly recommend seeking professional advice, especially for large investments or complex tax situations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. AI Analysis Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                AI analysis provided by our Service is based on historical data and statistical methods.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Cannot predict unforeseen events</li>
                <li>May not immediately reflect structural market changes</li>
                <li>Provides reference information only and does not guarantee investment results</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Changes to Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Disclaimer at any time. Updated disclaimers will be effective when posted on the Service.
              </p>
            </section>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-sm text-gray-700">
                If you have questions about this Disclaimer, please contact us through our Contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
