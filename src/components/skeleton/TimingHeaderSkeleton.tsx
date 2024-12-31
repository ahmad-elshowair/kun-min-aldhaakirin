import { Skeleton } from "@/components/ui/skeleton";

const TimingHeaderSkeleton = () => {
	return (
		<article className="w-full flex flex-col gap-2 items-center justify-center my-5">
			<div className="px-5 lg:px-10 flex items-center gap-2">
				<Skeleton className="h-6 w-24" />
				<Skeleton className="h-6 w-32" />
				<Skeleton className="h-6 w-48" />
			</div>
		</article>
	);
};

export default TimingHeaderSkeleton;
