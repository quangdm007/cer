import React from "react";

export default function DefaultLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-[1440px] mx-auto md:px-2 px-3">{children}</div>;
}
