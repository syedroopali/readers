import { PostById } from "@/app/_lib/PostData";

export async function generateMetadata({ params }) {
  const { title } = await PostById(params.postid);
  if (!title) return { title: "Page not Found" };
  const metaTitle =
    title
      .split(" ")
      .slice(0, 3)
      .map((word: string) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(" ") + "... ";
  return { title: metaTitle };
}

export default async function Page({ params }: any) {
  const post = await PostById(params.postid);
  if (!post) return;
  return <h1>{post.title}</h1>;
}
