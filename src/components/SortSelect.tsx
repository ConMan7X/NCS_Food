"use client";
import { useRouter } from "next/navigation";

export default function SortSelect({
  sort,
  order,
}: {
  sort: string;
  order: "asc" | "desc";
}) {
  const router = useRouter();

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    router.push(`/reviews?${params.toString()}`);
  };

  const toggleOrder = () => {
    updateParams("order", order === "asc" ? "desc" : "asc");
  };

  return (
    <div data-cy="sort-by" className="space-x-2 mb-4 pl-4">
      <label className="text-lrg font-medium m-1">Sort reviews</label>
      <select
        name="selectedSort"
        value={sort}
        onChange={(e) => updateParams("sort", e.target.value)}
        className="
                  w-48
                  h-8
                  rounded-xl
                  bg-teal-900
                  p-1
                  px-3
                  text-white
                  shadow-sm
                  transition
                  ease-in-out
                  focus:border-white-500
                  focus:ring-2
                  focus:ring-white-400/40
                  hover:border-gray-400
                  cursor-pointer
                "
      >
        <option value="date">by Date</option>
        <option value="rating">by Rating</option>
        <option value="restaurantName">by Restaurant Name</option>
      </select>

      <button
        type="button"
        onClick={toggleOrder}
        aria-label="Toggle sort order"
        className="
          w-8 h-8
          rounded-full
          bg-teal-900
          text-white
          shadow-sm
          transition
          hover:bg-teal-800
          focus:ring-2
          focus:ring-white-400/40
          cursor-pointer
        "
      >
        {order === "asc" ? "↑" : "↓"}
      </button>
    </div>
  );
}
