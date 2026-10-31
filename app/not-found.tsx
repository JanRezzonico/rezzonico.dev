import Link from "next/link";
import "@/libs/styles/globals.css";

export default function NotFound() {
  return (
    <div
      data-theme="luxury"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center"
    >
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-semibold uppercase text-primary">
          Error 404
        </p>
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="max-w-md text-base-content/70">
          The page you are looking for does not exist or may have moved.
        </p>
      </div>

      <Link href="/en" className="btn btn-primary">
        Return home
      </Link>
    </div>
  );
}
