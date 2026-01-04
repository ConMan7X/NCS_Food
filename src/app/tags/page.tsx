import { getTags } from "@/lib/tags";
import Link from "next/link";

export default async function Tags() {
  let tags = await getTags();

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-bold p-5">Tags</h1>

      <ul className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <Link href={`/tags/${tag.id}`} key={tag.id}>
            <li
              key={tag.id}
              className="text-2xl px-4 py-2 hover:text-emerald-700"
            >
              {tag.name}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
