import moment from "moment";
import { Reactions } from "../data/reactions";
import { fakeReactions } from "../utils/helper";

export interface Comment {
  id: string;
  content: string;
  author: string;
  authorAvatarUrl: string;
  timestamp: moment.Moment;
  reactions: Reactions;
  subcomments: Comment[];
}

export function parseApiComments(commentsData: any[]) {
  return commentsData.map((comment) => {
    const authorData = comment.user;
    return {
      id: comment.id,
      content: comment.body,
      author: authorData.username,
      authorAvatarUrl: `https://robohash.org/${authorData?.fullName}`,
      timestamp: moment(comment.updated_at, "ddd, MM/DD/YYYY").add(
        Math.floor(Math.random() * 86400),
        "seconds"
      ),
      reactions: fakeReactions(Math.floor(Math.random() * 100)),
      subcomments: [] as Comment[],
    } as Comment;
  });
}
