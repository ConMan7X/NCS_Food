import { getReviewsWithTag, getTagById } from "@/lib/tags";

interface TagPageProps {
  params: {
    id: string;
  };
}

export default async function Tag({ params }: TagPageProps) {
  const { id } = await params;

  let tag = await getTagById(id);

  let reviews = await getReviewsWithTag(id);

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-bold p-5">{tag.name}</h1>
    </main>
  );
}
