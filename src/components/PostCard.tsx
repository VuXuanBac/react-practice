import { useState } from "react";
import { Post } from "../data/posts";
import { DEFAULT_REACTION, ReactionUI } from "../data/reactions";

import { HeartIcon } from "@heroicons/react/24/outline";
import CommentsList from "./CommentsList";
import ReactionsStatistic from "./ReactionsStatistic";
import CommentButton from "./CommentButton";
import { getTotalComments } from "../utils/helper";
import ReactionsBar from "./ReactionBars";
import { formatRelative, DATETIME_FORMAT } from "../utils/format";
import PostBody from "./PostBody";

export interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState<ReactionUI | null>(
    null
  );
  const [showComments, setShowComments] = useState(false);

  const totalComments = getTotalComments(post.comments);

  return (
    <div
      className="w-full shadow-md rounded-lg p-4 mb-4 bg-white"
      onMouseLeave={() => setShowReactions(false)}
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src={post.authorAvatarUrl}
          alt={`${post.author}'s avatar`}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div className="ml-3">
          <h4 className="text-gray-800 font-semibold mb-0.5">{post.author}</h4>
          <p
            className="text-gray-500 text-sm first-letter:uppercase"
            title={post.timestamp.format(DATETIME_FORMAT)}
          >
            {formatRelative(post.timestamp)}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mb-4">
        <PostBody content={post.body} />
        {/* Attached Image */}
        {post.coverUrl && (
          <figure className="my-4">
            <img
              src={post.coverUrl}
              alt="cover image"
              className="w-full rounded-lg object-cover border border-gray-200"
            />
          </figure>
        )}
      </div>

      <ReactionsStatistic
        reactions={post.reactions}
        selectedReaction={selectedReaction}
      />

      {/* Actions */}
      <div className="flex justify-around border-t pt-2 mt-2 text-gray-600">
        <div className="relative" onMouseEnter={() => setShowReactions(true)}>
          <button
            className="flex items-center hover:text-blue-500 min-h-7"
            onClick={() => {
              setSelectedReaction(selectedReaction ? null : DEFAULT_REACTION);
              setShowReactions(!!selectedReaction);
            }}
          >
            <span className=" mr-3">
              {selectedReaction ? (
                selectedReaction?.emoji
              ) : (
                <HeartIcon className="w-5 h-5 mr-1" />
              )}
            </span>
            <span className="font-bold">{selectedReaction?.text}</span>
          </button>

          {showReactions && (
            <div className="z-30 absolute -top-14 -left-12 flex gap-4 bg-white shadow-md rounded-full p-2 border border-gray-200">
              <ReactionsBar
                reactions={post.reactions}
                selectedReaction={selectedReaction}
                onSelectReaction={(reaction) => {
                  setSelectedReaction(reaction);
                  setShowReactions(false);
                }}
              />
            </div>
          )}
        </div>

        <CommentButton
          totalComments={totalComments}
          showComments={showComments}
          onClickShowComments={setShowComments}
        />
      </div>

      <div className="mt-2 border-t-2 pt-3" hidden={!showComments}>
        <h3 className="text-gray-800 font-semibold mb-3">Comments</h3>
        <CommentsList comments={post.comments} level={1} />
      </div>
    </div>
  );
}
