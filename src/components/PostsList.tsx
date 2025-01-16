import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Post, parseApiPosts } from "../data/posts";
import Loading from "./Loading";
import LoadingPost from "./LoadingPost";

export default function PostsList({}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = () => {
    if (loading) return;

    setLoading(true);

    const fetchPosts = fetch("https://jsonfakery.com/blogs/random/5");
    fetchPosts
      .then((response) => {
        console.log("Response", response);
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((postsData) => {
        console.log(postsData);
        const parsedPosts = parseApiPosts(postsData);
        console.log(parsedPosts);
        setPosts(parsedPosts);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMorePosts();
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white">
      {loading && <LoadingPost />}
      {loading && <Loading />}
      {!loading && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
