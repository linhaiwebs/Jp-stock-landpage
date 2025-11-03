export default function CircularAnalysisNav() {
  const analysisTypes = [
    { label: 'テクニカル分析', color: 'from-accent-orange to-accent-gold' },
    { label: 'ファンダメンタル分析', color: 'from-gray-600 to-gray-700' },
    { label: '越境分析', color: 'from-accent-orange to-accent-gold' },
    { label: '地政分析', color: 'from-gray-600 to-gray-700' },
  ];

  return (
    <div className="px-4 py-12 bg-pure-black">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-black mb-2">株価分析</h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {analysisTypes.map((type, index) => (
            <button
              key={index}
              className={`bg-gradient-to-r ${type.color} text-white font-bold py-6 px-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
