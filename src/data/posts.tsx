import moment from "moment";
import DOMPurify from "dompurify";

import { Comment } from "../data/comments";
import { Reactions } from "../data/reactions";
import { fakeReactions } from "../utils/helper";
export interface Post {
  id: number;
  body: string;
  author: string;
  authorAvatarUrl: string;
  coverUrl: string;
  timestamp: moment.Moment;
  reactions: Reactions;
  comments: Comment[];
}

export function parseApiPosts(postsData: any[]) {
  return postsData.map((post) => {
    const authorData = post.user;
    return {
      id: post.id,
      coverUrl: post.featured_image,
      authorAvatarUrl:
        authorData?.profile_pic || `https://robohash.org/${post.author}`,
      body: DOMPurify.sanitize(post.main_content),
      author: authorData?.username,
      timestamp: moment(post.updated_at, "ddd, MM/DD/YYYY"),
      reactions: fakeReactions(),
      comments: [] as Comment[],
    } as Post;
  });
}
