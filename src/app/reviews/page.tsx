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
    error = err instanceof Error ? err.message : "Failed to load reviews";
  }

  if (error) {
    return (
      <main className="flex flex-col items-center p-8 pt-24">
        <h1 className="text-2xl font-bold">Reviews Not Found</h1>
        <p className="mt-4">{error}</p>
      </main>
    );
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
