import { Shield, Zap, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

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

interface FeaturesSectionProps {
  onDiagnosis: () => void;
  disabled?: boolean;
  stockName?: string;
}

export default function FeaturesSection({ onDiagnosis, disabled = false, stockName = '' }: FeaturesSectionProps) {
  return (
    <div className="px-4 py-6">
      <div className="max-w-lg mx-auto space-y-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 w-full"
              style={{
                borderRadius: '12px 0 12px 0',
                background: 'linear-gradient(90deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.4) 100%)'
              }}
            >
              <Icon className="w-5 h-5 text-gray-300 flex-shrink-0" />
              <span className="text-gray-200 text-sm font-light">{feature.text}</span>
            </div>
          );
        })}
      </div>

      <div className="px-4 mt-6">
        <div className="max-w-lg mx-auto">
          <button
            onClick={onDiagnosis}
            disabled={disabled}
            className="relative group disabled:opacity-50 disabled:cursor-not-allowed w-full"
          >
            <div
              className="relative text-white font-bold text-lg py-5 pl-8 pr-24 rounded-full transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 text-left"
              style={{
                backgroundImage: 'url(/assets/button.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span className="drop-shadow-lg">
                {stockName ? `Analyze ${stockName} Now` : 'Start AI Analysis'}
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="max-w-lg mx-auto relative">
          <div className="absolute -top-3 left-4 z-10">
            <div className="bg-accent-orange/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
              <AlertTriangle className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-semibold">WARNING</span>
            </div>
          </div>

          <div
            className="bg-gray-900/50 backdrop-blur-sm border border-accent-orange/30 px-5 py-5 pt-7"
            style={{
              borderRadius: '12px 0 12px 0'
            }}
          >
            <p className="text-gray-300 text-xs leading-relaxed font-light">
              <span className="font-semibold text-accent-gold">RISK WARNING</span>: Trading and investing involves substantial risk of loss and is not suitable for all investors. This information is for informational and educational purposes only and does not constitute financial, investment, or trading advice. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
