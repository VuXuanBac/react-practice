import ReactionsData, { ReactionUI, Reactions } from "../data/reactions";

export interface ReactionsBarProps {
  reactions: Reactions;
  selectedReaction?: ReactionUI | null;
  onSelectReaction?: (reaction: ReactionUI | null) => void;
}

export default function ReactionsBar({
  reactions,
  selectedReaction = null,
  onSelectReaction,
}: ReactionsBarProps) {
  return (
    <div className="flex gap-3 items-center text-gray-600">
      {Object.entries(ReactionsData).map(([key, reaction]) => {
        const isSelected = selectedReaction?.name == reaction.name;
        const reactionCount =
          (reactions[key as keyof Reactions] || 0) + +isSelected;
        return (
          <button
            key={key}
            title={reaction.name}
            onClick={() =>
              onSelectReaction && onSelectReaction(isSelected ? null : reaction)
            }
            className={`transition-transform transform ${
              selectedReaction?.name === reaction.name
                ? "scale-125 "
                : "hover:scale-110"
            }`}
          >
            {reaction.emoji}
            <span
              className={`ml-1 ${isSelected ? "font-bold" : ""}`}
              hidden={reactionCount < 1}
            >
              {reactionCount}
            </span>
          </button>
        );
      })}
    </div>
  );
}
