import { Link } from "react-router-dom";

const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  light: "bg-white text-indigo-700 hover:bg-indigo-50",
};

// Reusable Button — to দিলে Link, না দিলে সাধারণ button
export default function Button({ to, onClick, type = "button", variant = "primary", children }) {
  const cls = `inline-block rounded-lg px-5 py-2.5 text-sm font-semibold transition ${variants[variant]}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
