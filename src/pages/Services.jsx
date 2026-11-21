import PageBanner from "../components/PageBanner.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

const services = [
  { icon: "💻", title: "Web Development", text: "React দিয়ে দ্রুত ও আধুনিক ওয়েবসাইট ও ওয়েব অ্যাপ।" },
  { icon: "🎨", title: "UI/UX Design", text: "ব্যবহারকারীর কথা ভেবে সুন্দর ও সহজ ইন্টারফেস ডিজাইন।" },
  { icon: "📱", title: "Responsive Design", text: "সব ডিভাইসের জন্য মানানসই লেআউট।" },
  { icon: "🔍", title: "SEO Optimization", text: "সার্চ ইঞ্জিনে আপনার ওয়েবসাইটকে এগিয়ে রাখা।" },
  { icon: "🛠️", title: "Maintenance", text: "নিয়মিত আপডেট, বাগ ফিক্স ও সাপোর্ট।" },
  { icon: "📈", title: "Digital Marketing", text: "সঠিক অডিয়েন্সের কাছে পৌঁছানোর কৌশল।" },
];

export default function Services() {
  return (
    <>
      <PageBanner title="Our Services" text="আমরা যা যা সার্ভিস দিই" />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} icon={s.icon} title={s.title}>
              {s.text}
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="mb-4 text-slate-600">আপনার প্রজেক্ট নিয়ে কথা বলতে চান?</p>
          <Button to="/contact">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
