import { useState } from "react";
import PageBanner from "../components/PageBanner.jsx";

const items = [
  { emoji: "🏔️", title: "Mountain Escape", cat: "Nature", color: "from-sky-300 to-indigo-400" },
  { emoji: "🌆", title: "City Lights", cat: "City", color: "from-fuchsia-300 to-purple-500" },
  { emoji: "🌴", title: "Tropical Beach", cat: "Nature", color: "from-emerald-300 to-teal-500" },
  { emoji: "🏙️", title: "Skyline", cat: "City", color: "from-orange-300 to-rose-400" },
  { emoji: "🌲", title: "Green Forest", cat: "Nature", color: "from-lime-300 to-green-600" },
  { emoji: "🌉", title: "Evening Bridge", cat: "City", color: "from-amber-300 to-red-400" },
];

const categories = ["All", "Nature", "City"];

export default function Gallery() {
  // useState: ফিল্টার ও selected আইটেম
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <PageBanner title="Gallery" text="আমাদের কিছু সেরা মুহূর্ত" />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === c
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-indigo-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <button
              key={item.title}
              onClick={() => setSelected(item)}
              className={`group flex h-56 flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-md transition hover:scale-[1.03]`}
            >
              <span className="text-6xl transition group-hover:scale-110">{item.emoji}</span>
              <span className="mt-3 font-bold">{item.title}</span>
              <span className="text-xs opacity-80">{item.cat}</span>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className={`w-full max-w-md rounded-3xl bg-gradient-to-br ${selected.color} p-10 text-center text-white shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-8xl">{selected.emoji}</div>
            <h3 className="mt-4 text-2xl font-extrabold">{selected.title}</h3>
            <p className="opacity-90">{selected.cat}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 rounded-lg bg-white/90 px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
