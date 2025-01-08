import { useState } from "react";
import { Post } from "../data/posts";
import Reactions, { DEFAULT_REACTION, ReactionType } from "../data/reactions";
import { HeartIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

export interface PostCardProps {
  post: Post;
}

const getDominantReaction = (reactions: { [key: string]: number }) => {
  // sort by number of reactions
  const sortedReactions = Object.entries(reactions).sort((a, b) => b[1] - a[1]);
  const dominantReaction = sortedReactions[0];
  return dominantReaction[1] > 0 ? dominantReaction[0] : "";
};

const getTotalReactions = (reactions: { [key: string]: number }) => {
  return Object.values(reactions).reduce((sum, count) => sum + count, 0);
};

export default function PostCard({ post }: PostCardProps) {
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState<ReactionType | null>(
    null
  );

  const dominantReaction = Reactions[getDominantReaction(post.reactions)];
  const dominantBackground = dominantReaction?.color || "bg-white";
  const totalReactions = getTotalReactions(post.reactions);

  const isSelectDominant = dominantReaction.name !== selectedReaction?.name;

  return (
    <div
      className={`max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 mb-4 ${dominantBackground}`}
      onMouseLeave={() => setShowReactions(false)}
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src={`https://robohash.org/${post.author}`}
          alt={`${post.author}'s avatar`}
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
        <div className="ml-3">
          <h4 className="text-gray-800 font-semibold">{post.author}</h4>
          <p className="text-gray-500 text-sm">
            {post.timestamp.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{post.title}</h3>
        <p className="text-gray-700 text-sm text-justify">{post.body}</p>
        {/* Attached Image */}
        {post.coverUrl && (
          <figure className="my-4">
            <img
              src={post.coverUrl}
              alt={`${post.title} cover image`}
              className="w-full rounded-lg object-cover border border-gray-200"
            />
          </figure>
        )}
      </div>

      {/* Dominant Reaction */}
      {dominantReaction && (
        <div className="mb-2 text-sm text-gray-700 flex items-center gap-2">
          <span className="text-lg z-20">{dominantReaction.emoji}</span>
          <span className="text-lg -ml-4 z-10">
            {isSelectDominant && selectedReaction?.emoji}
          </span>
          <span
            className={`text-sm ${
              selectedReaction && isSelectDominant ? "ml-0" : "ml-2"
            }`}
          >
            {totalReactions}
          </span>
        </div>
      )}

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
            <span className="text-xl mr-3">
              {selectedReaction ? (
                selectedReaction?.emoji
              ) : (
                <HeartIcon className="w-5 h-5 mr-1" />
              )}
            </span>
            <strong>{selectedReaction?.name || "Like"}</strong>
          </button>
          {/* Reactions Popup */}
          {showReactions && (
            <div className="absolute -top-14 -left-12 flex gap-4 bg-white shadow-md rounded-full p-2 border border-gray-200 z-10">
              {Object.entries(Reactions).map(([key, reaction]) => (
                <button
                  key={key}
                  className="text-2xl hover:scale-125 transition-transform"
                  title={reaction.name}
                  onClick={() => {
                    setSelectedReaction(reaction);
                    setShowReactions(false);
                  }}
                >
                  {reaction.emoji}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="flex items-center hover:text-blue-500">
          <ChatBubbleOvalLeftIcon className="w-5 h-5 mr-1" />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
}
