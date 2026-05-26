import { GET_SEO_NGANH_KY_THUAT_MAY_LANH_VA_DIEU_HOA_KHONG_KHI } from "@/app/api/graphQL/getNganhHocChiTiet";
import { getSeoData } from "@/utils/getSeoData";
import { generateMetadataFromFullHead } from "@/utils/seoUtils";
import { Metadata } from "next";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSeoData(
    GET_SEO_NGANH_KY_THUAT_MAY_LANH_VA_DIEU_HOA_KHONG_KHI,
    "pageBy"
  );
  return {
    ...generateMetadataFromFullHead(
      seo.fullHead || "",
      seo.focusKeywords || ""
    ),
    robots: "index, follow"
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
