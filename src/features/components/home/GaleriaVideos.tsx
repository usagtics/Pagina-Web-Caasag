interface GaleriaVideosProps {
  videos: string[];
  poster: string;
}

export function GaleriaVideos({ videos, poster }: GaleriaVideosProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <div
      className={`mx-auto mb-16 w-full max-w-[1400px] px-4 sm:px-8 grid gap-6 ${
        videos.length > 1 ? "md:grid-cols-2" : "grid-cols-1 max-w-4xl"
      }`}
    >
      {videos.map((vid, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden rounded-[1.5rem] bg-black shadow-xl ring-1 ring-gray-900/10"
        >
          <video
            controls
            className="aspect-video w-full object-cover"
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
