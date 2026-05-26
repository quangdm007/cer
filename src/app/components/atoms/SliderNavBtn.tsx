import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SliderNavBtnProps {
  direction: "prev" | "next";
  onClick?: () => void;
  className?: string;
}

export const SliderNavBtn = ({
  direction,
  onClick,
  className = ""
}: SliderNavBtnProps) => {
  const isPrev = direction === "prev";
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full bg-[#205C9E] text-white flex items-center justify-center hover:bg-[#1a4b82] transition-colors shadow-md ${className}`}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
    >
      {isPrev ? (
        <FaChevronLeft size={14} className="-ml-0.5" />
      ) : (
        <FaChevronRight size={14} className="ml-0.5" />
      )}
    </button>
  );
};
