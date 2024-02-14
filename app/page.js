export default function Home() {
  return (
    <main className="p-8 md:p-24 max-w-3xl mx-auto">
      <header className="flex flex-col items-center justify-center">
        <img src="/logo.svg" className="w-16 mb-6" />
        <span className="font-serif block text-3xl text-center">
          Darn Fine Software
        </span>
        <h1 className="block font-sans text-xl text-center">
          Custom Web & Mobile Development
        </h1>
        <div className="mt-8">
          <a
            href="https://forms.gle/NH2Bv81rhuzXdiDT8"
            target="_blank"
            className="border cursor-pointer border-teal-800 px-6 py-2 text-xl text-center font-serif hover:bg-teal-800 hover:text-white text-black"
          >
            Contact Us
          </a>
        </div>
      </header>
      <div className="w-full h-[1px] bg-gray-500 my-12 max-w-sm mx-auto w-full" />
      <section className="">
        <p className="font-sans leading-relaxed text-gray-700">
          <span className="block mb-2 font-bold text-gray-800">
            We're a small business that gets it.
          </span>{" "}
          Based in Hilliard Ohio, Darn Fine Software works with other small to
          medium size companies to develop custom websites, mobile and desktop
          applications <span className="font-bold">from the ground up</span>. We
          don't try to sell you on expensive cloud services or reused templates,
          instead we work with you to find the best, most cost-effective way to
          solve your business needs.
        </p>
      </section>

      <div className="w-full h-[1px] bg-gray-500 my-12 max-w-sm mx-auto w-full" />

      <section className="">
        <p className="font-sans leading-relaxed text-gray-700">
          <span className="block mb-2 font-bold text-gray-800">
            Our process revolves around you.
          </span>{" "}
          When you come to us with an idea, we sit down and get to know you,
          your business and the needs your idea is solving. This process
          includes brainstorming different approaches, outlining feasability and
          definining your success criteria.
        </p>
        <p className="font-sans leading-relaxed text-gray-700 mt-8">
          Once we're both happy with moving the project forward, Darn Fine
          Software starts with design and usability. We interview potential
          users, talk with stakeholders and begin to wireframe the user
          interface. This step is critical, it's important to get the
          fundamentals right and create something that not only solves your
          business need, but exceeds your user's expectations.
        </p>
        <p className="font-sans leading-relaxed text-gray-700 mt-8">
          After designs have been completed and signed off on, Darn Fine
          Software begins the development phase. During this phase, we keep a
          constant line of communication with you. You always know exactly what
          we're doing, and what we have left. Our developers are experienced in
          creating modern, battle-tested applications that use industry best
          practices.
        </p>
        <p className="font-sans leading-relaxed text-gray-700 mt-8">
          Once we're both happy with the developed solution, Darn Fine Software
          will ensure you have access to all code, assets and infastructure.
          Because we're local, Darn Fine Software is just a phone call away when
          you need to make changes.
        </p>
      </section>
    </main>
  );
}
