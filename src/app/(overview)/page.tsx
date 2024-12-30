export default function Home() {
	return (
		<section className="w-full min-h-screen flex items-center justify-center bg-green-200 dark:bg-black">
			<video
				controls
				controlsList="nodownload noremoteplayback"
				preload="auto"
				className="w-full h-full max-h-screen object-contain">
				<source
					src="https://ioytezgkjmzpfcwaxqcj.supabase.co/storage/v1/object/public/kun-min-aldhaakirin/videos/video%20kun%20min%20aldhaakirin.mp4?t=2024-12-30T01%3A22%3A36.717Z"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
		</section>
	);
}
