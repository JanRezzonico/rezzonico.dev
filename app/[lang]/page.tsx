import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getDictionary, hasLocale } from "../../libs/i18n/dictionaries";
import { SkillCard } from "@/components/SkillCard";
import { TestimonalCard } from "@/components/TestimonalCard";
import {
  faArrowUp,
  faCode,
  faDatabase,
  faServer,
  faTerminal,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import ictImage from "@/images/testimonials/ict.svg";
import getsociableImage from "@/images/testimonials/getsociable.webp";
import bmpManipulatorImage from "@/images/projects/bmp_manipulator.webp";
import cleanProgressTrackerImage from "@/images/projects/cleanprogresstracker.png";
import databaseComparisonImage from "@/images/projects/db_comparison.webp";
import guessTheWordImage from "@/images/projects/guesstheword.webp";
import movieSurveyImage from "@/images/projects/movie_survey.webp";
import phatrisImage from "@/images/projects/phatris.webp";
import workoutTrackerImage from "@/images/projects/workoutracker.webp";
import ihatemailtoImage from "@/images/projects/ihatemailto.webp";
import heroImage from "@/images/hero.jpg";
import { Reveal } from "@/components/Reveal";
import { Label } from "@/components/Reusables/Label";
import { ScrollAnchor } from "@/components/ScrollAnchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const projects = [
    { id: "ihatemailto", image: ihatemailtoImage },
    { id: "guessTheWord", image: guessTheWordImage },
    { id: "movieSurvey", image: movieSurveyImage },
    { id: "phatris", image: phatrisImage },
    { id: "addictionRecovery", image: cleanProgressTrackerImage },
    { id: "workoutTracker", image: workoutTrackerImage },
    { id: "bmpManipulator", image: bmpManipulatorImage },
    { id: "databaseComparison", image: databaseComparisonImage },
  ] as const;

  const skills = [
    { id: "frontend", icon: faCode },
    { id: "backend", icon: faServer },
    { id: "database", icon: faDatabase },
    { id: "os", icon: faTerminal },
    { id: "tools", icon: faTools },
    { id: "devops", icon: faServer },
  ] as const;

  return (
    <div id="top" className="flex flex-col gap-12 px-4 pb-12">
      <ScrollAnchor />
      <section className="flex min-h-screen flex-col justify-center overflow-hidden py-4">
        <div className="flex flex-col items-center gap-10 sm:flex-row lg:gap-16">
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Reveal preset="card" index={0}>
                <Label>{dict.hero.subtitle}</Label>
                <Label>{dict.hero.subtitle2}</Label>
              </Reveal>
              <Reveal preset="card" index={1}>
                <h1
                  className={`max-w-2xl text-4xl font-bold leading-tight sm:text-6xl`}
                >
                  {dict.hero.title}
                </h1>
              </Reveal>
              <Reveal preset="card" index={2}>
                <p className="max-w-xl text-base leading-relaxed text-base-content/70 sm:text-lg">
                  {dict.hero.description}
                </p>
              </Reveal>
            </div>
            <div className="flex flex-wrap gap-3">
              <Reveal preset="card" index={3}>
                <Link href="#skills" className="btn btn-primary">
                  {dict.hero.getStarted}
                </Link>
              </Reveal>
              <Reveal preset="card" index={4}>
                <Link
                  href={`/${lang}/contact`}
                  className="btn btn-outline btn-primary"
                >
                  {dict.hero.contact}
                </Link>
              </Reveal>
            </div>
          </div>
          <Reveal
            preset="fromBottom"
            className="order-last flex w-full max-w-[clamp(12rem,58vw,18rem)] shrink-0 sm:max-w-60 lg:max-w-sm"
          >
            <Image
              src={heroImage}
              alt="Jan Rezzonico"
              priority
              className="aspect-4/5 w-full rounded-4xl object-cover"
              sizes="(max-width: 640px) 58vw, (max-width: 1024px) 15rem, 22rem"
            />
          </Reveal>
        </div>
      </section>

      <section id="skills" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl font-bold">{dict.sections.skills}</h2>
          <p className="text-sm text-base-content/70">{dict.skills.subtitle}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {skills.map((skil, i) => (
            <Reveal
              preset="card"
              index={i}
              key={skil.id}
              className="flex grow max-w-sm"
            >
              <SkillCard
                key={skil.id}
                title={dict.skills[skil.id].title}
                icon={skil.icon}
              >
                <p>{dict.skills[skil.id].text}</p>
              </SkillCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="testimonials" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl font-bold">{dict.sections.testimonials}</h2>
          <p className="text-sm text-base-content/70">
            {dict.testimonials.subtitle}
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <Reveal preset="fromLeft" className="flex">
            <TestimonalCard
              title={dict.testimonials.getsociable.title}
              subtitle={dict.testimonials.getsociable.subtitle}
              text={dict.testimonials.getsociable.text}
              image={getsociableImage}
              isQuote={true}
            />
          </Reveal>
          <Reveal preset="fromRight" className="flex">
            <TestimonalCard
              title={dict.testimonials.ict.title}
              subtitle={dict.testimonials.ict.subtitle}
              text={dict.testimonials.ict.text}
              image={ictImage}
              isQuote={false}
            />
          </Reveal>
        </div>
      </section>

      <section id="projects" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl font-bold">{dict.sections.projects}</h2>
          <p className="text-sm text-base-content/70">
            {dict.projects.subtitle}
          </p>
          <p className="text-xs text-base-content/50">
            {dict.projects.notInChronologicalOrder}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((projectDefinition, i) => {
            const project = dict.projects.items[projectDefinition.id];
            const preset = i % 2 === 0 ? "fromLeft" : "fromRight";
            return (
              <Reveal preset={preset} key={projectDefinition.id}>
                <ProjectCard
                  title={project.title}
                  year={project.year}
                  story={project.story}
                  description={project.description}
                  image={projectDefinition.image}
                  sourceLink={project.sourceLink}
                  sourceLabel={project.sourceLabel}
                  extraLink={project.extraLink}
                  extraText={project.extraText}
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      <Reveal preset="fromBottom">
        <section className="flex flex-col items-center gap-2 py-4 text-center">
          <p className="text-lg font-semibold">{dict.pageEnd.title}</p>
          <p className="text-sm text-base-content/60">{dict.pageEnd.text}</p>
          <Link
            href="#top"
            aria-label="Scroll back to the top"
            className="btn btn-ghost tooltip tooltip-bottom tooltip-primary mt-2"
            data-tip={dict.pageEnd.scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
