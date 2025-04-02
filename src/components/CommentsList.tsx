import { useEffect, useState } from "react";
import { Comment, parseApiComments } from "../data/comments";
import CommentCard from "./CommentCard";
import CommentComposer from "./CommentComposer";

export interface CommentsListProps {
  baseId: string;
  level: number;
  focusComposer?: boolean;
}

export default function CommentsList({
  baseId,
  level,
  focusComposer = false,
}: CommentsListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState(
    `https://dummyjson.com/posts/${parseInt(
      baseId.toString().slice(-2),
      16
    )}/comments`
  );

  const loadMoreComments = () => {
    if (!nextUrl || loading) return;

    setLoading(true);

    fetch(nextUrl)
      .then((response) => {
        console.log("Response", response);
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((pageData) => {
        console.log(pageData);
        const commentsData = pageData.comments;
        const parsedComments = parseApiComments(commentsData);
        setComments((prev) => [...prev, ...parsedComments]);
        setNextUrl(pageData.next_page_url);
      })
      .catch((err) => {
        console.log(err);
        setNextUrl(""); // no more loading
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreComments();
  });

  const onAddComment = (commentText: string) => {
    // setComments([
    //   ...comments,
    //   {
    //     id: 1,
    //     content: commentText,
    //     author: "you",
    //     timestamp: new Date(),
    //     reactions: {} as Reactions,
    //     subcomments: [],
    //   },
    // ]);
  };

  return (
    <ul className={`*:py-2 ${level > 1 ? "*:border-l-2 *:pl-2" : ""}`}>
      {comments.map((comment) => (
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
