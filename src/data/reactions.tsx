export interface ReactionType {
  name: string;
  emoji: string;
  color: string;
}

const Reactions = {
  love: { emoji: "❤️", name: "Love", color: "bg-pink-100" },
  dislike: { emoji: "👎", name: "Dislike", color: "bg-purple-100" },
  haha: { emoji: "😂", name: "Haha", color: "bg-yellow-100" },
  sad: { emoji: "😢", name: "Sad", color: "bg-gray-100" },
  angry: { emoji: "😡", name: "Angry", color: "bg-orange-100" },
  disgust: { emoji: "🤮", name: "Disgust", color: "bg-green-100" },
} as Record<string, ReactionType>;

export default Reactions;
export const DEFAULT_REACTION = Reactions["love"];
