import { useState } from "react";
import PageBanner from "../components/PageBanner.jsx";
import Button from "../components/Button.jsx";

const initial = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "নাম লিখুন";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "সঠিক ইমেইল দিন";
    if (form.message.trim().length < 10) err.message = "কমপক্ষে ১০ অক্ষরের মেসেজ লিখুন";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      // Backend নেই, তাই শুধু সফল মেসেজ দেখানো হচ্ছে
      setSent(true);
      setForm(initial);
    }
  };

  const inputClass = (field) =>
    `mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-indigo-300 ${
      errors[field] ? "border-red-400" : "border-slate-300"
    }`;

  return (
    <>
      <PageBanner title="Contact Us" text="যেকোনো প্রয়োজনে আমাদের জানান" />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-2xl font-extrabold text-slate-900">Get in touch</h2>
          <p className="text-slate-600">ফর্মটি পূরণ করুন, আমরা দ্রুত যোগাযোগ করব।</p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>📍 Dhaka, Bangladesh</li>
            <li>✉️ hello@brightwave.example</li>
            <li>📞 +880 1XXX-XXXXXX</li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:col-span-3"
        >
          {sent && (
            <div className="rounded-lg bg-green-100 px-4 py-3 text-sm text-green-800">
              ✅ ধন্যবাদ! আপনার মেসেজ পাঠানো হয়েছে।
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass("name")} placeholder="Your name" />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="you@example.com" />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className={inputClass("message")} placeholder="Write your message..." />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <Button type="submit">Send Message</Button>
        </form>
      </section>
    </>
  );
}
