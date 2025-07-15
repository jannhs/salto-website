import TitleResourcePage from "@/components/resources/TitleResourcePage";

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-auto w-full">
      <TitleResourcePage />
      {children}
    </div>
  );
}
