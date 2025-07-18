import TitleResourcePage from "@/components/resources/TitleResourcePage";

export default function IndexResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-auto w-full">
      <TitleResourcePage />
      {children}
    </div>
  );
}
