import type { ReactNode } from "react";

// longer markers must come before shorter ones.
const TOKEN = new RegExp(
  [
    String.raw`\*\*\*(?!\s)(.+?)(?<!\s)\*\*\*`, // 1: ***bold italic***
    String.raw`\*\*(?!\s)(.+?)(?<!\s)\*\*`, // 2: **bold**
    String.raw`\*(?![\s*])(.+?)(?<![\s*])\*(?!\*)`, // 3: *italic*
    String.raw`~~(?!\s)(.+?)(?<!\s)~~`, // 4: ~~strikethrough~~
    String.raw`\+\+(?!\s)(.+?)(?<!\s)\+\+`, // 5: ++underline++
  ].join("|"),
  "g",
);

function parse(text: string, keyPrefix = ""): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(TOKEN)) {
    const start = match.index!;
    if (start > last) nodes.push(text.slice(last, start));

    const key = `${keyPrefix}${start}`;
    const [, boldItalic, bold, italic, strike, underline] = match;

    if (boldItalic !== undefined) {
      nodes.push(
        <strong key={key}>
          <em>{parse(boldItalic, `${key}-`)}</em>
        </strong>,
      );
    } else if (bold !== undefined) {
      nodes.push(<strong key={key}>{parse(bold, `${key}-`)}</strong>);
    } else if (italic !== undefined) {
      nodes.push(<em key={key}>{parse(italic, `${key}-`)}</em>);
    } else if (strike !== undefined) {
      nodes.push(<s key={key}>{parse(strike, `${key}-`)}</s>);
    } else if (underline !== undefined) {
      nodes.push(<u key={key}>{parse(underline, `${key}-`)}</u>);
    }

    last = start + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function RichText({ text }: { text: string }) {
  return <>{parse(text)}</>;
}
