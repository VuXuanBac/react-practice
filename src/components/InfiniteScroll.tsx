import React, { useEffect, useRef } from "react";
import Loading from "./Loading";

interface InfiniteScrollProps {
  loadMore: () => void; // Function to load more data
  hasMore: boolean; // Indicates if there's more data to load
  loading?: boolean; // Optional: Indicates if new data is being loaded
  children: React.ReactNode; // The content to display
  loadingComponent?: React.ReactNode;
}

export default function InfiniteScroll({
  loadMore,
  hasMore,
  loading = false,
  children,
  loadingComponent,
}: InfiniteScrollProps) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore || loading) return; // Stop observing if no more data or already loading

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMore();
      }
    });

    const target = observerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target); // Cleanup observer
    };
  }, [hasMore, loading, loadMore]);

  return (
    <div>
      {children}
      {hasMore && !loading && <div ref={observerRef} className="h-8"></div>}
      {loading && (loadingComponent || <Loading />)}
    </div>
  );
}
