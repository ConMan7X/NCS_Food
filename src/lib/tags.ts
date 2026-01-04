import { createClient } from "../utils/supabase/server";
import { cookies } from "next/headers";

import { Tag, TagWithReviews } from "@/types/tags";
import { Review } from "@/types/reviews";

export async function getTags(): Promise<Tag[]> {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase.from("tags").select("*");
  if (error) {
    throw error;
  }
  return data;
}

export async function getTagById(tagId: string): Promise<Tag> {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase
    .from("tags")
    .select("*")
    .eq("id", tagId)
    .single();

  if (error) {
    throw error;
  }
  return data;
}

export async function getReviewsWithTag(
  tagId: string
): Promise<TagWithReviews[]> {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase
    .from("reviews_to_tags")
    .select("*, reviews(*)")
    .eq("tag", tagId);

  if (error) {
    throw error;
  }
  return data;
}
