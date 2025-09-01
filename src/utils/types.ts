export type Resource = {
  type: "website" | "pdf" | "video";
  title: string;
  url: string;
  source: string;
  sourceHref: string;
  imagePreview?: string;
  altPreview?: string;
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
