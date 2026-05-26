"use client";

import Image from "next/image";

export const TestimonialCard = ({
  name,
  role,
  title,
  review,
  avatarUrl
}: {
  name: string;
  role: string;
  title: string;
  review: string;
  avatarUrl: string;
}) => {
  return (
    <div className="bg-[#f9f9f9] rounded-xl p-8 xl:p-10 relative overflow-hidden h-full">
      <div className="absolute top-4 right-4 md:right-8 opacity-[0.05] pointer-events-none rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 448 512"
          fill="currentColor"
        >
          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
      </div>

      <div className="flex flex-col gap-5 h-full relative z-10">
        <h4 className="text-[17px] font-bold text-primary">{title}</h4>
        <div className="flex gap-1 text-[#ffc224]">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        <p className="text-gray-500 font-medium text-[15px] leading-[1.8] flex-1">
          &quot;{review}&quot;
        </p>

        <div className="flex items-center gap-4 mt-2">
          <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-md">
            <Image src={avatarUrl} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h5 className="text-[#1a1d3b] font-bold text-[16px] leading-snug">
              {name}
            </h5>
            <span className="text-gray-500 text-[13px]">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
