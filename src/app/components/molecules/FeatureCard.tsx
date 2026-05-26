export const FeatureCard = ({ item }: { item: any }) => {
  return (
    <div className="group flex flex-col items-center text-center p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
      <div className="mb-2 w-20 h-20 rounded-full flex items-center justify-center">
        <div
          className="w-14 h-14 icon-flip"
          style={{
            backgroundColor: item.iconColor,
            maskImage: `url(${item.icon})`,
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
            WebkitMaskImage: `url(${item.icon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            transition: "transform 0.4s ease"
          }}
        />
      </div>
      <style>{`
        .group:hover .icon-flip {
          transform: scaleX(-1);
        }
      `}</style>
      <h3 className="text-xl font-bold text-[#1a1d3b] mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};
