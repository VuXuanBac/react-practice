import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

export interface CommentButtonProps {
  totalComments?: number;
  showComments: boolean;
  onClickShowComments?: (show: boolean) => void;
}
export default function CommentButton({
  totalComments,
  showComments,
  onClickShowComments,
}: CommentButtonProps) {
  return (
    <button
      className={`flex items-center justify-center hover:text-blue-500  ${
        showComments ? "font-bold text-blue-500" : ""
      }`}
      onClick={() => onClickShowComments && onClickShowComments(!showComments)}
    >
      <ChatBubbleOvalLeftIcon className="w-5 h-5" />
      {totalComments && totalComments > 0 ? (
        <span className="pl-1">{totalComments}</span>
      ) : null}
    </button>
  );
}
