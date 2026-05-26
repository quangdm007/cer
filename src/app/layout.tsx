import { GET_CTA } from "@/app/api/graphQL/getCTA";
import { GET_HEADER_AND_FOOTER } from "@/app/api/graphQL/getHeaderAndFooter";
import { FixHead } from "@/app/components/atoms/FixHead";
import { TrackingSession } from "@/app/components/atoms/TrackingSession";
import "@/app/globals.css";
import { getClient } from "@/lib/apolloClient";
import { GoogleTagManager } from "@next/third-parties/google";
import dynamic from "next/dynamic";

const Header = dynamic(() =>
  import("@/app/components/molecules/Header").then((mod) => mod.Header)
);
const Footer = dynamic(() =>
  import("@/app/components/molecules/Footer").then((mod) => mod.Footer)
);
const FloatingCTA = dynamic(() =>
  import("@/app/components/molecules/FloatingCTA").then(
    (mod) => mod.FloatingCTA
  )
);

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID_DHCONGDOAN;

  let headerFooterData = null;
  let ctaDataFull = null;

  try {
    const [hfRes, ctaRes] = await Promise.all([
      getClient().query({
        query: GET_HEADER_AND_FOOTER,
        fetchPolicy: "no-cache"
      }),
      getClient().query({
        query: GET_CTA,
        fetchPolicy: "no-cache"
      })
    ]);

    if (hfRes.data) headerFooterData = hfRes.data;
    if (ctaRes.data) ctaDataFull = ctaRes.data;
  } catch (error) {
    console.error("Error fetching layout data:", error);
  }

  const headerData = headerFooterData?.pageBy?.trangChu?.header;
  const footerData = headerFooterData?.pageBy?.trangChu?.footer;
  const ctaData = ctaDataFull?.pageBy?.cta?.content;

  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="http://10.10.92.8:8080" />
        <link rel="dns-prefetch" href="http://10.10.92.8:8080" />
      </head>
      <body>
        <FixHead />
        <div className="max-w-[1920px] mx-auto">
          {gtmId && <GoogleTagManager gtmId={gtmId} />}
          <TrackingSession />
          <FloatingCTA data={ctaData} />
          <Header headerData={headerData} />
          <main>{children}</main>
          <Footer footerData={footerData} />
        </div>
      </body>
    </html>
  );
}
