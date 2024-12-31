import { DhikrSkeleton } from "@/components/skeleton/DhikrSkeleton";
import TimingHeaderSkeleton from "@/components/skeleton/TimingHeaderSkeleton";

const loading = () => {
	return (
		<section className="w-full lg:w-1/2 flex flex-col items-center justify-center flex-grow mt-20 lg:mb-10 mb-20">
			<TimingHeaderSkeleton />
			<section className="w-full px-5 flex flex-col gap-5">
				{[...Array(5)].map((_, index) => (
					<DhikrSkeleton key={index} />
				))}
			</section>
		</section>
	);
};
export default loading;
