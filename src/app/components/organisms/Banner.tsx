"use client";

import { BannerNavBtn } from "@/app/components/atoms/BannerNavBtn";
import {
  BannerSlide,
  type BannerSlideData
} from "@/app/components/molecules/BannerSlide";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DEFAULT_SLIDES: BannerSlideData[] = [
  {
    image: { node: { mediaItemUrl: "/slide-01.png" } }
  },
  {
    image: { node: { mediaItemUrl: "/slide-02.png" } }
  }
];

export const Banner = ({ data }: { data: any }) => {
  const swiperRef = useRef<any>(null);

  const slides: BannerSlideData[] =
    data && data.length > 0
      ? data.map((item: any) => ({
          image: item.image
        }))
      : DEFAULT_SLIDES;

  return (
    <section className="relative w-full overflow-hidden" aria-label="Banner">
      <BannerNavBtn
        direction="prev"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <BannerNavBtn
        direction="next"
        onClick={() => swiperRef.current?.slideNext()}
      />

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Pagination]}
        loop={slides.length > 1}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet banner-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active banner-bullet-active"
        }}
        speed={700}
        className="w-full banner-swiper"
      >
        {slides.map((slide: any, index: any) => (
          <SwiperSlide key={index} className="h-auto">
            <BannerSlide slide={slide} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .banner-swiper,
        .banner-swiper .swiper-wrapper,
        .banner-swiper .swiper-slide {
          height: auto !important;
        }
        .banner-swiper .swiper-pagination {
          bottom: 16px;
        }
        .banner-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 9999px;
          transition: all 0.3s;
          opacity: 1;
        }
        .banner-bullet-active {
          background: #facc15;
          width: 28px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
};
