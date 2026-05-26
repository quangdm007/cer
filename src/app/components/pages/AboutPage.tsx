"use client";

import DefaultLayout from "@/app/components/template/LayoutDefault";
import { clean } from "@/lib/sanitizeHtml";
import styles from "@/styles/Post.module.css";
import dynamic from "next/dynamic";

const PageBanner = dynamic(() =>
  import("@/app/components/molecules/PageBanner").then((mod) => mod.PageBanner)
);

export default function AboutUs({ aboutData }: any) {
  return (
    <>
      <PageBanner
        title={aboutData?.pageBy?.gioiThieu?.introduce?.title || "Giới thiệu"}
        breadcrumbs={[
          { label: "Trang chủ", url: "/" },
          {
            label:
              aboutData?.pageBy?.gioiThieu?.introduce?.title || "Giới thiệu"
          }
        ]}
      />
      <div className="py-12">
        <DefaultLayout>
          <article className={styles["post"]}>
            <main>
              {aboutData?.pageBy?.gioiThieu?.introduce?.content && (
                <>
                  <div className={styles["post__main"] + " lg:px-0"}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: clean(
                          aboutData?.pageBy?.gioiThieu?.introduce?.content
                        )
                      }}
                    />
                  </div>
                </>
              )}
            </main>
          </article>
        </DefaultLayout>
      </div>
    </>
  );
}
