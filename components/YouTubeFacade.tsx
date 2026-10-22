"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

// Handles embed, watch, youtu.be and shorts URLs
function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:embed\/|watch\?v=|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? match[1] : null;
}

export default function YouTubeFacade({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [play, setPlay] = useState(false);
  const id = getYouTubeId(url);

  // If the URL isn't a recognizable YouTube link, don't load anything
  if (!id) return null;

  return (
    <div className="relative h-62.5 w-full overflow-hidden bg-black">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />

          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition-colors group-hover:bg-red-600">
            <FaPlay aria-hidden="true" className="ml-1 text-xl" />
          </span>
        </button>
      )}
    </div>
  );
}
