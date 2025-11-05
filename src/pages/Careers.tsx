import { ArrowLeft, Briefcase, Heart, Zap, Users, Target, TrendingUp, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const positions = [
    {
      title: 'Frontend Engineer',
      type: 'Full-time',
      location: 'Remote',
      description: 'Web application development using React/TypeScript',
      requirements: [
        '3+ years of professional experience with React/TypeScript',
        'Experience implementing responsive designs',
        'Strong understanding of UI/UX principles',
        'Team development experience using Git/GitHub'
      ]
    },
    {
      title: 'Backend Engineer',
      type: 'Full-time',
      location: 'Remote',
      description: 'API development and data processing using Node.js/Python',
      requirements: [
        '3+ years of professional experience with Node.js or Python',
        'Experience designing and developing RESTful APIs',
        'Database design and operations experience',
        'Experience with cloud services such as AWS'
      ]
    },
    {
      title: 'Data Scientist',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Machine learning model development and financial data analysis',
      requirements: [
        'Data analysis experience using Python/R',
        'Knowledge of machine learning and statistics',
        'Financial data handling experience (preferred)',
        'Research publications or conference presentations (preferred)'
      ]
    },
    {
      title: 'Financial Analyst',
      type: 'Full-time / Contract',
      location: 'Remote / Hybrid',
      description: 'Stock market analysis and report writing',
      requirements: [
        'CFA charter or equivalent knowledge',
        '3+ years of professional experience in financial institutions',
        'Knowledge of technical and fundamental analysis',
        'Strong written communication skills in English'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Comprehensive Benefits',
      description: 'Health insurance, 401(k) with matching, paid time off. Book allowance and professional certification support programs.',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Flexible Work Environment',
      description: 'Flexible hours and remote work options. We prioritize work-life balance and offer a supportive work environment.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Work alongside experienced professionals in a collaborative environment. Regular team meetings, knowledge sharing sessions, and social events.',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Opportunities to work with cutting-edge technologies. We support skill development and work with you to plan your career path.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; icon: string } } = {
      red: { bg: 'from-red-50 to-red-100', icon: 'bg-red-200 text-red-700' },
      blue: { bg: 'from-blue-50 to-blue-100', icon: 'bg-blue-200 text-blue-700' },
      green: { bg: 'from-green-50 to-green-100', icon: 'bg-green-200 text-green-700' },
      purple: { bg: 'from-purple-50 to-purple-100', icon: 'bg-purple-200 text-purple-700' }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
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
              <Briefcase className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Careers</h1>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              We're looking for talented individuals who want to grow with us.
              If you're passionate about democratizing investment information through AI technology
              and enjoy taking on challenges, we'd love to hear from you.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
              <p className="text-gray-800 font-semibold text-lg mb-2 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Our Vision
              </p>
              <p className="text-gray-700 leading-relaxed">
                We harness the power of technology to deliver investment information to everyone,
                creating a world where anyone can make informed investment decisions based on accurate data.
              </p>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits & Work Environment</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const colors = getColorClasses(benefit.color);
                const Icon = benefit.icon;

                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${colors.bg} rounded-lg p-5 border border-gray-200`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`${colors.icon} p-2 rounded-lg flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200 hover:border-blue-300 transition-all hover:shadow-md"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <p className="text-gray-700 mb-3">{position.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                      <span className="bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Requirements & Qualifications</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Resume Review</h4>
                    <p className="text-sm text-gray-700">
                      Submit your resume and cover letter (approximately 1 week)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Initial Interview</h4>
                    <p className="text-sm text-gray-700">
                      Video or in-person interview (skills and experience assessment)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Technical Assessment</h4>
                    <p className="text-sm text-gray-700">
                      Role-specific assignment or case study (for engineering and data science positions)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Final Interview</h4>
                    <p className="text-sm text-gray-700">
                      Executive interview (culture fit and motivation assessment)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    5
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Offer & Onboarding</h4>
                    <p className="text-sm text-gray-700">
                      Compensation discussion and start date coordination
                    </p>
                  </div>
                </li>
              </ol>
              <p className="text-sm text-gray-600 mt-4 pl-11">
                *The typical hiring process takes 2-4 weeks, though timing may vary depending on the role and circumstances.
              </p>
            </div>
          </section>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              How to Apply
            </h3>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              If you're interested in joining our team, please submit the following information via our contact form
              with the subject line "Career Application":
            </p>
            <ul className="text-sm text-gray-700 mb-4 space-y-1 list-disc list-inside">
              <li>Position applying for</li>
              <li>Your name</li>
              <li>Email address</li>
              <li>Resume (PDF format)</li>
              <li>Portfolio (for engineering positions)</li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
            >
              <Mail className="w-5 h-5" />
              Go to Contact Form
            </Link>
          </div>

          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Note:</strong> We are currently building our team.
              When full recruitment begins, we will announce it on this page and through press releases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
