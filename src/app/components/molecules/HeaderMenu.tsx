"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FormPopup } from "./FormPopup";

const DesktopMenu = dynamic(() =>
  import("@/app/components/molecules/DesktopMenu").then(
    (mod) => mod.DesktopMenu
  )
);
const MobileMenu = dynamic(() =>
  import("@/app/components/molecules/MobileMenu").then((mod) => mod.MobileMenu)
);

export const HeaderMenu = ({ headerData }: { headerData: any }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <>
      <div className="bg-white shadow-md sticky top-0 z-50 lg:px-0 px-2 flex justify-center">
        <div className="w-full max-w-[1440px] h-full">
          <div className="flex justify-between md:justify-between lg:justify-center items-center lg:gap-4 gap-1 h-24 w-full">
            <div className="flex justify-center items-center gap-8">
              <MobileMenu
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
            <div className="hidden md:block h-full">
              <DesktopMenu />
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-[#2A5298] md:bg-primary px-5 py-2 text-sm md:px-10 md:py-2 rounded-[20px] font-bold text-white md:text-base hover:bg-primary hover:text-[#002147] transition-all duration-300 whitespace-nowrap"
              >
                <span className="md:hidden">Đăng ký</span>
                <span className="hidden md:inline">Đăng ký tư vấn</span>
              </button>
            </div>
          </div>
          {mounted && showPopup && (
            <FormPopup showPopup={showPopup} setShowPopup={setShowPopup} />
          )}
        </div>
      </div>
    </>
  );
};
