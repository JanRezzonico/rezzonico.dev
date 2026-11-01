import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Dictionary, Locale } from "@/libs/i18n/dictionaries";

export const Header = ({ dict, lang }: { dict: Dictionary; lang: Locale }) => {
  const root = `/${lang}`;
  return (
    <header className="sticky top-0 z-50 mb-4 flex bg-base-300/80">
      <div className="navbar mx-auto flex w-full max-w-7xl  not-sm:flex-wrap max-[400px]:items-center">
        <div className="flex flex-1 items-center justify-start max-[400px]:basis-full max-[400px]:flex-none max-[400px]:justify-center max-[400px]:mb-2">
          <Link
            href={root}
            className="flex w-fit flex-col justify-center text-center"
          >
            <span className="text-xs max-[500px]:line-clamp-2">
              {dict.header.title}
            </span>
            <span className="font-bold">{"Jan Rezzonico"}</span>
          </Link>
        </div>
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 text-base-content/80">
          <Link href={root} className="hover:text-base-content">
            {dict.sections.home}
          </Link>
          <Link href={`${root}#skills`} className="hover:text-base-content">
            {dict.sections.skills}
          </Link>
          <Link
            href={`${root}#testimonials`}
            className="hover:text-base-content"
          >
            {dict.sections.testimonials}
          </Link>
          <Link href={`${root}#projects`} className="hover:text-base-content">
            {dict.sections.projects}
          </Link>
        </nav>
        <div className="flex flex-1 flex-row items-center justify-end gap-2 max-[400px]:basis-full max-[400px]:flex-none max-[400px]:justify-center">
          <LanguageSwitcher currentLang={lang} />
          <Link className="btn btn-primary rounded" href={`${root}/contact`}>
            {dict.header.contact}
          </Link>
        </div>
      </div>
    </header>
  );
};
