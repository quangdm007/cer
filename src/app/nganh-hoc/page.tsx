"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingListPost } from "@/app/components/atoms/LoadingListPost";
import DefaultLayout from "@/app/components/template/LayoutDefault";
import { GET_ALL_NGANH_HOC } from "@/app/api/graphQL/getAllNganhHoc";
import { getData } from "@/lib/getData";
import { IndustryGroup } from "@/types/types";

const SliderBar = dynamic(() =>
  import("@/app/components/organisms/SliderBar").then((mod) => mod.SliderBar)
);

const FormPopup = dynamic(() =>
  import("@/app/components/molecules/FormPopup").then((mod) => mod.FormPopup)
);
const PageBanner = dynamic(() =>
  import("@/app/components/molecules/PageBanner").then((mod) => mod.PageBanner)
);

const CourseCard = dynamic(() =>
  import("@/app/components/atoms/CourseCard").then((mod) => mod.CourseCard)
);

export default function Page() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [nganhHoc, setNganhHoc] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/tin-tuc?page=${selected + 1}`);
  };

  useEffect(() => {
    const popupTimerId = setTimeout(() => {
      setShowPopup(true);
    }, 12000);

    return () => {
      clearTimeout(popupTimerId);
    };
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(GET_ALL_NGANH_HOC);
        if (!data) {
          throw new Error("No data returned from API");
        }
        setNganhHoc(data?.pageBy?.trangChu?.courseSection || {});
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const industryGroups: IndustryGroup[] = nganhHoc?.card || [];

  return (
    <div>
      {showPopup && (
        <FormPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
      <PageBanner
        title="Ngành Học"
        breadcrumbs={[{ label: "Trang chủ", url: "/" }, { label: "Ngành Học" }]}
      />
      <div className="py-24">
        <DefaultLayout>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9 ">
              {loading && <LoadingListPost count={6} col={3} />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {industryGroups.length > 0
                  ? industryGroups.map(
                      (industry: IndustryGroup, index: number) => (
                        <CourseCard
                          key={index}
                          title={industry.title || ""}
                          desc={industry.description || ""}
                          image={industry.image?.node?.mediaItemUrl || ""}
                          path={`${industry?.link || "/nganh-hoc"}`}
                        />
                      )
                    )
                  : !loading && (
                      <div className="col-span-3 h-[300px] flex items-center justify-center text-center text-gray-500">
                        {"Chưa có ngành học nào"}
                      </div>
                    )}
              </div>
            </div>

            <div className="lg:col-span-3">
              <SliderBar showForm={true} />
            </div>
          </div>
        </DefaultLayout>
      </div>
    </div>
  );
}
