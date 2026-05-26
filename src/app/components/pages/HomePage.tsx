import { Banner } from "@/app/components/organisms/Banner";
import { FeaturesSection } from "@/app/components/organisms/FeaturesSection";
import { NewsSection } from "@/app/components/organisms/NewsSection";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() =>
  import("@/app/components/organisms/AboutSection").then(
    (mod) => mod.AboutSection
  )
);
const CourseSection = dynamic(() =>
  import("@/app/components/organisms/CourseSection").then(
    (mod) => mod.CourseSection
  )
);
const CertificateSection = dynamic(() =>
  import("@/app/components/organisms/CertificateSection").then(
    (mod) => mod.CertificateSection
  )
);
const StatsSection = dynamic(() =>
  import("@/app/components/organisms/StatsSection").then(
    (mod) => mod.StatsSection
  )
);
const TestimonialSection = dynamic(() =>
  import("@/app/components/organisms/TestimonialSection").then(
    (mod) => mod.TestimonialSection
  )
);

export default function HomePage({ data: homeData }: { data: any }) {
  const bannerSlides = homeData?.pageBy?.trangChu?.banner;
  const featuresSection = homeData?.pageBy?.trangChu?.featuresSection;
  const aboutSection = homeData?.pageBy?.trangChu?.aboutSection;
  const courseSection = homeData?.pageBy?.trangChu?.courseSection;
  const certificateSection = homeData?.pageBy?.trangChu?.certificateSection;
  const statsSection = homeData?.pageBy?.trangChu?.statsSection;
  const testimonialSection = homeData?.pageBy?.trangChu?.testimonialSection;
  const newsSection = homeData?.pageBy?.trangChu?.newsSection;

  return (
    <>
      <Banner data={bannerSlides} />
      <FeaturesSection data={featuresSection} />
      <AboutSection data={aboutSection} />
      <CourseSection data={courseSection} />
      <CertificateSection data={certificateSection} />
      <StatsSection data={statsSection} />
      <TestimonialSection data={testimonialSection} />
      <NewsSection data={newsSection} />
    </>
  );
}
