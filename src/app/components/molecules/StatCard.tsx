"use client";

import { useCountUp } from "@/hooks/useCountUp";

export const StatCard = ({
  endVal,
  suffix,
  label
}: {
  endVal: number;
  suffix: string;
  label: string;
}) => {
  const { count, ref } = useCountUp(endVal, 2000);

  return (
    <div
      ref={ref}
      className="w-full md:flex-1 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-200 py-12 lg:py-14 px-2 xl:px-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-[3rem] lg:text-[4rem] font-extrabold text-primary mb-2 lg:mb-3 leading-none tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[#6D6B77] font-medium text-[13px] lg:text-[15px] text-center">
        {label}
      </div>
    </div>
  );
};
