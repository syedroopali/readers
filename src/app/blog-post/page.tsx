import Card from "@/app/_components/Card";
import { Posts } from "@/app/_lib/PostData";

export const metadata = {
  title: "Posts",
};

export default async function BlogPosts() {
  const posts = await Posts();

  return (
    <div className="max-w-5xl m-auto bg-white shadow-md">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items justify-items-center  gap-3 p-3">
        {posts.map((post: any) => (
          <Card postData={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
