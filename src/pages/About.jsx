import PageBanner from "../components/PageBanner.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "10", label: "Team Members" },
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" text="আমরা কারা এবং কী করি" />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex h-64 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-200 text-7xl">
            🌊
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Our Story</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              BrightWave একটি ছোট কিন্তু উদ্যমী টিম, যারা আধুনিক ওয়েব টেকনোলজি দিয়ে
              ব্যবসার জন্য কার্যকর সমাধান তৈরি করে। আমাদের লক্ষ্য — সহজ, সুন্দর ও
              ব্যবহারযোগ্য ডিজিটাল অভিজ্ঞতা দেওয়া।
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-3xl font-extrabold text-indigo-600">{s.value}</p>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionTitle title="Our Values" />
          <div className="grid gap-6 sm:grid-cols-3">
            <Card icon="🎯" title="Mission">ক্লায়েন্টের চাহিদা বুঝে সঠিক সমাধান দেওয়া।</Card>
            <Card icon="👁️" title="Vision">সেরা ডিজিটাল সার্ভিস প্রোভাইডার হওয়া।</Card>
            <Card icon="🤝" title="Trust">স্বচ্ছতা ও বিশ্বাসের ওপর ভিত্তি করে কাজ করা।</Card>
          </div>
        </div>
      </section>
    </>
  );
}
