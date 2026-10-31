import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Dictionary, Locale } from "@/libs/i18n/dictionaries";

export const Header = ({ dict, lang }: { dict: Dictionary; lang: Locale }) => {
  const root = `/${lang}`;
  return (
    <header className="sticky top-0 z-50 mb-4 flex bg-base-300/80">
      <div className="navbar mx-auto flex w-full max-w-7xl">
        <div className="flex flex-1 items-center justify-start">
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
        <nav className="hidden flex-1 items-center justify-center gap-4 text-base-content/80 lg:flex">
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
        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher currentLang={lang} />
          <Link className="btn btn-primary rounded" href={`${root}/contact`}>
            {dict.header.contact}
          </Link>
        </div>
      </div>
    </header>
  );
};
