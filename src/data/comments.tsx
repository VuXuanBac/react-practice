import { Reactions } from "../data/reactions";

export interface Comment {
  id: number;
  content: string;
  author: string;
  timestamp: Date;
  reactions: Reactions;
  subcomments: Comment[];
}
