import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const ReviewsContext = createContext({
  reviews: [],
  getReviewsForPlace: () => [],
  getAverageRating: () => ({ average: 0, count: 0 }),
  addReview: () => {},
});

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState([]);

  const getReviewsForPlace = useCallback(
    (placeId) => reviews.filter((review) => review.placeId === placeId),
    [reviews]
  );

  const getAverageRating = useCallback(
    (placeId) => {
      const placeReviews = reviews.filter((review) => review.placeId === placeId);
      const count = placeReviews.length;
      if (count === 0) return { average: 0, count: 0 };

      const total = placeReviews.reduce((sum, review) => sum + (review.rating ?? 0), 0);
      return { average: total / count, count };
    },
    [reviews]
  );

  const addReview = useCallback((placeId, text, rating, author) => {
    const trimmed = (text ?? "").trim();
    if (!trimmed) return;

    const newReview = {
      id: `${placeId}-${Date.now()}`,
      placeId,
      text: trimmed,
      rating: rating ?? 0,
      author: author ?? "Anonymous",
      createdAt: new Date().toISOString(),
    };

    setReviews((prev) => [newReview, ...prev]);
  }, []);

  const value = useMemo(
    () => ({ reviews, getReviewsForPlace, getAverageRating, addReview }),
    [reviews, getReviewsForPlace, getAverageRating, addReview]
  );

  return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>;
}

export function useReviews() {
  return useContext(ReviewsContext);
}
