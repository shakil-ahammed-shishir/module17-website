import { useState } from "react";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const features = [
  { icon: "⚡", title: "Fast Delivery", text: "আমরা সময়মতো মানসম্মত কাজ ডেলিভারি দিই।" },
  { icon: "🎨", title: "Beautiful Design", text: "আধুনিক, পরিষ্কার ও ব্যবহারবান্ধব ডিজাইন।" },
  { icon: "📱", title: "Fully Responsive", text: "মোবাইল, ট্যাবলেট ও ডেস্কটপ — সবখানেই নিখুঁত।" },
];

export default function Home() {
  // useState: Button click counter
  const [likes, setLikes] = useState(0);

  return (
    <>
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              Welcome to BrightWave
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Build a brighter <span className="text-indigo-600">digital future</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              আমরা React ও Tailwind CSS দিয়ে সুন্দর, দ্রুত এবং Responsive ওয়েবসাইট তৈরি করি।
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/services">Our Services</Button>
              <Button to="/contact" variant="outline">Contact Us</Button>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 p-8 text-center text-white shadow-xl">
            <div className="text-6xl">🚀</div>
            <p className="mt-4 text-xl font-bold">Like our work?</p>
            <p className="mt-1 text-indigo-100">বাটনে ক্লিক করে জানান!</p>
            <div className="mt-5">
              <Button variant="light" onClick={() => setLikes(likes + 1)}>
                👍 Like ({likes})
              </Button>
            </div>
            {likes > 0 && (
              <button
                onClick={() => setLikes(0)}
                className="mt-3 block w-full text-xs text-indigo-200 underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <SectionTitle title="Why Choose Us" subtitle="আমাদের সেরা তিনটি বৈশিষ্ট্য" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} icon={f.icon} title={f.title}>
              {f.text}
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
