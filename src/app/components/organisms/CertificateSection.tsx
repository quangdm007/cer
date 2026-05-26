"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import IconNext from "@/app/components/atoms/IconNext";

export const CertificateSection = ({ data }: { data?: any }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = data?.idVideo || "X7R-q9rsRtU";
  const items: { text: string }[] = data?.items || [];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center relative">
          <div className="border border-gray-200 w-full pl-14 py-14 lg:w-[50%] xl:w-[48%] bg-white rounded-[20px] shadow-[0_0_50px_rgba(0,0,0,0.06)] lg:pr-32 relative z-10 xl:ml-[2rem]">
            <div className="inline-block bg-[#f3f2fe] text-primary text-[13px] font-bold px-5 py-2 rounded-full mb-3">
              {data?.textColorInTheBox || "Why Choose Our Campus"}
            </div>

            <h2 className="text-3xl  font-extrabold text-[#1a1d3b] leading-[1.25] mb-4 relative w-fit">
              {data?.title || "Get Your Quality Skills Certificate Online Exam"}
            </h2>

            <p className="text-gray-500/90 text-[15px] font-medium leading-[1.8] mb-5 max-w-[90%]">
              {data?.description ||
                "when an unknown printer took a galleytype and scrambled makespecimen book has survived"}
            </p>

            <ul className="space-y-4 mb-8">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <IconNext />
                  <span className="text-[#1a1d3b] font-extrabold text-[15px]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={data?.linkButton || "/about"}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-[14px] shadow-[4px_4px_0_0_#1a1d3b] hover:shadow-[2px_2px_0_0_#1a1d3b] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 group"
            >
              {data?.textButton || "Read More"}
              <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="w-full lg:w-[54%] xl:w-[50%] relative z-20 -mt-28 lg:-ml-[6%]">
            <div className="relative h-[450px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl ">
              <Image
                src={data?.images?.node?.mediaItemUrl || "/student.png"}
                alt="Graduation Students"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center text-[#ffc224] text-[18px] hover:scale-105 transition-transform duration-300 group outline outline-[8px] outline-white/30"
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Xem video"
                >
                  <FaPlay className="ml-1 group-hover:text-[#e09610] transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {isVideoOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4">
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
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
