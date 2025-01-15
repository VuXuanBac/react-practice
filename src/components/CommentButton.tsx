import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

export interface CommentButtonProps {
  totalComments?: number;
  showComments: boolean;
  onClickShowComments?: (show: boolean) => void;
  onClickLeaveAComment?: () => void;
}
export default function CommentButton({
  totalComments,
  showComments,
  onClickShowComments,
  onClickLeaveAComment,
}: CommentButtonProps) {
  return (
    <div
      className={`flex items-center justify-center hover:*:font-bold hover:*:text-blue-500  ${
        showComments ? "font-bold text-blue-500" : ""
      }`}
    >
      <button
        type="button"
        title="Leave a comment"
        onClick={() => onClickLeaveAComment && onClickLeaveAComment()}
      >
        <ChatBubbleOvalLeftIcon className="w-5 h-5" />
      </button>
      {totalComments && totalComments > 0 ? (
        <button
          type="button"
          className="pl-1 hover:underline"
          title={`${totalComments} comments`}
          onClick={() =>
            onClickShowComments && onClickShowComments(!showComments)
          }
        >
          {totalComments}
        </button>
      ) : null}
    </div>
  );
}
