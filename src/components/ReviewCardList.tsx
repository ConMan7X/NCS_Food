import ReviewCard from "./ReviewCard";
import { Review } from "@/types/reviews";

interface ReviewCardListProps {
  reviews: Review[];
  className?: string;
  showRating?: boolean;
  layout?: "flex" | "grid";
}

export default function ReviewCardList({
  reviews,
  className = "",
  showRating = false,
}: ReviewCardListProps) {
  return (
    <ul
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl mx-auto px-4 ${className}`}
    >
      {reviews.map((review) => (
        <ReviewCard key={review.uuid} review={review} showRating={showRating} />
      ))}
    </ul>
  );
}
