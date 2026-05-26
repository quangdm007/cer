"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineCalendar } from "react-icons/hi";

export const NewsCard = ({ data }: { data?: any }) => {
  return (
    <div className=" bg-white rounded-xl shadow-[0_5px_40px_#cac9d6] border border-gray-300 overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-[8px_8px_0_0_#dce0ee] hover:-translate-y-1 hover:-translate-x-1 p-5">
      <Link
        href={`/tin-tuc/${data?.categorySlug}/${data?.slug}`}
        className="!no-underline"
      >
        <div className="relative h-[220px] w-full overflow-hidden rounded-xl">
          <Image
            src={data?.imageUrl}
            alt={data?.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex items-center gap-4 text-gray-500 text-[12px] font-medium mb-3">
            <div className="flex items-center gap-1.5">
              <HiOutlineCalendar className="text-primary text-[16px]" />
              <span>{data?.date}</span>
            </div>
            {/* <div className="flex items-center gap-1.5">
            <HiOutlineUser className="text-[#5751E1] text-[16px]" />
            <span>by {data?.author}</span>
          </div> */}
          </div>

          <h4 className="text-[17px] line-clamp-2 md:text-[18px] font-bold text-black leading-[1.4] transition-colors cursor-pointer tracking-tight ">
            {data?.title}
          </h4>
        </div>
      </Link>
    </div>
  );
};
