import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Nav from "@/components/Nav";
import ServicesSection from "@/components/ServicesSection";

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
