import Image, { StaticImageData } from "next/image";
import { RichText } from "../RichText";
import { Card } from "../Reusables/Card";
import { CardTitle } from "../Reusables/CardTitle";

type Props = {
  title: string;
  subtitle?: string;
  text: string;
  image: StaticImageData;
  isQuote: boolean;
};

export const TestimonalCard = ({
  title,
  subtitle,
  text,
  image,
  isQuote,
}: Props) => {
  return (
    <Card className="w-full max-w-sm">
      <div className="flex h-52 flex-col items-center justify-center gap-3 px-6 text-center">
        <div className="avatar">
          <div className="w-28 rounded-full">
            <Image
              src={image}
              alt={title}
              className="aspect-square object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle className="justify-center">
            {title}
          </CardTitle>
          <p className="text-xs font-medium uppercase tracking-wider text-base-content/60">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="divider mx-6 my-2 before:bg-base-content/10 after:bg-base-content/10" />
      <div className="card-body flex-1 gap-2 px-6 pb-8 pt-0">
        {isQuote && (
          <span
            aria-hidden="true"
            className="font-serif text-5xl leading-none text-primary"
          >
            &laquo;
          </span>
        )}
        <div className="text-sm leading-relaxed text-base-content/80">
          <RichText text={text} />
        </div>
        {isQuote && (
          <span
            aria-hidden="true"
            className="self-end font-serif text-5xl leading-none text-primary"
          >
            &raquo;
          </span>
        )}
      </div>
    </Card>
  );
};
