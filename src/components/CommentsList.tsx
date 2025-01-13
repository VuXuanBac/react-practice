import { Comment } from "../data/comments";
import CommentCard from "./CommentCard";

export interface CommentsListProps {
  comments: Comment[];
}

export default function CommentsList({ comments }: CommentsListProps) {
  return (
    <ul>
      {comments.map((comment) => (
        <li
          key={comment.id}
          className={comment.level > 1 ? "border-l-2 pl-2 py-2" : ""}
        >
          <CommentCard comment={comment} />
        </li>
      ))}
    </ul>
  );
}
