export interface ReactionUI {
  name: string;
  emoji: string;
  color: string;
}

export interface Reactions {
  love: number;
  dislike: number;
  haha: number;
  sad: number;
  angry: number;
  disgust: number;
}

const ReactionUIData = {
  love: { emoji: "❤️", name: "Love", color: "bg-pink-100" },
  dislike: { emoji: "👎", name: "Dislike", color: "bg-purple-100" },
  haha: { emoji: "😂", name: "Haha", color: "bg-yellow-100" },
  sad: { emoji: "😢", name: "Sad", color: "bg-cyan-100" },
  angry: { emoji: "😡", name: "Angry", color: "bg-orange-100" },
  disgust: { emoji: "🤮", name: "Disgust", color: "bg-green-100" },
} as Record<string, ReactionUI>;

export default ReactionUIData;
export const DEFAULT_REACTION = ReactionUIData["love"];
