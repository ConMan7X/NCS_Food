import { Review } from "@/types/reviews";

export interface Tag {
  id: string;
  name: string;
}

export interface TagWithReviews {
  id: string;
  review: string;
  tag: string;
  reviews: Review;
}
