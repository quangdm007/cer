"use client";

import { TestimonialCard } from "@/app/components/molecules/TestimonialCard";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const TestimonialSection = ({ data }: { data?: any }) => {
  const boxes: any[] = data?.box || [];
  const slides = boxes.length > 0 ? [...boxes, ...boxes] : [];

  return (
    <section
      className="py-24 relative overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url('/testimonials_bg.jpg')" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <div className="inline-block bg-[#f3f2fe] text-primary text-[13px] font-bold px-6 py-2 rounded-full mb-4">
            {data?.tag || "Our Testimonials"}
          </div>
          <h2 className="text-4xl font-bold text-[#1a1d3b] leading-[1.2] tracking-tight">
            {data?.title || "What Students Think And Say About SkillGrow"}
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="w-full pb-10"
          >
            {slides.map((box: any, index: number) => (
              <SwiperSlide key={index} className="h-auto">
                <TestimonialCard
                  name={box.name || ""}
                  role={box.role || ""}
                  title={box.textColor || ""}
                  review={box.content || ""}
                  avatarUrl={box.avatar?.node?.mediaItemUrl || "/humans.png"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
