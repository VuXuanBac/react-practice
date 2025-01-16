import { useState } from "react";

export interface PostBodyProps {
  content: string;
}

export default function PostBody({ content }: PostBodyProps) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="text-gray-700 text-sm text-justify post-content">
      <div
        className={seeMore ? "" : "line-clamp-5"}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <button
        type="button"
        onClick={() => setSeeMore(!seeMore)}
        className="mt-2 text-blue-600 hover:underline"
      >
        {seeMore ? "See Less" : "See More"}
      </button>
    </div>
  );
}
