export type Resource = {
  type: "website" | "pdf" | "video";
  title: string;
  url: string;
  source: string;
  sourceHref: string;
  imagePreview?: string;
  altPreview?: string;
};
