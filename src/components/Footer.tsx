import { Link } from 'react-router-dom';
import { FileText, Mail, ExternalLink, Info, Phone, Building } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 bg-black/80 backdrop-blur-sm border-t-2 border-accent-gold/30 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Footer Links Section */}
        <div className="border-t-2 border-gray-700 pt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
            {/* Legal Documents */}
            <div>
              <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4" />
                Legal
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-accent-gold hover:text-accent-gold-light hover:underline flex items-center gap-1"
                  >
                    Terms of Service <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-white hover:underline flex items-center gap-1"
                  >
                    Privacy Policy <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/disclaimer"
                    className="text-gray-300 hover:text-white hover:underline flex items-center gap-1"
                  >
                    Disclaimer <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-gray-100 mb-3 flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                Contact
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white hover:underline flex items-center gap-1"
                  >
                    Contact Us <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li className="flex items-center gap-1 text-gray-300">
                  <Phone className="w-3 h-3" />
                  <span>080-3376-0625</span>
                </li>
                <li className="text-gray-400 text-xs">
                  Hours: Weekdays 9:00 AM - 6:00 PM JST (International)
                </li>
              </ul>
            </div>

            {/* Service Information */}
            <div>
              <h4 className="font-bold text-gray-100 mb-3 flex items-center gap-2 text-sm">
                <Info className="w-4 h-4" />
                Service
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>Yuika Technologies Inc.</li>
                <li>AI Stock Analysis</li>
                <li>Real-time Stock Data</li>
                <li>Technical Analysis</li>
                <li>Stock Screening</li>
                <li>Market Information Provider</li>
              </ul>
            </div>

            {/* Company Information */}
            <div>
              <h4 className="font-bold text-gray-100 mb-3 flex items-center gap-2 text-sm">
                <Building className="w-4 h-4" />
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white hover:underline flex items-center gap-1"
                  >
                    About Us <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-gray-300 hover:text-white hover:underline flex items-center gap-1"
                  >
                    Team <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-300 hover:text-white hover:underline flex items-center gap-1"
                  >
                    Careers <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press"
                    className="text-gray-300 hover:text-white hover:underline flex items-center gap-1"
                  >
                    Press <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 pt-4 text-center">
            <p className="text-xs sm:text-sm text-gray-400 mb-3 font-medium">
              &copy; {currentYear} Yuika Technologies Inc. All rights reserved.
            </p>
            <div className="text-[10px] sm:text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto space-y-2">
              <p>
                <strong>INVESTMENT DISCLAIMER:</strong> The information provided on this website is for general informational and educational purposes only and should not be considered as financial, investment, or trading advice. We are not registered investment advisors, brokers, or financial planners. Any stock analysis, recommendations, or data presented are not guarantees of future performance and should not be the sole basis for making investment decisions.
              </p>
              <p>
                <strong>RISK WARNING:</strong> Trading stocks and other securities involves substantial risk of loss and is not suitable for every investor. The valuation of stocks may fluctuate, and as a result, you may lose more than your original investment. Past performance is not indicative of future results. You should carefully consider your financial situation, investment objectives, risk tolerance, and consult with qualified financial professionals before making any investment decisions.
              </p>
              <p>
                <strong>NO GUARANTEES:</strong> While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website. Any reliance you place on such information is strictly at your own risk. AI-generated analysis should be considered as supplementary information only and not as definitive investment guidance.
              </p>
              <p>
                <strong>LIMITATION OF LIABILITY:</strong> In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data, profits, or revenue arising out of, or in connection with, the use of this website or the information provided herein.
              </p>
              <p>
                By using this website, you acknowledge and agree that you are solely responsible for your investment decisions and that you will seek independent professional advice before making any investment. This website is not affiliated with, endorsed by, or sponsored by any stock exchange, regulatory authority, or financial institution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
