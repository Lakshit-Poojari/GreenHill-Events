"use client";

interface PerformerVideosProps {
  videos: string[];
}

const PerformerVideos = ({ videos }: PerformerVideosProps) => {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="mt-8 space-y-6">
      {videos.length === 1 ? (
        <iframe
          className="w-full aspect-video rounded-lg"
          src={videos[0]}
          allowFullScreen
        />
      ) : (
        <>
          <iframe
            className="w-full aspect-video rounded-lg"
            src={videos[0]}
            allowFullScreen
          />

          <div className="grid md:grid-cols-2 gap-6">
            {videos.slice(1).map((video, index) => (
              <iframe
                key={index}
                className="w-full aspect-video rounded-lg"
                src={video}
                allowFullScreen
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PerformerVideos;