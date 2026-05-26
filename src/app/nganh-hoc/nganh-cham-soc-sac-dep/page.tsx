import { GET_ALL_NGANH_HOC } from "@/app/api/graphQL/getAllNganhHoc";
import { GET_NGANH_HOC_CHI_TIET } from "@/app/api/graphQL/getNganhHocChiTiet";
import TrainingIndustryDetailLayout from "@/app/components/template/LayoutTrainingIndustryDetail";
import { getClient } from "@/lib/apolloClient";

export default async function NganhChamSocSacDep() {
  let courseData = null;
  let nganhHocData = null;

  try {
    const courseResponse = await getClient().query({
      query: GET_NGANH_HOC_CHI_TIET,
      variables: { uri: "nganh-hoc/nganh-cham-soc-sac-dep" },
      fetchPolicy: "no-cache"
    });

    const nganhHocResponse = await getClient().query({
      query: GET_ALL_NGANH_HOC,
      fetchPolicy: "no-cache"
    });

    if (!courseResponse?.data) {
      throw new Error("Failed to fetch Luat course data");
    }
    if (!nganhHocResponse?.data) {
      throw new Error("Failed to fetch training industry data");
    }

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
