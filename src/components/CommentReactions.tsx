import { useState } from "react";
import { ReactionUI, Reactions, DEFAULT_REACTION } from "../data/reactions";
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

  return (
    <div className="group">
      <div className="hidden group-hover:flex flex-row-reverse flex-wrap gap-x-3 gap-y-1 items-center text-gray-600">
        <ReactionsBar
          reactions={reactions}
          selectedReaction={selectedReaction}
          onSelectReaction={setSelectedReaction}
        />
      </div>
      <div className="group-hover:hidden">
        <ReactionsStatistic
          reactions={reactions}
          selectedReaction={selectedReaction}
          defaultElement={
            <HeartIcon
              className="w-5 h-5"
              onClick={() =>
                setSelectedReaction(selectedReaction ? null : DEFAULT_REACTION)
              }
            />
          }
        />
      </div>
    </div>
  );
}
