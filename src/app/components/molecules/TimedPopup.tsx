"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FormPopup = dynamic(() =>
  import("@/app/components/molecules/FormPopup").then((mod) => mod.FormPopup)
);

export const TimedPopup = ({ delay = 12000 }: { delay?: number }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupTimerId = setTimeout(() => {
      setShowPopup(true);
    }, delay);

    return () => {
      clearTimeout(popupTimerId);
    };
  }, [delay]);

  if (!showPopup) return null;

  return <FormPopup showPopup={showPopup} setShowPopup={setShowPopup} />;
};
