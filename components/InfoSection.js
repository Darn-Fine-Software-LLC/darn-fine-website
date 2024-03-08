export default function InfoSection({ title, icon, children }) {
  return (
    <section className="w-full py-32 md:py-32 px-8 md:px-16 bg-white font-noto">
      <header className="max-w-3xl mx-auto mb-6">
        {icon}
        <h1 className="font-bold block text-xl md:text-5xl text-left text-slate-900">
          {title}
        </h1>
      </header>
      <main className="max-w-3xl mx-auto">{children}</main>
    </section>
  );
}
