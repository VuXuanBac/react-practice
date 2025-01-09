import { Comment } from "../data/comments";
import CommentCard from "./CommentCard";

export interface CommentsListProps {
  comments: Comment[];
}

export default function CommentsList({ comments }: CommentsListProps) {
  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
