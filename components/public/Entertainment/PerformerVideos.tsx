import YouTubeFacade from "@/components/YouTubeFacade";


interface PerformerVideosProps {
  videos: string[];
  performerName?: string;
}

const PerformerVideos = ({ videos, performerName }: PerformerVideosProps) => {
  if (!videos || videos.length === 0) return null;

  const label = performerName ?? "Greenhill Events";
  const videoClass = "aspect-video w-full rounded-lg";

  const renderVideo = (video: string, number: number) => (
    <YouTubeFacade
      key={`${video}-${number}`}
      url={video}
      title={`${label} video ${number}`}
      className={videoClass}
    />
  );

  // Single video: full width
  if (videos.length === 1) {
    return <div className="mt-8">{renderVideo(videos[0], 1)}</div>;
  }

  // Even count: two-column grid
  if (videos.length % 2 === 0) {
    return (
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {videos.map((video, i) => renderVideo(video, i + 1))}
      </div>
    );
  }

  // Odd count: first video featured, the rest in a grid
  return (
    <div className="mt-8 space-y-6">
      {renderVideo(videos[0], 1)}
      <div className="grid gap-6 md:grid-cols-2">
        {videos.slice(1).map((video, i) => renderVideo(video, i + 2))}
      </div>
    </div>
  );
};

export default PerformerVideos;