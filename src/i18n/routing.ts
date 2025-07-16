import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en", "fr", "es"], // supported locales

  defaultLocale: "it", // used when no locale is set
});
