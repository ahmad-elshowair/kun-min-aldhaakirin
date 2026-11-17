import Link from "next/link";

export const metadata = { title: "You're Offline" };

export default function OfflinePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center px-5 flex-grow">
      <h1 className="text-2xl font-bold">أنت غير متصل ⛔ You are offline</h1>
      <p className="text-muted-foreground max-w-md">
        This Page isn&apos;t Save on your device yet. Reconnect and visit it
        once - and it will work offline after that.
      </p>
      <Link href="/" className="text-orange-500 underline">
        Home
      </Link>
    </section>
  );
}
