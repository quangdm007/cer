"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const HeaderTop = ({ headerData }: { headerData: any }) => {
  const router = useRouter();
  const [valueSearch, setValueSearch] = useState<string>("");
  const handleSearch = () => {
    router.push(`/tin-tuc?search=${valueSearch}`);
    setValueSearch("");
  };
  return (
    <div className="bg-gray-100 text-black py-2 px-4 lg:px-0 hidden md:block z-50 relative">
      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center items-center">
        <div className="flex items-center justify-between space-x-6 w-full">
          <Link href="/" className="flex items-center mx-auto md:mx-0">
            <Image
              src={headerData?.logo?.node?.mediaItemUrl || "/logo.png"}
              alt="Logo Đại học Công Đoàn"
              width={300}
              height={300}
              priority
              fetchPriority="high"
              className="w-[80px] lg:w-[80px]"
            />
          </Link>
          {/* Search Bar */}
          <div className="flex-1 max-w-lg hidden md:block px-4">
            <div className="relative flex items-center w-full h-10 rounded-full bg-white overflow-hidden shadow-sm border border-gray-100">
              <input
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Tìm kiếm khóa học, tin tức..."
                className="w-full h-full px-4 outline-none text-gray-700 bg-transparent text-sm"
              />
              <button
                onClick={handleSearch}
                type="button"
                aria-label="Tìm kiếm"
                className="h-full px-5 bg-primary flex items-center justify-center transition-colors hover:bg-yellow-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px] text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href={headerData?.phone || "tel:0438573204"}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hover:text-primary transition-all duration-300">
                  {headerData?.titlephone || "(84-4) 3.857.3204"}
                </span>
              </div>
            </Link>
            <Link href={headerData?.email || "mailto:dhcongdoan@dhcd.edu.vn"}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hover:text-primary transition-all duration-300">
                  {headerData?.titleemail || "dhcongdoan@dhcd.edu.vn"}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
