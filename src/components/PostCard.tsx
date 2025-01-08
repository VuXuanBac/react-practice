import { useState } from "react";
import { Post, Reactions } from "../data/posts";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

export interface PostCardProps {
  post: Post;
}

const toTitleCase = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function PostCard({ post }: PostCardProps) {
  const [showReactions, setShowReactions] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 mb-4">
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
        <p className="text-gray-700 text-sm">{post.body}</p>
      </div>

      {/* Actions */}
      <div className="flex justify-around border-t pt-2 mt-2 text-gray-600">
        <div
          className="relative"
          onMouseEnter={() => setShowReactions(true)}
          onMouseLeave={() => setShowReactions(false)}
        >
          <button className="flex items-center hover:text-blue-500">
            <HeartIcon className="w-5 h-5 mr-1" />
            <strong>Like</strong>
          </button>
          {/* Reactions Popup */}
          {showReactions && (
            <div className="absolute -top-12 -left-12 flex gap-4 bg-white shadow-md rounded-full p-2 border border-gray-200 z-10">
              {Reactions.map((reaction) => (
                <button
                  key={reaction.id}
                  className="text-2xl hover:scale-125 transition-transform"
                  title={toTitleCase(reaction.name)}
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
        <button className="flex items-center hover:text-blue-500">
          <ArrowPathRoundedSquareIcon className="w-5 h-5 mr-1" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}
