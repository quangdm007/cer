import { getClient } from "@/lib/apolloClient";
import AboutUs from "@/app/components/pages/AboutPage";
import { GET_GIOI_THIEU } from "@/app/api/graphQL/getGioiThieu";

export default async function About() {
  let aboutData = null;
  try {
    const { data } = await getClient().query({
      query: GET_GIOI_THIEU,
      fetchPolicy: "no-cache"
    });
    aboutData = data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
  }

  return <AboutUs aboutData={aboutData} />;
}
