"use client";

import IconNext from "@/app/components/atoms/IconNext";
import { FormPopup } from "@/app/components/molecules/FormPopup";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export const AboutSection = ({ data }: { data?: any }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  const features: { text: string }[] = data?.items || [];

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-14">
        <div className="relative lg:col-span-5 w-full mb-16 lg:mb-0">
          <div className="relative flex items-end">
            <div className="flex-1">
              <Image
                src={data?.image?.node?.mediaItemUrl || "/abount.png"}
                alt="Students"
                width={600}
                height={760}
                className="w-full object-cover -mb-20 rounded-2xl relative z-20"
                priority
                fetchPriority="high"
              />
              <div className="flex relative z-30 ">
                <div className="flex-1" />
                <div
                  className="bg-[#ffc224] w-[170px] md:w-[220px] px-2 md:px-6 py-8 md:py-10 flex items-center gap-3 rounded-tl-[32px] md:rounded-tl-[24px] cursor-pointer transition-colors group"
                  onClick={() => setIsVideoOpen(true)}
                  role="button"
                  tabIndex={0}
                  aria-label="Xem video giới thiệu"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setIsVideoOpen(true);
                    }
                  }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow flex-shrink-0 group-hover:bg-[#161439] transition-colors duration-300">
                    <FaPlay className="text-black text-xl ml-0.5 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <p className="text-white font-bold text-md md:text-xl leading-snug select-none">
                    {data?.textVideo}
                  </p>
                </div>
              </div>
              <div className="flex absolute left-8 bottom-0 z-10">
                <div className="flex-1" />
                <div className="bg-[#ffc224] w-[170px] md:w-[490px] px-4 py-8 md:py-10 flex items-center gap-3 rounded-bl-3xl md:rounded-bl-2xl"></div>
              </div>

              <div className="hidden md:flex absolute bottom-4 md:bottom-7 z-40 -left-1 md:-left-5 bg-white rounded-2xl border border-gray-100 px-4 md:px-5 py-3 md:py-2 flex-col items-center gap-1 md:gap-2 shadow-[0_15px_30px_rgba(0,0,0,0.12),-8px_8px_0_0_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-1">
                  <span className="text-lg md:text-md font-extrabold text-[#1a1d3b]">
                    {data?.number}
                  </span>
                  <span className="text-sm md:text-md font-medium text-primary">
                    {data?.textColor}
                  </span>
                </div>
                <Image
                  src={"/humans.png"}
                  alt="Students"
                  width={160}
                  height={50}
                  className="object-contain "
                />
              </div>
            </div>
            <div className="w-[85px] md:w-[110px] h-[280px] md:h-[300px] bg-[#6d6c80] flex flex-col items-center justify-end py-6 mt-auto rounded-br-2xl rounded-tr-2xl z-30 relative">
              <div
                className="text-white text-lg md:text-xl font-semibold tracking-widest uppercase"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)"
                }}
              >
                {data?.textYear}
              </div>
              <div
                className="text-white text-5xl md:text-7xl font-extrabold tracking-widest uppercase"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)"
                }}
              >
                {data?.numberYear}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative lg:col-span-7 mt-8 lg:mt-0">
          <div className="absolute -top-2 right-0 pointer-events-none select-none">
            <svg width="52" height="52" viewBox="0 0 50 50" fill="none">
              <path
                d="M25 2L27.5 22.5L48 25L27.5 27.5L25 48L22.5 27.5L2 25L22.5 22.5L25 2Z"
                fill="none"
                stroke="#d0cef8"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="inline-block bg-[#eeeeff] text-primary text-sm font-semibold px-5 py-1.5 rounded-full mb-5">
            {data?.textColorInBox}
          </div>
          <h2 className="text-[2rem] md:text-[2.4rem] font-extrabold text-[#1a1d3b] leading-tight mb-5">
            {data?.title}
          </h2>
          <p className="text-gray-800 text-md leading-relaxed mb-4 font-medium">
            {data?.text}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="relative  text-gray-500 text-md leading-relaxed">
              {data?.description}
            </div>
            <div>
              <ul className="space-y-4">
                {features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <IconNext />
                    <span className="text-[#1a1d3b] font-extrabold text-sm">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            onClick={() => setShowPopup(true)}
            className="inline-flex cursor-pointer items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-[14px] shadow-[4px_4px_0_0_#1a1d3b] hover:shadow-[2px_2px_0_0_#1a1d3b] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 group"
          >
            {data?.textButton || "Liên hệ ngay"}
            <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black/80 px-4">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setIsVideoOpen(false)}
          />

          <div className="relative w-[90vw] md:w-[80vw] max-w-5xl aspect-video z-10 bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              className="absolute -top-10 right-0 lg:-right-10 text-white hover:text-gray-300 text-3xl font-bold p-2 z-20"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Đóng video"
            >
              &times;
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${data?.idVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {mounted && showPopup && (
        <FormPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
    </div>
  );
};
