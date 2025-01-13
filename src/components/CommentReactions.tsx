import { useState } from "react";
import { ReactionUI, Reactions } from "../data/reactions";
import ReactionsBar from "./ReactionBars";
import ReactionsStatistic from "./ReactionsStatistic";
import { HeartIcon } from "@heroicons/react/24/outline";

export interface CommentReactionsProps {
  reactions: Reactions;
}

export default function CommentReactions({ reactions }: CommentReactionsProps) {
  const [selectedReaction, setSelectedReaction] = useState<ReactionUI | null>(
    null
  );
  const [showReactionsBar, setShowReactionsBar] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setShowReactionsBar(true)}
      onMouseLeave={() => setTimeout(() => setShowReactionsBar(false), 500)}
    >
      {showReactionsBar ? (
        <div className="flex gap-3 items-center text-gray-600">
          <ReactionsBar
            reactions={reactions}
            selectedReaction={selectedReaction}
            onSelectReaction={setSelectedReaction}
            reverse={true}
          />
        </div>
      ) : (
        <ReactionsStatistic
          reactions={reactions}
          selectedReaction={selectedReaction}
          defaultElement={<HeartIcon className="w-5 h-5" />}
        />
      )}
    </div>
  );
}
