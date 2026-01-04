import ReviewCardList from "@/components/ReviewCardList";
import { getReviewsWithTag, getTagById } from "@/lib/tags";

interface TagPageProps {
  params: {
    id: string;
  };
}

export default async function Tag({ params }: TagPageProps) {
  const { id } = await params;

  const tag = await getTagById(id);

  const taggedReviews = await getReviewsWithTag(id);
  const reviews = taggedReviews.map((tr) => tr.reviews);

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-bold p-5">{tag.name}</h1>
      <ReviewCardList reviews={reviews} />
    </main>
  );
}
