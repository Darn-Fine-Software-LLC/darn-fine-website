import Breadcrumbs from "@/components/Breadcrumbs";
import Nav from "@/components/Nav";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

async function fetchPost(slug = "") {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == "${slug}"]`,
  );
  return post[0];
}

export default async function BlogPostPost({ params: { slug } }) {
  const post = await fetchPost(slug);

  const breadcrumbs = [
    {
      name: "Blog",
      href: "/blog",
      current: false,
    },
    {
      name: post.title,
      href: `/blog/${post.slug.current}`,
      current: true,
    },
  ];

  return (
    <main>
      <header className="flex h-[300px] w-full flex-col bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <Nav />
        <div className="flex w-full flex-1 items-center justify-center">
          <div>
            <h1 className="mb-3 text-center text-2xl font-bold tracking-tight text-white md:text-5xl">
              Darn Fine Blog
            </h1>
            <p className="text-center text-lg font-light text-slate-100">
              Thoughts on software, business, and life.
            </p>
          </div>
        </div>
      </header>
      <section className="mx-auto my-6 max-w-5xl py-4 px-8 min-h-screen">
        <div className="mb-8">
          <Breadcrumbs pages={breadcrumbs} />
        </div>
        {post.mainImage && (
          <div
            className="w-full h-80 rounded-lg bg-cover bg-center mb-8"
            style={{
              backgroundImage: `url("${urlForImage(post.mainImage)}")`,
            }}
          />
        )}

        <article className="prose lg:prose-xl ">
          <PortableText value={post.body} />
        </article>
      </section>
    </main>
  );
}
