// Reusable banner for inner pages
export default function PageBanner({ title, text }) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-violet-600 py-14 text-center text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {text && <p className="mt-3 text-indigo-100">{text}</p>}
      </div>
    </section>
  );
}
