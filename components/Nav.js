import Link from "next/link";

const DEFAULT_ITEMS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

const NavLink = ({ label, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="font-sans text-sm font-medium text-slate-400 hover:text-slate-300"
      >
        {label}
      </Link>
    </li>
  );
};

export default function Nav({ items = DEFAULT_ITEMS }) {
  return (
    <div className="flex w-full justify-between border-b border-b-slate-600 bg-black/10 px-8 py-4 backdrop-blur">
      <div>
        <Link href="/" className="flex flex-row items-center gap-2">
          <img src="/logo.svg" className="w-5" />
          <span className="block font-serif text-lg text-slate-300">
            Darn Fine Software
          </span>
        </Link>
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
