"use client";

import { CourseCard } from "@/app/components/molecules/CourseCard";

export const CourseSection = ({ data }: { data?: any }) => {
  const cards: any[] = data?.card || [];

  return (
    <section className="py-12 bg-[#f8f9ff] relative overflow-hidden">
      <div className="mx-auto px-4 max-w-[1440px]">
        <div className="text-center mb-6">
          <div className="inline-block bg-[#eeeeff] text-primary text-sm font-semibold px-5 py-1.5 rounded-full mb-4">
            {data?.textColorInTheBox}
          </div>
          <h2 className="text-[1.6rem] md:text-[2.8rem] font-extrabold text-[#1a1d3b] leading-tight mb-4">
            {data?.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-[15px]">
            {data?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {cards.map((card: any, i: number) => (
            <CourseCard
              key={i}
              course={{
                image: card.image?.node?.mediaItemUrl,
                title: card.title,
                description: card.description,
                link: card.link
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
