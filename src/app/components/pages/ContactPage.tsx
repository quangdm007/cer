import { GET_LIEN_HE } from "@/app/api/graphQL/getLienHe";
import { DEFAULT_CONTACT_PAGE } from "@/data/DefaultDataContact";
import { getClient } from "@/lib/apolloClient";
import { Contac } from "@/app/components/organisms/Contac";

export default async function LienHe() {
  let contactData = null;

  try {
    const response = await getClient().query({
      query: GET_LIEN_HE,
      fetchPolicy: "no-cache"
    });

    if (!response?.data) {
      throw new Error("Failed to fetch lien he data");
    }

    contactData = response?.data?.pageBy?.lienHe;
  } catch (error) {
    contactData = DEFAULT_CONTACT_PAGE[0].data.pageBy.lienHe;
    console.error("Failed to fetch contact data:", error);
  }

  return (
    <>
      <Contac data={contactData} />
    </>
  );
}
