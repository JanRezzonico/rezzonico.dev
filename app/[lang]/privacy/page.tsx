import type { ReactElement } from "react";
import { siteConfig, pageContent } from "./content";
import type {
  Block as BlockType,
  RichText as RichTextType,
  Section as SectionType,
} from "./types";

function RichText({ text }: { text: RichTextType }): ReactElement {
  if (typeof text === "string") return <>{text}</>;

  return (
    <>
      {text.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        if ("bold" in part) return <b key={i}>{part.bold}</b>;

        const external = !part.href.startsWith("mailto:");
        return (
          <a
            key={i}
            href={part.href}
            className={"link link-primary"}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {part.label}
          </a>
        );
      })}
    </>
  );
}

function Block({ block }: { block: BlockType }): ReactElement {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );

    case "heading":
      return <h3 className="text-lg font-semibold mt-4 mb-1">{block.text}</h3>;

    case "list":
      return (
        <ul className="list-disc list-inside space-y-1">
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="table table-zebra table-sm w-full">
            <thead>
              <tr>
                {block.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default: {
      const unhandled: never = block;
      throw new Error(`Unhandled block type: ${JSON.stringify(unhandled)}`);
    }
  }
}

function Section({ section }: { section: SectionType }): ReactElement {
  return (
    <details
      id={section.id}
      className="collapse collapse-arrow join-item border border-base-300"
      open
    >
      <summary className="collapse-title font-semibold">
        {section.title}
      </summary>
      <div className="collapse-content text-sm space-y-3">
        {section.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </details>
  );
}

export default function PrivacyPage() {
  const { title, intro, sections } = pageContent;

  return (
    <main className="min-h-screen">
      <div className="flex flex-col max-w-5xl mx-auto gap-4 p-4">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-sm opacity-70">
          Last updated: {siteConfig.lastUpdated}
        </p>
        <p>{intro}</p>

        <div className="join join-vertical">
          {sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
}
