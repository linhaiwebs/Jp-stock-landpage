import { Shield, Zap, CheckCircle, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    text: 'Secure & Private'
  },
  {
    icon: Zap,
    text: 'Instant Results'
  },
  {
    icon: CheckCircle,
    text: 'Verified AI'
  },
  {
    icon: Clock,
    text: 'Real-Time Analysis'
  }
];

export default function FeaturesSection() {
  return (
    <div className="px-4 py-6">
      <div className="max-w-lg mx-auto grid grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 border border-white/20 bg-white/5 backdrop-blur-sm"
              style={{
                borderRadius: '12px 0 12px 0'
              }}
            >
              <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <span className="text-gray-400 text-sm font-light">{feature.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
