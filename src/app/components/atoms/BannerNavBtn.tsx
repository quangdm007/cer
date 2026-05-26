import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface BannerNavBtnProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export const BannerNavBtn = ({ direction, onClick }: BannerNavBtnProps) => {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? "Slide trước" : "Slide tiếp theo"}
      className={`
        absolute top-1/2 -translate-y-1/2 z-10
        ${isPrev ? "left-3 md:left-5" : "right-3 md:right-5"}
        w-10 h-10 md:w-12 md:h-12
        bg-white/20 hover:bg-white/40 backdrop-blur-sm
        border border-white/30 hover:border-white/60
        text-white rounded-full
        flex items-center justify-center
        transition-all duration-300 shadow-lg
      `}
    >
      {isPrev ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
    </button>
  );
};
