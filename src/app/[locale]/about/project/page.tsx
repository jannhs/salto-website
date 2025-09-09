import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  try {
    const Content = (await import(`./${locale}.mdx`)).default;
    return <Content />;
  } catch (error) {
    console.error("Error loading content:", error);
    notFound();
  }
}
