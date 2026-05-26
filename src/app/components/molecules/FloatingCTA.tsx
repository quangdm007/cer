"use client";

import Link from "next/link";
import { FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import dynamic from "next/dynamic";

const FormPopup = dynamic(() =>
  import("@/app/components/molecules/FormPopup").then((mod) => mod.FormPopup)
);

export const FloatingCTA = ({ data }: { data?: any }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
        <div
          onClick={() => setShowPopup(true)}
          className="bg-[#f97316] text-white py-6 px-3.5 rounded-l-md cursor-pointer flex flex-col items-center gap-3 shadow-md hover:-translate-x-1 transition-transform duration-300"
        >
          <HiOutlineMail className="text-xl" />
          <span
            className="font-semibold text-[18px] tracking-wide whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Tư vấn ngay
          </span>
        </div>

        <Link
          href={data?.[0]?.link || "mailto:contact@cer.edu.vn"}
          aria-label="Gửi email cho chúng tôi"
          className="bg-[#0f766e] p-3 rounded-l-full cursor-pointer shadow-md hover:-translate-x-1 transition-transform duration-300"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <SiGmail className="text-white text-2xl" />
          </div>
        </Link>

        <Link
          href={data?.[1]?.link || "https://m.me/yourpage"}
          target="_blank"
          aria-label="Nhắn tin qua Messenger"
          className="bg-[#16a34a] p-3 rounded-l-full cursor-pointer shadow-md hover:-translate-x-1 transition-transform duration-300"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <FaFacebookMessenger className="text-white text-3xl" />
          </div>
        </Link>

        <Link
          href={data?.[2]?.link || "tel:0987654321"}
          aria-label="Gọi điện thoại trực tiếp"
          className="bg-[#dc2626] p-3 rounded-l-full cursor-pointer shadow-md hover:-translate-x-1 transition-transform duration-300"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="animate-pulse">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
          </div>
        </Link>
      </div>

      {showPopup && (
        <FormPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
    </>
  );
};
