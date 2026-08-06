"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import SectionHeading from "@/components/public/SectionHeading";
import PerformerVideos from "@/components/public/Entertainment/PerformerVideos";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

interface Performer {
  performer_name: string;
  image_path: string;
  large_description: string;
  youtubeVideos: string[];
  soundcloud_link: string;
  page_url: string;
}

export default function PerformerPage() {
  const { performerSlug } = useParams();

  const [performer, setPerformer] = useState<Performer | null>(null);

  useEffect(() => {
    const fetchPerformer = async () => {
      try {
        // Get performer
        const performerRes = await fetch(
          `/api/offerings/slug/${performerSlug}`,
        );
        const performerResult = await performerRes.json();

        if (!performerResult.success) return;

        const offering = performerResult.offering;
        console.log("====================================");
        console.log(offering);
        console.log("====================================");

        // Get videos
        const videoRes = await fetch(
          `/api/offeringVideo/offering/${offering.id}`,
        );
        const videoResult = await videoRes.json();

        console.log(videoResult.data, "video");

        setPerformer({
          ...offering,
          youtubeVideos: (videoResult.data ?? []).map(
            (video: any) => video.youtube_url,
          ),
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (performerSlug) {
      fetchPerformer();
    }
  }, [performerSlug]);

  if (!performer) return null;

  return (
    <div className="pt-26 bg-[#1d1a1a] text-white min-h-screen">
      <SectionHeading title={performer.performer_name} />

      <div className="mx-4 md:mx-8 lg:mx-16.25 px-4 md:px-6.75 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <Image
              src={`/api/uploads/${performer.image_path}`}
              width={500}
              height={700}
              alt={performer.performer_name}
              className="h-auto w-full rounded-3xl border border-[#C9AC8C]/15 object-cover shadow-[0_15px_40px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(201,172,140,0.18)]"
            />

            {performer.soundcloud_link?.trim() && (
              <div className="mt-8 text-center lg:justify-start">
                <Link
                  href={performer.soundcloud_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-[#C9AC8C] px-6 py-3 text-[#C9AC8C] transition-all duration-300 hover:bg-[#C9AC8C] hover:text-black"
                >
                  Click here for Bloomfield Collection
                </Link>
              </div>
            )}

            <div className="mt-8 text-center">
              <p className="mb-5 font-playfair text-xl font-semibold uppercase tracking-[0.2em] text-[#C9AC8C]">
                DID YOU LIKE THIS? SHARE IT!
              </p>

              <div className="flex justify-center items-center gap-4">
                {/* X */}
                <Link
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    performer.page_url,
                  )}&text=${encodeURIComponent(performer.performer_name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/60 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/20"
                >
                  <FaXTwitter size={20} />
                </Link>

                {/* Facebook */}
                <Link
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    performer.page_url,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#1877F2]/60 p-3 text-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-lg hover:shadow-[#1877F2]/20"
                >
                  <FaFacebookF size={20} />
                </Link>

                {/* LinkedIn */}
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    performer.page_url,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0A66C2]/60 p-3 text-[#0A66C2] transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-lg hover:shadow-[#0A66C2]/20"
                >
                  <FaLinkedinIn size={20} />
                </Link>

                {/* Email */}
                <Link
                  href={`mailto:?subject=${encodeURIComponent(
                    performer.performer_name,
                  )}&body=${encodeURIComponent(`${performer.performer_name}\n\n${performer.page_url}`)}`}
                  className="rounded-full border border-[#EA4335]/60 p-3 text-[#EA4335] transition-all duration-300 hover:-translate-y-1 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white hover:shadow-lg hover:shadow-[#EA4335]/20"
                >
                  <MdEmail size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-8 font-['Old_Standard_TT'] text-[1.2rem] italic leading-10 text-[#C9AC8C] text-justify">
              {performer.large_description
                .split("%")
                .map((paragraph, index) => (
                  <p key={index} className="transition-colors duration-300">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>

            <PerformerVideos videos={performer.youtubeVideos ?? []} />
          </div>
        </div>
      </div>
    </div>
  );
}
