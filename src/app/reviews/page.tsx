import ReviewCardList from "@/components/ReviewCardList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SortSelect from "@/components/SortSelect";
import { getReviews } from "@/lib/reviews";
import { Review } from "@/types/reviews";

export default async function Reviews(props: {
  searchParams: Promise<{ sort?: string }>;
}) {
  const searchParams = await props.searchParams;
  const sort = searchParams.sort ?? "date";
  let reviews: Review[] = [];
  let error = null;

  try {
    reviews = await getReviews(sort);
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load review";
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-bold p-5">All Reviews</h1>

      <SortSelect sort={sort} />

      <ReviewCardList reviews={reviews} />

      <Button asChild className="m-5" variant="outline">
        <Link href={`/`}>Back to Home</Link>
      </Button>
    </main>
  );
}
