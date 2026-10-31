import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../../libs/i18n/dictionaries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { EmailCopy } from "./EmailCopy";
import { Reveal } from "@/components/Reveal";
import { Label } from "@/components/Reusables/Label";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <section className="flex h-[calc(100vh-8rem)] flex-col items-center justify-between px-4 py-16 text-center">
      <div className="flex flex-col items-center gap-3">
        <Reveal preset="fromTop">
          <h1 className="text-3xl">{dict.contact.title}</h1>
        </Reveal>
        <Reveal preset="fromTop">
          <h2 className="text-xl text-base-content/70">
            {dict.contact.subtitle}
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-1 items-center">
        <EmailCopy dict={dict} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Label>{dict.contact.socialTitle}</Label>
        <div className="flex gap-4">
          <Reveal preset="card">
            <SocialIcon
              icon={faGithub}
              link={"https://github.com/JanRezzonico"}
            />
          </Reveal>
          <Reveal preset="card" index={1}>
            <SocialIcon
              icon={faLinkedin}
              link={"https://www.linkedin.com/in/jan-rezzonico-893b65223"}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SocialIcon = ({ icon, link }: { icon: IconDefinition; link: string }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="2xl" className="text-primary" />
    </a>
  );
};
