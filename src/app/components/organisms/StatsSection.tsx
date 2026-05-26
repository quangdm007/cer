"use client";

import { StatCard } from "@/app/components/molecules/StatCard";

export const StatsSection = ({ data }: { data?: any }) => {
  return (
    <section
      className="py-24 relative overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url('/fact_bg.jpg')" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="w-full relative z-20 lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-[2.6rem] md:text-[3.2rem] font-bold text-black leading-[1.2] mb-6 tracking-tight">
              {data?.title || "Explore Majors & Programs"}
            </h2>

            <p className="text-gray-500/90 text-[18px] font-medium leading-[1.8] mb-8 max-w-[90%] mx-auto lg:mx-0">
              {data?.description ||
                "Choose from 16 undergraduate and graduate majors Board and the Mississippi Universities Board with goal of promoting collaboration."}
            </p>
          </div>
          <div className="w-full relative z-20 lg:col-span-7 mt-8 lg:mt-0">
            <div className="flex flex-col md:flex-row gap-7 relative items-center">
              {(data?.box || []).map((box: any, i: number) => (
                <StatCard
                  key={i}
                  endVal={Number(box.number)}
                  suffix={box.suffix}
                  label={box.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
