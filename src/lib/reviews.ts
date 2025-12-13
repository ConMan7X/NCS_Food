import { Review } from "@/types/reviews";
import { createClient } from "../utils/supabase/server";
import { cookies } from "next/headers";

export async function getReviews(
  sort: string,
  order: "asc" | "desc"
): Promise<Review[]> {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  let query = supabase.from("reviews").select("*");

  let ascending = false;

  if (order === "asc") {
    ascending = true;
  }

  if (sort === "date") {
    query = query.order("created_at", { ascending: ascending });
  } else if (sort === "rating") {
    query = query.order("rating", { ascending: ascending });
  } else if (sort === "restaurantName") {
    query = query.order("restaurant", { ascending: ascending });
  }

  const { data, error } = await query;

  if (error) {
    throw new Error("Failed to fetch reviews: " + error.message);
  }

  return data ?? [];
}

export async function getReview(id: string): Promise<Review> {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("uuid", id)
    .single();

  if (error) {
    throw new Error("Failed to fetch review: " + error.message);
  }

  return data as Review;
}

export async function getRecentReviews(limit: number = 3): Promise<Review[]> {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error("Failed to fetch recent reviews: " + error.message);
  }

  return data ?? [];
}
