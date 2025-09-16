export type Resource = {
  type: "website" | "pdf" | "video" | "poster";
  title: string;
  url: string;
  source: string;
  sourceHref: string;
  imagePreview?: string;
  altPreview?: string;
  languages: string[];
};

export type Event = {
  id: string;
  date: string;
  day?: string;
  month?: string;
  time?: string;
  title: string;
  description: string;
  previewImage?: string;
  url?: string;
};

export type MultiLangText = {
  it: string;
  fr: string;
  es: string;
  en: string;
  ar: string;
};
