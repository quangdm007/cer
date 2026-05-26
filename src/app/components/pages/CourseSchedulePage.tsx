import { GET_LICH_KHAI_GIANG } from "@/app/api/graphQL/getLichKhaiGiang";
import { PageBanner } from "@/app/components/molecules/PageBanner";
import { OpeningScheduleSection } from "@/app/components/organisms/OpeningScheduleSection";
import { DEFAULT_COURSE_SCHEDULE_PAGE } from "@/data/DefaultDataCourseSchedulePage";
import { getClient } from "@/lib/apolloClient";

export default async function LichKhaiGiang() {
  let scheduleData = null;

  try {
    const response = await getClient().query({
      query: GET_LICH_KHAI_GIANG,
      fetchPolicy: "no-cache"
    });

    if (!response?.data) {
      throw new Error("Failed to fetch lich khai giang data");
    }

    scheduleData = response.data?.pageBy?.lichKhaiGiang;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    scheduleData = DEFAULT_COURSE_SCHEDULE_PAGE[0].data.pageBy.lichKhaiGiang;
  }

  return (
    <>
      <PageBanner
        title="LỊCH KHAI GIẢNG"
        breadcrumbs={[
          { label: "Trang chủ", url: "/" },
          { label: "Lịch khai giảng" }
        ]}
      />

      <div className="max-w-[1440px] mx-auto">
        <OpeningScheduleSection data={scheduleData} />
      </div>
    </>
  );
}
