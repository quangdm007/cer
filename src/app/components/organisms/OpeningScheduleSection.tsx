"use client";

import { Button } from "@/app/components/atoms/Button";
import { LocationTimerCard } from "@/app/components/atoms/LocationTimerCard";
import { FormPopup } from "@/app/components/molecules/FormPopup";
import { EventGallerySection } from "@/app/components/organisms/EventGallerySection";
import { useState } from "react";

export const OpeningScheduleSection = ({ data }: { data: any }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003B73] mb-2 uppercase">
            {data.title}
          </h2>
          <p className="text-[#E3000F] text-sm md:text-base font-medium">
            {data.textColor}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.countdownTimer?.map((item: any, index: number) => (
            <LocationTimerCard
              key={index}
              location={item.location}
              date={item.date}
            />
          ))}
        </div>

        <div className="flex justify-center flex-col items-center">
          <Button
            variant="yellow"
            className="!font-extrabold text-white bg-[#FFB800] hover:bg-[#E5A600] rounded-full px-12 py-4 !text-xl md:!text-xl disabled:opacity-50 select-none shadow-md"
            onClick={() => setShowPopup(true)}
          >
            {data.textButton}
          </Button>
        </div>
      </div>
      <EventGallerySection title={data.titleImage} images={data.images} />

      {showPopup && (
        <FormPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
    </section>
  );
};
