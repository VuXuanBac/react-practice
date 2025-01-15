import { useState } from "react";
import PostCard from "./PostCard";
import { Post, parseApiPosts } from "../data/posts";
import LoadingPost from "./LoadingPost";
import InfiniteScroll from "./InfiniteScroll";

export default function PostsList({}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState(
    "https://jsonfakery.com/blogs/infinite-scroll"
  );

  const loadMorePosts = () => {
    setLoading(true);

    fetch(nextUrl)
      .then((response) => {
        console.log("Response", response);
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((pageData) => {
        console.log(pageData);
        const postsData = pageData.data;
        const parsedPosts = parseApiPosts(postsData);
        setPosts((prev) => [...prev, ...parsedPosts]);
        setNextUrl(pageData.next_page_url);
      })
      .catch((err) => {
        console.log(err);
        setNextUrl(""); // no more loading
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white">
      <InfiniteScroll
        loadMore={loadMorePosts}
        hasMore={!!nextUrl}
        loading={loading}
        loadingComponent={<LoadingPost />}
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
