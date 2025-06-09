import { Text, Divider } from "@mantine/core";
import Image from "next/image";
import classes from "./footer.module.css";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <div className="bg-[#2e6940] ">
      <div className="mx-auto w-full max-w-7xl h-6xl pt-10  flex flex-col md:flex-row items-center justify-center">
        <Image src="/logos/logo_unito_white.png" alt="Unito logo" width={350} height={100} />
        <Divider orientation="vertical" className="hidden md:block" size="lg" h="120px" ml="30px" mt="md" mr="15px" />
        <div className="w-full max-w-2xl mt-4 md:mt-0 md:ml-6">
          <Text c="white" size="md" m="sm" className={classes.inner} fw="500">
            {t("fundingDescription")}
          </Text>
          <Text c="white" size="md" m="sm" className={classes.inner} fw="500">
            {t("coordinator")}
          </Text>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl pt-5 pb-4">
        <Text c="white" size="xs" mt="xs" ta="center">
          {t("bottomText")}
        </Text>
      </div>
    </div>
  );
}
