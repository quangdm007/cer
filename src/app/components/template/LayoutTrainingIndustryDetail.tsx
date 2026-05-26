import { clean } from "@/lib/sanitizeHtml";
import styles from "@/styles/Post.module.css";
import { FormPopup } from "@/app/components/molecules/FormPopup";
import { PageBanner } from "@/app/components/molecules/PageBanner";
import { RelatedCourses } from "@/app/components/molecules/RelatedCourses";
import { LayoutBottom } from "@/app/components/template/LayoutBottom";
import { TimedPopup } from "@/app/components/molecules/TimedPopup";
import { LazyFormWrapper } from "../molecules/LazyFormWrapper";

export default function TrainingIndustryDetailLayout({
  courseData,
  nganhHocData
}: {
  courseData?: any;
  nganhHocData?: any;
}) {
  return (
    <div className="bg-[#f5f5f5]">
      <TimedPopup delay={12000} />
      <PageBanner title={courseData?.title || "Đang cập nhật..."} />
      <div className="py-10">
        <LayoutBottom
          isSticky={false}
          showVideoMajorDetail={false}
          showAllMajor={false}
          showRegister={true}
          showForm={false}
        >
          <>
            <article className={styles["post"]}>
              <main>
                {courseData && (
                  <>
                    <div className={styles["post__main"] + " lg:px-0"}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: clean(courseData?.nganh?.content)
                        }}
                      />
                    </div>
                  </>
                )}
              </main>
            </article>
          </>
          <LazyFormWrapper type="form-main" />
        </LayoutBottom>
        {nganhHocData && nganhHocData.length > 0 && (
          <RelatedCourses data={nganhHocData} />
        )}
      </div>
    </div>
  );
}
