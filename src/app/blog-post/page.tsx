import Card from "@/app/_components/Card";
import { Posts } from "@/app/_lib/PostData";

export const metadata = {
  title: "Posts",
};

export default async function BlogPosts() {
  const posts = await Posts();

  return (
    
  );
}
