import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "./types";

interface Props {
  data: CaseStudy;
}

export default function CaseStudyTemplate({ data }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="grid lg:grid-cols-[2fr_1fr] gap-20">

        {/* LEFT */}

        <div>

          <h1 className="font-playfair text-6xl leading-tight">
            {data.title}
          </h1>

          <div className="flex gap-6 mt-4 text-sm text-[#C9AC8C]">
            <span>{data.date}</span>
            <span>{data.category}</span>
          </div>

          <Image
            src={data.featuredImage}
            alt={data.title}
            width={900}
            height={600}
            className="mt-8 w-full"
          />

          <div className="space-y-5 mt-8">

            {data.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

          </div>

          {/* Previous Next */}

          <div className="grid grid-cols-2 border-y mt-24">

            <Link
              href={`/${data.navigation.previous.slug}`}
              className="py-8 border-r"
            >
              ← {data.navigation.previous.title}
            </Link>

            <Link
              href={`/${data.navigation.next.slug}`}
              className="text-right py-8"
            >
              {data.navigation.next.title} →
            </Link>

          </div>

          {/* Share */}

          <div className="mt-12">

            <h3 className="uppercase tracking-[3px]">
              Did you like this? Share it!
            </h3>

            {/* Social icons */}

          </div>

          {/* Comments */}

          <div className="mt-16">

            <h2 className="uppercase text-2xl">
              Leave Comment
            </h2>

            {/* Form */}

          </div>

        </div>

        {/* SIDEBAR */}

        <aside>

          {/* Search */}

          <div>

            <input
              placeholder="Search"
              className="border w-full p-2"
            />

          </div>

          {/* Recent Posts */}

          <div className="mt-14">

            <h2 className="text-5xl font-playfair mb-8">
              Recent Posts
            </h2>

            <div className="space-y-4">

              {data.recentPosts.map((post) => (

                <Link
                  key={post.title}
                  href={post.href}
                  className="block hover:text-[#C9AC8C]"
                >
                  {post.title}
                </Link>

              ))}

            </div>

          </div>

        </aside>

      </div>

    </section>
  );
}