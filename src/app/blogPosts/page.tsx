import Card from "@/app/_components/Card";

export default function BlogPosts() {
  //   const data = async function () {
  //     const res = await fetch("https://dummyjson.com/posts");
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   data();

  const postData = [
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 192,
        dislikes: 25,
      },
      views: 305,
      userId: 121,
    },
    {
      id: 1,
      title: "His mother had always taught him",
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      tags: ["history", "american", "crime"],
      reactions: {
        likes: 192,
        dislikes: 25,
      },
      views: 305,
      userId: 121,
    },
  ];

  return (
    <div className="max-w-7xl border-[1px] border-gray-500 m-auto ">
      <div className="grid grid-cols-2 items justify-items-center  gap-3 p-2">
        {/* ///////////////////////////////////////////////////////////////// */}

        {postData.map((post) => (
          <Card postData={post} key={post.id} />
        ))}
        {/* //////////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
}
