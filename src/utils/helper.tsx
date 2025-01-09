import { Comment } from "../data/comments";
import ReactionUIData, { Reactions, ReactionUI } from "../data/reactions";

export function getTotalComments(comments: Comment[]): number {
  return comments.reduce(
    (sum, comment: Comment) => sum + getTotalComments(comment.subcomments),
    comments.length
  );
}

export function getReactionsStatistic(
  reactions: Reactions,
  selectedReaction?: ReactionUI | null
) {
  let updatedReactions = reactions;
  if (selectedReaction) {
    updatedReactions = { ...reactions };
    const key = selectedReaction.name as keyof Reactions;
    updatedReactions[key] = (updatedReactions[key] || 0) + 1;
  }
  // sort by number of reactions
  const sortedReactions = Object.entries(updatedReactions).sort(
    (a, b) => b[1] - a[1]
  );
  const [dominantName, dominantCount] = sortedReactions[0] || [undefined, 0];

  return {
    dominant:
      dominantName && dominantCount > 0 ? ReactionUIData[dominantName] : null,
    total: Object.values(updatedReactions).reduce(
      (sum, count) => sum + count,
      0
    ),
  };
}
