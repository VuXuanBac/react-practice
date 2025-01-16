import React, { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export interface CommentComposerProps {
  onAddComment?: (text: string) => void;
  autoFocus?: boolean;
}

export default function CommentComposer({
  onAddComment,
  autoFocus = false,
}: CommentComposerProps) {
  const [commentText, setCommentText] = useState("");
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && editorRef.current) {
      editorRef.current.focus(); // Auto-focus the editor when the component mounts
    }
  }, [autoFocus]);

  const handleInput = () => {
    const textarea = editorRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to calculate new size
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const trimedContent = commentText.trim();
    if (trimedContent) {
      if (onAddComment) onAddComment(trimedContent);
      setCommentText(""); // Clear input after submission
      if (editorRef.current) {
        editorRef.current.style.height = "auto"; // Reset height after clearing
      }
    }
  };

  const isValidComment = commentText.trim();

  return (
    <div className="flex items-center">
      <img
        src="https://robohash.org/you"
        alt="your avatar"
        className="w-10 h-10 rounded-full object-cover border border-gray-300"
      />

      <div className="group ml-3 w-full flex justify-end rounded-lg bg-slate-100 p-2.5 outline-none">
        <textarea
          ref={editorRef}
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onInput={handleInput}
          onKeyDown={handleKeyPress}
          rows={1}
          className="flex-1 text-sm text-gray-700 bg-inherit resize-none outline-none"
          style={{ overflow: "hidden" }}
        />

        <button onClick={handleSubmit} type="button" disabled={!isValidComment}>
          <PaperAirplaneIcon
            className={`w-5 h-5 ${
              isValidComment
                ? "text-blue-500"
                : "text-gray-300 cursor-not-allowed"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
