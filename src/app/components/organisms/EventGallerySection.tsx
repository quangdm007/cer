"use client";

import { SliderNavBtn } from "@/app/components/atoms/SliderNavBtn";
import { EventImageCard } from "@/app/components/molecules/EventImageCard";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const EventGallerySection = ({
  title,
  images
}: {
  title: any;
  images: any;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const displayImages = [...images];

  return (
    <div className="py-16 w-full">
      <div className=" px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003B73] mb-2">
            {title}
          </h2>
        </div>

        <div className="relative mx-auto md:px-0 mt-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              el: ".event-pagination"
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className="w-full pb-8"
          >
            {displayImages.map((img, index) => (
              <SwiperSlide key={index}>
                <EventImageCard
                  src={img.image?.node?.mediaItemUrl}
                  alt={`Sự kiện ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 -translate-y-1/2 -left-14 z-10 hidden sm:block">
            <SliderNavBtn
              direction="prev"
              onClick={() => swiperRef.current?.slidePrev()}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-14 z-10 hidden sm:block">
            <SliderNavBtn
              direction="next"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .event-pagination .swiper-pagination-bullet { width: 8px !important; height: 8px !important; background-color: #B0C4DE !important; opacity: 1 !important; margin: 0 4px !important; transition: all 0.3s ease !important; border-radius: 9999px !important; }
          .event-pagination .swiper-pagination-bullet-active { width: 24px !important; background-color: #205C9E !important; }
        `
          }}
        />
        <div className="event-pagination flex justify-center items-center mt-4"></div>
      </div>
    </div>
  );
};
