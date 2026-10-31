import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImageData } from "next/image";
import { ModalLightbox } from "../ModalLightbox";
import { Card } from "../Reusables/Card";
import { CardTitle } from "../Reusables/CardTitle";

type Props = {
  title: string;
  year: string;
  story: string;
  description: string;
  image: StaticImageData;
  sourceLink: string;
  sourceLabel: string;
  extraLink: string;
  extraText: string;
};

export const ProjectCard = ({
  title,
  year,
  story,
  description,
  image,
  sourceLink,
  sourceLabel,
  extraLink,
  extraText,
}: Props) => {
  return (
    <Card className="w-full text-start md:flex-row">
      <div className="flex items-center justify-center md:h-64 md:w-1/3 md:shrink-0">
        <ModalLightbox
          image={image}
          alt={title}
          className="max-h-64 w-full object-contain md:h-full"
        />
      </div>
      <div className="card-body flex-1 gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <CardTitle>{title}</CardTitle>
          {year && (
            <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-base-content/60">
              {year}
            </span>
          )}
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          {story}
        </p>
        <p className="text-sm leading-relaxed text-base-content/80">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-start gap-2 pt-2">
          <OpenSourceBadge
            isOpenSource={!!sourceLink}
            link={sourceLink}
            label={sourceLabel}
          />
          {extraLink && extraText && (
            <a
              href={extraLink}
              className="btn btn-sm btn-primary"
              target={extraLink.startsWith("/") ? undefined : "_blank"}
              rel={extraLink.startsWith("/") ? undefined : "noreferrer"}
            >
              {extraText}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

const OpenSourceBadge = ({
  isOpenSource,
  link,
  label,
}: {
  isOpenSource: boolean;
  link: string;
  label: string;
}) => {
  const icon = isOpenSource ? faGithub : faHeartBroken;

  if (isOpenSource) {
    return (
      <a
        href={link}
        className="btn btn-sm btn-success"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={icon} aria-hidden="true" />
        {label}
      </a>
    );
  }
  return (
    <span className="badge badge-sm badge-error gap-1 py-3">
      <FontAwesomeIcon icon={icon} aria-hidden="true" />
      {label}
      <FontAwesomeIcon
        icon={faHeartBroken}
        className="text-xs"
        aria-hidden="true"
      />
    </span>
  );
};
