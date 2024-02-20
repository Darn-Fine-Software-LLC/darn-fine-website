export default function InfoSection({ title, icon, children }) {
  return (
    <section className="w-full py-16 md:py-32 px-8 md:px-16 bg-white/80 backdrop-blur">
      <header className="max-w-2xl mx-auto mb-6">
        {icon}
        <h1 className="font-bold block text-xl md:text-3xl text-center text-slate-900">
          {title}
        </h1>
      </header>
      <main className="max-w-2xl mx-auto">{children}</main>
    </section>
  );
}
