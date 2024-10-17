import Link from "next/link";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";

export default function Card({ postData }: any) {
  return (
    <>
      <div className=" max-w-48 border-[2px] shadow-sm hover:shadow-md transition-all border-yellow-500 px-2 py-2 rounded">
        <h1 className="text-lg font-bold mb-1 leading-tight h-12 overflow-hidden tracking-tight text-orange-700">
          {postData.title}
        </h1>
        <p className="text-sm leading-none text-gray-600 text-justify tracking-tighter h-[5.2rem] overflow-hidden">
          {postData.body}
        </p>
        <Link
          href="/"
          className="text-sm mb-1 text-gray-600 inline-block hover:text-gray-950 transition-all"
        >
          read more..
        </Link>

        <div className="flex justify-between px-2">
          <div className="flex items-center gap-1">
            <AiOutlineLike className="text-lg text-blue-800 " />{" "}
            <p className="text-sm">{postData.reactions.likes}</p>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineDislike className="text-lg text-orange-800" />
            <p className="text-sm">{postData.reactions.dislikes}</p>
          </div>
        </div>
      </div>
    </>
  );
}
