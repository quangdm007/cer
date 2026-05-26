import { GET_ALL_NGANH_HOC } from "@/app/api/graphQL/getAllNganhHoc";
import { GET_NGANH_HOC_CHI_TIET } from "@/app/api/graphQL/getNganhHocChiTiet";
import TrainingIndustryDetailLayout from "@/app/components/template/LayoutTrainingIndustryDetail";
import { getClient } from "@/lib/apolloClient";

export default async function NganhCongNgheKyThuatDienDienTu() {
  let courseData = null;
  let nganhHocData = null;

  try {
    const courseResponse = await getClient().query({
      query: GET_NGANH_HOC_CHI_TIET,
      variables: { uri: "nganh-hoc/nganh-cong-nghe-ky-thuat-dien-dien-tu" },
      fetchPolicy: "no-cache"
    });

    const nganhHocResponse = await getClient().query({
      query: GET_ALL_NGANH_HOC,
      fetchPolicy: "no-cache"
    });

    courseData = courseResponse?.data?.pageBy;
    nganhHocData =
      nganhHocResponse?.data?.pageBy?.trangChu?.courseSection?.card || [];
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <TrainingIndustryDetailLayout
      courseData={courseData}
      nganhHocData={nganhHocData}
    />
  );
}
