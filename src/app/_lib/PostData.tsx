// export async function Posts() {
export async function Posts() {
  const res = await fetch("https://dummyjson.com/posts?limit=0");
  const data = await res.json();
  return data.posts;
}

export async function PostById(id: number) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export async function PostComments({ id }: any) {
  const res = await fetch(`https://dummyjson.com/posts/2/comments`);
  const data = await res.json();
  return data;
}
