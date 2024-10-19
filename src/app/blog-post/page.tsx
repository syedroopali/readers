import BlogPostCards from "@/app/_components/BlogPosts";
import { Posts } from "@/app/_lib/PostData";
import SearchBar from "../_components/SearchBar";

export const metadata = {
  title: "Posts",
};

export default async function BlogPosts() {
  const posts = await Posts();

  return (
    <>
      <div className="max-w-5xl mx-auto mb-2 sm:mb-4 sm:mt-20  md:mt-24 md:mb-6 ">
        <SearchBar postData={posts} />
      </div>
      <BlogPostCards posts={posts} />
    </>
  );
}
