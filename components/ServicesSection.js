const SAMPLE_SERVICES = [
  {
    title: "Custom websites.",
    content:
      "Modernly designed to perfectly represent your brand. Our websites get you found and get more people in the door.",
  },
  {
    title: "Mobile development.",
    content: "Reach your customers on the go with iOS and Android mobile apps.",
  },
  {
    title: "Web application development.",
    content:
      "High performance, scalable, ground-up web applications to tackle any business need.",
  },
  {
    title: "UX design.",
    content:
      "A good user experience can make or break an application. We're experts in design and user experience.",
  },
];

const Service = ({ title, content }) => {
  return (
    <li className="sm:h-64 border-2 border-slate-500 p-6 bg-black/15 backdrop-blur flex items-start justify-center hover:shadow-xl shadow-sm transition-all">
      <div>
        <div className="sm:h-16 flex items-center justify-center mb-4">
          <h3 className="text-lg font-bold text-slate-300 text-center ">
            {title}
          </h3>{" "}
        </div>

        <p className="text-slate-400 font-sans text-center">{content}</p>
      </div>
    </li>
  );
};

export default function ServicesSection({
  title = "",
  services = SAMPLE_SERVICES,
}) {
  return (
    <section className="w-full">
      <header className="max-w-2xl mx-auto mb-16">
        <h1 className="block text-xl md:text-3xl font-bold text-center text-slate-300">
          {title}
        </h1>
      </header>
      <main className="px-8 w-full max-w-5xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <Service {...service} />
          ))}
        </ul>
      </main>
    </section>
  );
}
