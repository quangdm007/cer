"use client";

import { GET_SAME_POSTS } from "@/app/api/graphQL/getPosts";
import { apolloClient } from "@/lib/getData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsCard } from "../molecules/NewsCard";

interface RelatedPost {
  title: string;
  slug: string;
  date: string;
  featuredImage: string;
  categorySlug: string;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export const RelatedPosts = ({
  post
}: {
  post: { slug: string; categories?: { slug: string }[] };
}) => {
  const [posts, setPosts] = useState<RelatedPost[]>([]);

  useEffect(() => {
    const categorySlug = post?.categories?.[0]?.slug;
    if (!categorySlug) return;

    apolloClient
      .query({
        query: GET_SAME_POSTS,
        variables: { category: categorySlug, size: 4 },
        fetchPolicy: "network-only"
      })
      .then(({ data }) => {
        const nodes = data?.posts?.nodes || [];
        const filtered: RelatedPost[] = nodes
          .filter((n: any) => n.slug !== post.slug)
          .slice(0, 3)
          .map((n: any) => ({
            title: n.title,
            slug: n.slug,
            date: formatDate(n.date),
            featuredImage: n.featuredImage?.node?.mediaItemUrl || "",
            categorySlug: n.categories?.nodes?.[0]?.slug || categorySlug
          }));
        setPosts(filtered);
      })
      .catch(() => {});
  }, [post]);

  if (posts.length === 0) return null;

  return (
    <section className="mt-12 min-w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Bài viết liên quan</h2>
        <Link
          href={`/tin-tuc/${post?.categories?.[0]?.slug ?? ""}`}
          className="text-sm font-semibold text-[#5751e1] hover:underline"
        >
          Xem tất cả
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((item, index) => (
          <NewsCard
            key={index}
            data={{
              slug: item.slug,
              imageUrl: item.featuredImage || "/image-post.png",
              title: item.title,
              date: item.date,
              author: "Admin",
              categorySlug: item.categorySlug
            }}
          />
        ))}
      </div>
    </section>
  );
};
