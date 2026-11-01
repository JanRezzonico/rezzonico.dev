export type LinkPart = { href: string; label: string };
export type BoldPart = { bold: string };

export type RichTextPart = string | BoldPart | LinkPart;
export type RichText = string | RichTextPart[];

export type ParagraphBlock = { type: "paragraph"; text: RichText };
export type HeadingBlock = { type: "heading"; text: string };
export type ListBlock = { type: "list"; items: RichText[] };
export type TableBlock = {
  type: "table";
  columns: string[];
  rows: RichText[][];
};

export type Block = ParagraphBlock | HeadingBlock | ListBlock | TableBlock;

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export type PageContent = {
  title: string;
  intro: string;
  sections: Section[];
};

export type SiteConfig = {
  lastUpdated: string;
  organizationName: string;
  privacyEmail: string;
  responseTime: string;
};
