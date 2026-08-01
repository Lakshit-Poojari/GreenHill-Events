"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import SectionHeading from "@/components/public/SectionHeading";
import PerformerVideos from "@/components/public/Entertainment/PerformerVideos";

interface Performer {
  performer_name: string;
  image_path: string;
  large_description: string;
  youtubeVideos: string[];
}

export default function PerformerPage() {
  const { performerSlug } = useParams();

  const [performer, setPerformer] = useState<Performer | null>(null);

  useEffect(() => {
    const fetchPerformer = async () => {
      try {
        const res = await fetch(
          `/api/offerings/slug/${performerSlug}`
        );

        const result = await res.json();
        console.log("last", result);
        console.log(`/api/uploads/${result.offering.image_path}`);
        

        if (result.success) {
          setPerformer(result.offering);
        }
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
  className="w-full h-auto object-cover"
/>
          </div>

          <div className="lg:col-span-2">

            <div
              className="text-[#C9AC8C] leading-9 italic font-['Old_Standard_TT']"
              dangerouslySetInnerHTML={{
                __html: performer.large_description,
              }}
            />


          <PerformerVideos videos={performer.youtubeVideos ?? []} />

          </div>

        </div>

      </div>
    </div>
  );
}