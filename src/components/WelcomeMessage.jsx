import { useEffect, useState } from "react";

// useEffect: page load হলে Welcome Message দেখায়, কিছুক্ষণ পর নিজে থেকে চলে যায়
export default function WelcomeMessage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-4 top-20 z-50 max-w-xs rounded-xl bg-indigo-600 px-4 py-3 text-white shadow-lg">
      <div className="flex items-start gap-3">
        <span className="text-xl">👋</span>
        <p className="flex-1 text-sm font-medium">
          Welcome to BrightWave! আমাদের ওয়েবসাইটে আপনাকে স্বাগতম।
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="text-lg leading-none text-indigo-200 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}
