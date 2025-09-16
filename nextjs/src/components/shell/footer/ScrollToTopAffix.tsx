import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll, useMediaQuery } from "@mantine/hooks";
import { Affix, Button, Transition, Tooltip, useMantineTheme } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function ScrollToTopAffix() {
  const [scroll, scrollTo] = useWindowScroll();
  const t = useTranslations("ScrollToTopAffix");
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Affix position={{ bottom: 20, right: 20 }} zIndex={999}>
      <Tooltip label={t("scrollToTop")} withArrow>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp size={23} stroke="2" />}
              variant="filled"
              color="darkSlateGreen"
              size={isMobile ? "md" : "lg"}
              pl={isMobile ? 10 : 15}
              pr={isMobile ? 0 : 20}
              radius="xl"
              style={{
                ...transitionStyles,
                backgroundColor: "#2e8297",
                color: "white",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => scrollTo({ y: 0 })}
            >
              {!isMobile && t("scrollToTop")}
            </Button>
          )}
        </Transition>
      </Tooltip>
    </Affix>
  );
}
