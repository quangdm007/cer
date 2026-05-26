import { GET_LATEST_POSTS } from "@/app/api/graphQL/getPosts";
import { NewsCard } from "@/app/components/molecules/NewsCard";
import { getClient } from "@/lib/apolloClient";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export const NewsSection = async ({ data }: { data?: any }) => {
  let posts: any[] = [];
  try {
    const { data: res } = await getClient().query({
      query: GET_LATEST_POSTS,
      variables: { count: 4 },
      fetchPolicy: "no-cache"
    });
    posts = res?.posts?.nodes || [];
  } catch (error) {
    console.error("Failed to fetch latest posts:", error);
  }

  return (
    <section
      className="py-20 relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/h3_blog_bg.jpg')" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-[#f3f2fe] text-primary text-[13px] font-bold px-6 py-2 rounded-full mb-4">
            {data?.tag}
          </div>
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-[#1a1d3b] leading-[1.2] mb-4 tracking-tight">
            {data?.title}
          </h2>
          <p className="text-gray-500/90 text-[15px] font-medium leading-[1.8]">
            {data?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post: any, i: number) => (
            <NewsCard
              key={i}
              data={{
                slug: post.slug,
                imageUrl:
                  post.featuredImage?.node?.mediaItemUrl || "/no_image.png",
                title: post.title || "",
                categorySlug: post.categories?.nodes?.[0]?.slug || "",
                date: post.date
                  ? new Date(post.date).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    })
                  : "",
                author: "Admin"
              }}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href={"/tin-tuc"}>
            <div className="inline-flex cursor-pointer items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-[14px] shadow-[4px_4px_0_0_#1a1d3b] hover:shadow-[2px_2px_0_0_#1a1d3b] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 group">
              {data?.textButton || "Xem tất cả"}
              <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
