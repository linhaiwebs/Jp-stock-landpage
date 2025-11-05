import { ArrowLeft, Newspaper, Calendar, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Press() {
  const pressReleases = [
    {
      date: 'January 15, 2025',
      title: 'AI Stock Diagnosis Service Launches Official Version',
      summary: 'We have officially released our AI-powered stock diagnosis service featuring cutting-edge technology. The service is free to use.',
      category: 'Service'
    },
    {
      date: 'January 10, 2025',
      title: 'Expanded Stock Data Coverage: Now Supports All Listed Stocks',
      summary: 'We now support comprehensive coverage of listed stocks across major markets, enabling analysis of a wider range of securities.',
      category: 'Feature Update'
    },
    {
      date: 'December 20, 2024',
      title: 'Beta Version Launch Announcement',
      summary: 'We have released the beta version of our AI Stock Diagnosis Service and begun testing with general users.',
      category: 'Service'
    },
    {
      date: 'December 1, 2024',
      title: 'AI Stock Diagnosis Service Development Begins',
      summary: 'We have begun development of our AI-powered stock diagnosis service, aimed at democratizing investment information.',
      category: 'Company'
    }
  ];

  const mediaKits = [
    {
      title: 'Company Overview',
      description: 'Service overview, mission, vision, and more',
      format: 'PDF'
    },
    {
      title: 'Logo Assets',
      description: 'Logo files (PNG and SVG formats)',
      format: 'ZIP'
    },
    {
      title: 'Service Information',
      description: 'Feature descriptions and usage guides',
      format: 'PDF'
    }
  ];

  const mediaContact = {
    department: 'Media Relations',
    email: 'press@ai-stock-diagnosis.example.com',
    phone: '+81-80-3376-0625',
    hours: 'Weekdays 9:00 AM - 6:00 PM JST'
  };

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
              <Newspaper className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Press Releases</h1>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            Press releases, media coverage, and news about our AI Stock Diagnosis Service.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Press Releases</h2>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200 hover:border-blue-300 transition-all hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-sm font-semibold text-gray-600">{release.date}</span>
                    </div>
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {release.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{release.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    {release.summary}
                  </p>
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    Read More <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Coverage</h2>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                No media coverage is currently available.
                We will update this section as coverage becomes available.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>For Media Inquiries:</strong>
                  Interview requests and service inquiries can be directed to our media contact below.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Kit</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide press materials for media professionals.
              Please download and use as needed.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {mediaKits.map((kit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-5 border border-slate-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{kit.title}</h3>
                    <span className="bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {kit.format}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">{kit.description}</p>
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Media kit downloads are currently being prepared.
                For immediate needs, please contact our media relations team.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Contact</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                For interview requests and press release inquiries,
                please contact us at the following:
              </p>
              <div className="bg-white rounded-lg p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Department:</span>
                  <span className="text-gray-700">{mediaContact.department}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Email:</span>
                  <span className="text-blue-600">{mediaContact.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Phone:</span>
                  <span className="text-gray-700">{mediaContact.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900 w-24 flex-shrink-0">Hours:</span>
                  <span className="text-gray-700">{mediaContact.hours}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                *Excluding weekends, holidays, and year-end/New Year period. Responses to inquiries
                may take several days depending on the nature of the request.
              </p>
            </div>
          </section>

          <div className="bg-slate-100 rounded-lg p-6 border border-slate-200">
            <h3 className="font-bold text-gray-900 mb-3">Disclaimer</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Information contained in press releases is accurate as of the publication date.
              Due to business reasons and various circumstances following the publication date,
              content may be subject to change. Please note that we assume no responsibility
              for the accuracy of information after the publication date or for actions taken
              based on press release content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
