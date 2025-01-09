import ReactionsData, { ReactionUI, Reactions } from "../data/reactions";
import { getDominantReaction, getTotalReactions } from "../utils/helper";

export interface ReactionsStatisticProps {
  selectedReaction: ReactionUI | null;
  reactions: Reactions;
  defaultElement?: any;
}

export default function ReactionsStatistic({
  selectedReaction,
  reactions,
  defaultElement,
}: ReactionsStatisticProps) {
  const dominantReaction = ReactionsData[getDominantReaction(reactions)];
  const totalReactions = getTotalReactions(reactions) + +!!selectedReaction;

  const isSelectDominant = dominantReaction?.name !== selectedReaction?.name;

  return dominantReaction || selectedReaction ? (
    <div className="text-gray-700 flex items-center gap-2">
      <span className="z-20">{dominantReaction?.emoji}</span>
      <span className="-ml-4 z-10">
        {isSelectDominant && selectedReaction?.emoji}
      </span>
      <span
        className={`${selectedReaction && isSelectDominant ? "ml-0" : "ml-2"} ${
          !selectedReaction ? "" : "font-bold"
        }`}
      >
        {totalReactions}
      </span>
    </div>
  ) : (
    defaultElement
  );
}
