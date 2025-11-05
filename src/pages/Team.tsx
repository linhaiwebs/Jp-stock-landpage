import { ArrowLeft, Users, Award, Code, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Team() {
  const teamMembers = [
    {
      name: 'Michael Chen',
      role: 'CEO / Founder',
      icon: Award,
      color: 'blue',
      description: 'Veteran with 15 years of experience in the financial industry. Founded the service to democratize investment information.',
      expertise: ['Business Strategy', 'Financial Market Analysis', 'Business Development']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO / Chief Technology Officer',
      icon: Code,
      color: 'purple',
      description: 'AI and machine learning expert with a career at leading tech companies before joining the team.',
      expertise: ['AI/ML Development', 'System Architecture', 'Data Science']
    },
    {
      name: 'David Martinez',
      role: 'Financial Analyst',
      icon: TrendingUp,
      color: 'green',
      description: 'Chartered Financial Analyst responsible for market analysis and research.',
      expertise: ['Stock Market Analysis', 'Technical Analysis', 'Fundamental Analysis']
    },
    {
      name: 'Emily Thompson',
      role: 'Compliance Officer',
      icon: Shield,
      color: 'orange',
      description: 'Financial law specialist overseeing regulatory compliance and risk management.',
      expertise: ['Financial Regulations', 'Risk Management', 'Compliance']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; icon: string; badge: string } } = {
      blue: {
        bg: 'from-blue-50 to-blue-100',
        border: 'border-blue-200',
        icon: 'bg-blue-200 text-blue-700',
        badge: 'bg-blue-600'
      },
      purple: {
        bg: 'from-purple-50 to-purple-100',
        border: 'border-purple-200',
        icon: 'bg-purple-200 text-purple-700',
        badge: 'bg-purple-600'
      },
      green: {
        bg: 'from-green-50 to-green-100',
        border: 'border-green-200',
        icon: 'bg-green-200 text-green-700',
        badge: 'bg-green-600'
      },
      orange: {
        bg: 'from-orange-50 to-orange-100',
        border: 'border-orange-200',
        icon: 'bg-orange-200 text-orange-700',
        badge: 'bg-orange-600'
      }
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
              <Users className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Our Team</h1>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              Our AI Stock Diagnosis Service is operated by a team of professionals in finance, technology, and legal compliance.
              Together, we bring diverse expertise to deliver valuable insights to investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {teamMembers.map((member, index) => {
              const colors = getColorClasses(member.color);
              const Icon = member.icon;

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} rounded-xl p-6 border-2 ${colors.border} hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${colors.icon} p-3 rounded-lg flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <div className={`inline-block ${colors.badge} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {member.role}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {member.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
              <p className="text-gray-800 font-semibold mb-3 text-lg">
                "Making Investment Information More Accessible and Understandable Through AI Technology"
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to simplify complex stock market data using AI technology, helping investors make better-informed decisions.
                We leverage technology to democratize investment information, providing an environment where more people can make investment decisions based on accurate data.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Values</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h3 className="font-bold text-gray-900 mb-2">Transparency</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We clearly explain our AI analysis methods and limitations,
                  ensuring users can properly understand the information.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h3 className="font-bold text-gray-900 mb-2">Neutrality</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We do not recommend specific stocks or solicit trades.
                  We are committed to providing objective information only.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h3 className="font-bold text-gray-900 mb-2">Continuous Improvement</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We sincerely value user feedback and
                  strive to continuously improve our services.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h3 className="font-bold text-gray-900 mb-2">Compliance</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We adhere to all applicable securities regulations and laws,
                  ensuring proper and ethical service operations.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <h3 className="font-bold text-gray-900 mb-3">Join Our Team</h3>
            <p className="text-sm text-gray-700 mb-4">
              We're looking for talented individuals to join our team.
              We seek professionals in finance, technology, data science, and other fields.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Career Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
