"use client";

import Image from "next/image";
import Link from "next/link";
import xss from "xss";

export const CourseCard = ({
  title,
  desc,
  image,
  path
}: {
  title: string;
  desc: string;
  image?: string;
  path?: string;
}) => {
  return (
    <div className="flex flex-col h-full w-full bg-white border border-gray-100 shadow-md overflow-hidden group">
      {/* IMAGE */}
      <div className="relative w-full overflow-hidden">
        <Link href={path ?? "#"}>
          <Image
            src={image || "/no-image.jpeg"}
            alt={title}
            width={720}
            height={300}
            className="w-full aspect-[16/10] object-cover"
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-[#002147]/60 flex items-center justify-center translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500">
            <div className="w-10 h-10 rounded-full border border-[#fdc800] flex items-center justify-center text-white">
              🔗
            </div>
          </div>
        </Link>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* TITLE */}
        <h3 className="text-lg font-semibold text-[#002147] min-h-[56px]">
          <Link
            href={path ?? "#"}
            className="hover:text-[#fdc800] line-clamp-2"
            dangerouslySetInnerHTML={{ __html: xss(title) }}
          />
        </h3>

        {/* DESC */}
        <div
          className="text-sm text-gray-600 line-clamp-3 min-h-[60px]"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </div>
  );
};
