import { Comment } from "../data/comments";
import { Reactions } from "../data/reactions";

export function getTotalComments(comments: Comment[]): number {
  return comments.reduce(
    (sum, comment: Comment) => sum + getTotalComments(comment.subcomments),
    comments.length
  );
}

export function getDominantReaction(reactions: Reactions) {
  // sort by number of reactions
  const sortedReactions = Object.entries(reactions).sort((a, b) => b[1] - a[1]);
  const dominantReaction = sortedReactions[0];

  return dominantReaction && dominantReaction[1] > 0 ? dominantReaction[0] : "";
}

export function getTotalReactions(reactions: Reactions) {
  return Object.values(reactions).reduce((sum, count) => sum + count, 0);
}
