import PartnersTabs from "@/components/partners/tabs";
import { Title } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function PartnersPage() {
  const t = useTranslations("PartnersPage");
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-22 pb-10 bg-[#2e69400f]">
      <div className="bg-white max-w-6xl w-5/6  rounded-lg shadow-md p-6 ">
        <Title order={1} ta="center" className="text-[#005350] pb-7">
          {t("titleCard")}
        </Title>
        <PartnersTabs />
      </div>
    </div>
  );
}
