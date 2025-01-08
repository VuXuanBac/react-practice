import postsData from "../data/posts";
import PostCard from "./PostCard";

export default function PostsList({}) {
  return (
    <div>
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
