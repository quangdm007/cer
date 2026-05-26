"use client";

import ChevronIcon from "@/icons/ChevronIcon";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumbs?: Array<{ label: string; url?: string }>;
}

export const PageBanner = ({ title, breadcrumbs }: PageBannerProps) => {
  return (
    <div
      className="relative w-full h-[180px] flex flex-col items-center justify-center text-white z-0 px-4"
      style={{
        background:
          "radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)"
      }}
    >
      <h1 className="text-xl md:text-3xl font-bold text-white text-center">
        {title}
      </h1>

      {/* {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center justify-center text-sm mt-2">
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronIcon />}
              {item.url ? (
                <Link
                  href={item.url}
                  className="text-white/80 hover:text-white font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white/80 font-medium">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};
