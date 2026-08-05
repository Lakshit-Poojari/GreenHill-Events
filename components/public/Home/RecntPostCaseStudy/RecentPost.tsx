import Link from "next/link";

interface RecentPost {
  id: number;
  title: string;
  slug: string;
}

interface RecentPostProps {
  recentPosts: RecentPost[];
}

export default function RecentPost({ recentPosts }: RecentPostProps) {
  return (
    <div className="mt-16">
      <h2 className="font-playfair text-5xl lg:text-6xl">
        Recent Posts
      </h2>

      <ul className="mt-8 space-y-5">
        {recentPosts.map((post) => (
          <li key={post.id} className="flex gap-4">
            <span className="text-[#7C7670]">—</span>

            <Link
              href={`/${post.slug}`}
              className="transition hover:text-[#C9AC8C]"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}