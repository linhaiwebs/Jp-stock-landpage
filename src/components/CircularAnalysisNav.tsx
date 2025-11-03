export default function CircularAnalysisNav() {
  return (
    <div className="py-12 bg-black/60 backdrop-blur-sm">
      <div className="text-center mb-8 px-4">
        <h2 className="text-white text-2xl font-black mb-2">株価分析</h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-accent-orange via-accent-gold to-accent-orange rounded-full"></div>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="/assets/footer.png"
          alt="分析サイクル"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
