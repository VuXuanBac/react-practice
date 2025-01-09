import { Comment } from "../data/comments";
import CommentsList from "./CommentsList";

export interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <li
      key={comment.id}
      title={comment.timestamp.toLocaleString()}
      className={comment.level > 1 ? "border-l-2 pl-2" : ""}
    >
      <div className="flex items-start">
        <img
          src={`https://robohash.org/${comment.author}`}
          alt={`${comment.author}'s avatar`}
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
        <div className="ml-3">
          <h4 className="text-gray-800 font-semibold text-sm">
            {comment.author}
          </h4>
          <span className="text-gray-700 text-sm">
            {comment.content.split(/(\r\n|\n)/g).map((line) => (
              <p>{line}</p>
            ))}
          </span>
        </div>
      </div>

      <div className="ml-5 mt-3">
        <CommentsList comments={comment.subcomments} />
      </div>
    </li>
  );
}
