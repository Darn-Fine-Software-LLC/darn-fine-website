import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

async function getBlogPosts() {
  const posts = await client.fetch(`*[_type == "post"]`);
  return posts;
}

const BlogPost = ({ title, slug, summary, mainImage, key }) => (
  <li key={key} className="py-8">
    <Link
      href={`/blog/${slug}`}
      className="flex flex-row w-full gap-6 group transition-all"
    >
      <div
        className="rounded w-64 h-32 bg-cover bg-center group-hover:translate-y-1 group-hover:shadow-sm shadow-xl transition-all"
        style={{ backgroundImage: `url("${urlForImage(mainImage)}")` }}
      ></div>
      <div className="h-full w-full rounded-lg bg-white">
        <h2 className="font-noto text-2xl font-black mb-2">{title}</h2>
        <p className="font-noto text-lg font-light text-slate-700">{summary}</p>
      </div>
    </Link>
  </li>
);

const breadcrumbs = [
  {
    name: "Blog",
    href: "/blog",
    current: true,
  },
];

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main>
      <Nav />
      <Header />
      <section className="w-full py-4 px-8 min-h-screen bg-white">
        <div className="mb-8">
          <Breadcrumbs pages={breadcrumbs} />
        </div>
        <ul className="flex flex-col divide-y divide-slate-200 w-full">
          {posts.map((post) => (
            <BlogPost
              key={post._id}
              slug={post.slug.current}
              title={post.title}
              summary={post.summary}
              mainImage={post.mainImage}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
