import { GET_LICH_KHAI_GIANG } from "@/app/api/graphQL/getLichKhaiGiang";
import { DEFAULT_COURSE_SCHEDULE_PAGE } from "@/data/DefaultDataCourseSchedulePage";
import { getSeoData } from "@/utils/getSeoData";
import { generateMetadataFromFullHead } from "@/utils/seoUtils";
import { Metadata } from "next";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSeoData(GET_LICH_KHAI_GIANG, "pageBy");
  const fullHead =
    seo?.fullHead || DEFAULT_COURSE_SCHEDULE_PAGE[0].data.pageBy.seo.fullHead;
  const focusKeywords = seo?.focusKeywords || "";
  return {
    ...generateMetadataFromFullHead(fullHead, focusKeywords),
    robots: "index, follow"
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
