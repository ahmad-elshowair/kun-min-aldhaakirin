import configs from "@/configs";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-green-200 dark:bg-black">
      <video
        controls
        controlsList="nodownload noremoteplayback"
        preload="auto"
        className="w-full h-full max-h-screen object-contain"
      >
        <source
          src={`${configs.supabaseUrl}/storage/v1/object/public/kun-min-aldhaakirin/videos/video%20kun%20min%20aldhaakirin.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
