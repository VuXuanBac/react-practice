import { Comment } from "../data/comments";
import CommentCard from "./CommentCard";

export interface CommentsListProps {
  comments: Comment[];
  level: number;
}

export default function CommentsList({ comments, level }: CommentsListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <li
          key={comment.id}
          className={level > 1 ? "border-l-2 pl-2 py-2" : ""}
        >
          <CommentCard comment={comment} level={level} />
        </li>
      ))}
    </ul>
  );
}
