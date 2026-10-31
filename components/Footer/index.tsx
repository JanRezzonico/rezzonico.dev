import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 p-2">
      <div className="flex flex-col gap-2">
        <span>&copy; rezzonico.dev by Jan Rezzonico</span>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <span>
          Background by
          <a
            target="_blank"
            className="link link-hover link-primary"
            href="https://haikei.app/"
          >
            {" haikei.app 🤍"}
          </a>
        </span>
      </div>
      <Link
        href={"/privacy"}
        target="_blank"
        className="link link-hover link-primary text-end"
      >
        Privacy Policy
      </Link>
    </footer>
  );
};
