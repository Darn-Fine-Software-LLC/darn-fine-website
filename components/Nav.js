import Link from "next/link";

const DEFAULT_ITEMS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Our Work",
    link: "/work",
  },
];

const NavLink = ({ label, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="font-medium text-slate-400 font-sans text-sm hover:text-slate-300"
      >
        {label}
      </Link>
    </li>
  );
};

export default function Nav({ items = DEFAULT_ITEMS }) {
  return (
    <div className="flex justify-between w-full py-4 px-8 border-b-slate-600 border-b bg-black/10 backdrop-blur">
      <div className="flex flex-row items-center gap-2">
        <img src="/logo.svg" className="w-5" />
        <span className="block font-serif text-lg text-slate-300">
          Darn Fine Software
        </span>
      </div>
      <nav>
        <ul className="flex flex-row gap-4">
          {items.map((item) => (
            <NavLink {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
