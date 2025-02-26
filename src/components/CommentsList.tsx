import { useState } from "react";
import { Comment } from "../data/comments";
import CommentCard from "./CommentCard";
import CommentComposer from "./CommentComposer";
import { Reactions } from "../data/reactions";

export interface CommentsListProps {
  comments: Comment[];
  level: number;
  focusComposer?: boolean;
}

export default function CommentsList({
  comments,
  level,
  focusComposer = false,
}: CommentsListProps) {
  const [totalComments, setTotalComments] = useState<Comment[]>(comments);

  const onAddComment = (commentText: string) => {
    setTotalComments([
      ...totalComments,
      {
        id: 1,
        content: commentText,
        author: "you",
        timestamp: new Date(),
        reactions: {} as Reactions,
        subcomments: [],
      },
    ]);
  };

  return (
    <ul className={`*:py-2 ${level > 1 ? "*:border-l-2 *:pl-2" : ""}`}>
      {totalComments.map((comment) => (
        <li key={comment.id}>
          <CommentCard comment={comment} level={level} />
        </li>
      ))}
      <li key="new">
        <CommentComposer
          onAddComment={onAddComment}
          autoFocus={focusComposer}
        />
      </li>
    </ul>
  );
}
