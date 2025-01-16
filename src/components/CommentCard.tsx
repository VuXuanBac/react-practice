import { useState } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

import { Comment } from "../data/comments";
import CommentsList from "./CommentsList";
import CommentButton from "./CommentButton";
import { getTotalComments } from "../utils/helper";
import CommentReactions from "./CommentReactions";

export interface CommentCardProps {
  comment: Comment;
  level: number;
}

export default function CommentCard({ comment, level }: CommentCardProps) {
  const [showComments, setShowComments] = useState(false);
  const [focusComposer, setFocusComposer] = useState(false);

  const totalComments = getTotalComments(comment.subcomments);
  return (
    <>
      <div
        className="flex items-start"
        title={comment.timestamp.toLocaleString()}
      >
        <img
          src={`https://robohash.org/${comment.author}`}
          alt={`${comment.author}'s avatar`}
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />

        <div className="ml-3 flex flex-col flex-1 text-sm">
          <h4 className="text-gray-800 font-semibold ">{comment.author}</h4>
          <span className="text-gray-700">
            {comment.content.split(/(\r\n|\n)/g).map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </span>

          <div className="mt-1 self-end flex gap-3">
            <CommentReactions reactions={comment.reactions} />
            <CommentButton
              totalComments={totalComments}
              showComments={showComments}
              onClickShowComments={setShowComments}
              onClickLeaveAComment={() => {
                setShowComments(totalComments > 0 ? true : !showComments);
                setFocusComposer(!focusComposer);
              }}
            />
          </div>
        </div>
      </div>

      <div className="ml-5 mt-3" hidden={!showComments}>
        <CommentsList
          comments={comment.subcomments}
          level={level + 1}
          focusComposer={focusComposer}
        />

        <div className="flex justify-end *:w-5 *:h-5">
          <button type="button" onClick={() => setShowComments(false)}>
            <ArrowUpCircleIcon className="text-stone-600" />
          </button>
        </div>
      </div>
    </>
  );
}
