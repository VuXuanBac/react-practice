import { useState } from "react";
import { Comment } from "../data/comments";
import { ReactionUI } from "../data/reactions";
import CommentsList from "./CommentsList";
import ReactionsBar from "./ReactionBars";
import ReactionsStatistic from "./ReactionsStatistic";
import { HeartIcon } from "@heroicons/react/24/outline";
import CommentButton from "./CommentButton";
import { getTotalComments } from "../utils/helper";

export interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard({ comment }: CommentCardProps) {
  const [selectedReaction, setSelectedReaction] = useState<ReactionUI | null>(
    null
  );
  const [showReactionsBar, setShowReactionsBar] = useState<boolean>(false);
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
            <div
              onMouseEnter={() => setShowReactionsBar(true)}
              onMouseLeave={() =>
                setTimeout(() => setShowReactionsBar(false), 200)
              }
            >
              {showReactionsBar ? (
                <ReactionsBar
                  reactions={comment.reactions}
                  selectedReaction={selectedReaction}
                  onSelectReaction={setSelectedReaction}
                />
              ) : (
                <ReactionsStatistic
                  reactions={comment.reactions}
                  selectedReaction={selectedReaction}
                  defaultElement={<HeartIcon className="w-5 h-5" />}
                />
              )}
            </div>
            <CommentButton
              totalComments={totalComments}
              showComments={showComments}
              onClickShowComments={setShowComments}
            />
          </div>
        </div>
      </div>

      <div className="ml-5 mt-3" hidden={!showComments}>
        {/* <h3 className="text-gray-800 font-semibold mb-3">Comments</h3> */}
        <CommentsList comments={comment.subcomments} />
      </div>
    </>
  );
}
