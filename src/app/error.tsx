"use client";

import { reemKufi } from "@/lib/fonts";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-6 px-5">
      <div className="neumorphic rounded-[33px] p-8 flex flex-col items-center gap-4 max-w-md text-center">
        <h2
          className={`${reemKufi.className} text-xl font-bold text-destructive`}
        >
          Something went wrong
        </h2>
        <p className="text-muted-foreground text-sm">
          {error.message ||
            "An unexpected error occurred while loading the page."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
