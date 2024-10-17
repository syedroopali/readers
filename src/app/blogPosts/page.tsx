import Card from "@/app/_components/Card";

export default async function BlogPosts() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return (
    <div className="max-w-7xl border-[1px] border-gray-500 m-auto ">
      <div className="grid grid-cols-2 sm:grid-cols-3 items justify-items-center  gap-3 p-3">
        {data.posts?.map((post: any) => (
          <Card postData={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
