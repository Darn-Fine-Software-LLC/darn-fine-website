import InfoSection from "@/components/InfoSection";
import Nav from "@/components/Nav";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-8 my-20 md:my-32 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Custom web, mobile and desktop development in Hilliard, Ohio.
        </h1>
      </div>
      <div className="max-w-xl text-center mb-8">
        <p className="text-lg md:text-xl font-sans text-center tracking-tight text-slate-400">
          We take your projects from idea to beautifully designed, modern
          applications.
        </p>
      </div>
      <a
        href="https://forms.gle/NH2Bv81rhuzXdiDT8"
        target="_blank"
        className="rounded-lg px-6 py-3 text-sm font-bold hover:ring transition-all font-sans text-center text-slate-300 bg-slate-800 flex flex-row items-center gap-2 border-slate-700 border shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          ariaHidden="true"
          data-slot="icon"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        Get a quote
      </a>
    </header>
  );
};

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-screen w-screen">
      <Nav items={[]} />
      <Header />
      <InfoSection title={`A software agency that understands your business.`}>
        <p className="text-base md:text-lg tracking-wide font-sans text-slate-700">
          At Darn Fine Software, we're a small business that gives our full
          attention to each and every client. We're not here to oversell you or
          leave you with outrageous cloud bills. Our process resolves around
          your needs and business objectives.
        </p>
      </InfoSection>
      <div className="py-16">
        <ServicesSection title={`Our Services`} />
      </div>
    </main>
  );
}
