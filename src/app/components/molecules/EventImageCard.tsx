import React from "react";
import Image from "next/image";

interface EventImageCardProps {
  src: string;
  alt: string;
}

export const EventImageCard = ({ src, alt }: EventImageCardProps) => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
