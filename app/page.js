export default function Home() {
  return (
    <main className="p-8 md:p-24 max-w-3xl mx-auto">
      <header className="flex flex-col items-center justify-center">
        <img src="/logo.svg" className="w-16 mb-6" />
        <span className="font-serif block text-3xl text-center">
          Darn Fine Software
        </span>
        <h1 className="block font-sans text-xl text-center">
          custom web & mobile development
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
          don't try to sell you on expensive cloud services, instead we work
          with you to find the best, most cost-effective way to solve your
          business needs.
        </p>
      </section>
    </main>
  );
}
