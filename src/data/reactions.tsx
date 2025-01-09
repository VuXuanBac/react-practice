export interface ReactionUI {
  name: string;
  text: string;
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

const ReactionUIArray = [
  { emoji: "❤️", text: "Love", name: "love", color: "bg-pink-100" },
  { emoji: "👎", text: "Dislike", name: "dislike", color: "bg-purple-100" },
  { emoji: "😂", text: "Haha", name: "haha", color: "bg-yellow-100" },
  { emoji: "😢", text: "Sad", name: "sad", color: "bg-cyan-100" },
  { emoji: "😡", text: "Angry", name: "angry", color: "bg-orange-100" },
  { emoji: "🤮", text: "Disgust", name: "disgust", color: "bg-green-100" },
] as ReactionUI[];

const ReactionUIData = ReactionUIArray.reduce((result, item) => {
  result[item.name] = item;
  return result;
}, {} as Record<string, ReactionUI>);
export const DEFAULT_REACTION = ReactionUIArray[0];

export default ReactionUIData;
