import { useState } from "react";
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

        <div className="ml-3 flex flex-col flex-1">
          <h4 className="text-gray-800 font-semibold text-sm">
            {comment.author}
          </h4>
          <span className="text-gray-700 text-sm">
            {comment.content.split(/(\r\n|\n)/g).map((line) => (
              <p>{line}</p>
            ))}
          </span>

          <div className="mt-1 self-end flex gap-3 text-sm">
            <CommentReactions reactions={comment.reactions} />
            <CommentButton
              totalComments={totalComments}
              showComments={showComments}
              onClickShowComments={setShowComments}
            />
          </div>
        </div>
      </div>

      <div className="ml-5 mt-3" hidden={!showComments}>
        <CommentsList comments={comment.subcomments} level={level + 1} />
      </div>
    </>
  );
}
