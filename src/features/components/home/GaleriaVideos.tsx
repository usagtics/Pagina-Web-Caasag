interface GaleriaVideosProps {
  videos: string[];
  poster: string;
}

export function GaleriaVideos({ videos, poster }: GaleriaVideosProps) {
  if (!videos || videos.length === 0) return null;

  const gridCols =
    videos.length >= 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : videos.length === 2
        ? "md:grid-cols-2"
        : "grid-cols-1 max-w-4xl";

  return (
    <div
      className={`mx-auto mb-16 w-full max-w-[1400px] px-4 sm:px-8 grid gap-6 items-center ${gridCols}`}
    >
      {videos.map((vid, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden rounded-[1.5rem] bg-black shadow-xl ring-1 ring-gray-900/10"
        >
          <video
            controls
            preload="metadata"
            className="w-full max-h-[540px] object-contain"
            poster={poster}
          >
            <source src={vid} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      ))}
    </div>
  );
}
