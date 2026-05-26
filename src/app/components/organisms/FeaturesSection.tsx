"use client";

import { FeatureCard } from "@/app/components/molecules/FeatureCard";
import DefaultLayout from "../template/LayoutDefault";

const ICON_MAP = [
  { icon: "/hat.svg", iconColor: "#f5a623" },
  { icon: "/teacher.svg", iconColor: "#5751E1" },
  { icon: "/book.svg", iconColor: "#e84393" },
  { icon: "/certificate.svg", iconColor: "#2196f3" }
];

const DEFAULT_FEATURES: any[] = [
  {
    ...ICON_MAP[0]
  },
  {
    ...ICON_MAP[1]
  },
  {
    ...ICON_MAP[2]
  },
  {
    ...ICON_MAP[3]
  }
];

export const FeaturesSection = ({ data }: { data?: any }) => {
  const features =
    data && data.length > 0
      ? data.map((item: any, index: number) => ({
          ...ICON_MAP[index % ICON_MAP.length],
          title: item.title,
          description: item.description
        }))
      : DEFAULT_FEATURES;

  return (
    <section className="py-12 bg-white">
      <DefaultLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item: any, index: any) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </DefaultLayout>
    </section>
  );
};
