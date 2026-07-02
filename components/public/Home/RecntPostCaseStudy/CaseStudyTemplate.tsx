import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "./types";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

interface Props {
  data: CaseStudy;
}

export default function CaseStudyTemplate({ data }: Props) {
  return (
    <section className="mx-auto max-w-7xl pt-36  px-6.75 py-30">

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

          <Image src={data.featuredImage} alt={data.title} width={900} height={600} className="mt-8 w-full"/>

          <div className="space-y-5 mt-8">

            {data.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

          </div>

          {/* Previous Next */}

          <div className="grid grid-cols-2 border-y mt-24">

            <Link href={`/${data.navigation.previous.slug}`} className="py-8 border-r">
              ← {data.navigation.previous.title}
            </Link>

            <Link href={`/${data.navigation.next.slug}`} className="text-right py-8">
              {data.navigation.next.title} →
            </Link>

          </div>

        </div>

        {/* SIDEBAR */}

        <aside>

          {/* Search */}

          <div>

            <input placeholder="Search" className="border w-full p-2"/>

          </div>

          {/* Recent Posts */}

          <div className="mt-14">

            <h2 className="text-5xl font-playfair mb-8">
              Recent Posts
            </h2>

            <div className="space-y-4">

              {data.recentPosts.map((post) => (

                <Link key={post.title} href={post.href} className="block hover:text-[#C9AC8C]">
                  {post.title}
                </Link>

              ))}

            </div>

          </div>

        </aside>

        <section className="mt-20">

          {/* Share */}

          <div>
            <h3 className="uppercase tracking-[4px] text-[#5B524B] text-[28px] font-light">
              Did You Like This? Share It!
            </h3>

            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: <FaFacebookF />,
                  bg: "#D3B28B",
                },
                {
                  icon: <FaTwitter />,
                  bg: "#3B82F6",
                },
                {
                  icon: <FaLinkedinIn />,
                  bg: "#2D8CDB",
                },
                {
                  icon: <FaEnvelope />,
                  bg: "#D3B28B",
                },
              ].map((item, index) => (
                <button key={index}
                  className="w-15 h-15 rounded-full text-black text-xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: item.bg }}>
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Comments */}

          <div className="mt-12">
            <h2 className="uppercase tracking-[3px] text-[36px] text-[#C9AC8C]">
              0 Comments on
              <span className="font-semibold">
                {" "}
              "{data.title}"
              </span>
            </h2>
          </div>

          {/* Form */}

          <div className="mt-16 bg-[#2A2626] p-16">

            <h2 className="text-[52px] font-['Playfair_Display'] text-[#C9AC8C]">
              Leave Comment
            </h2>

            <form className="mt-10 space-y-6">

              {/* Comment */}

              <textarea rows={7} placeholder="Comment"
                className="w-full bg-transparent border border-[#57514C] p-4 outline-none placeholder:text-gray-400 resize-none"/>

              {/* Name + Email */}

              <div className="grid md:grid-cols-2 gap-8">

                <input type="text" placeholder="Name"
                  className="bg-transparent border border-[#57514C] p-4 outline-none placeholder:text-gray-400"/>

                <input type="email" placeholder="Email"
                  className="bg-transparent border border-[#57514C] p-4 outline-none placeholder:text-gray-400"/>

              </div>

              {/* Website */}

              <input type="text" placeholder="Website"
                className="w-full bg-transparent border border-[#57514C] p-4 outline-none placeholder:text-gray-400"/>

              {/* Checkbox */}

              <label className="flex items-center gap-3 text-lg cursor-pointer">

                <input type="checkbox" className="accent-[#C9AC8C] w-4 h-4"/>

                <span>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>

              </label>

              {/* Button */}

              <button type="submit" className="bg-[#C9AC8C] text-black px-10 py-3 rounded-full text-2xl transition hover:opacity-90">
                Submit Comment
              </button>

            </form>

          </div>

        </section>

      </div>

    </section>
  );
}