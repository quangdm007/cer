"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const FormPopup = dynamic(() =>
  import("@/app/components/molecules/FormPopup").then((mod) => mod.FormPopup)
);

export function PopupManager() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return <FormPopup showPopup={showPopup} setShowPopup={setShowPopup} />;
}
