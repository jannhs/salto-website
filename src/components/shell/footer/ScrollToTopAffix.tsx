import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, Tooltip } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function ScrollToTopAffix() {
  const [scroll, scrollTo] = useWindowScroll();
  const t = useTranslations("ScrollToTopAffix");
  return (
    <Affix position={{ bottom: 20, right: 20 }} zIndex={999}>
      <Tooltip label={t("scrollToTop")} withArrow>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp size={23} stroke="2" />}
              variant="filled"
              color="darkSlateGreen"
              size="lg"
              radius="xl"
              style={{
                ...transitionStyles,
                backgroundColor: "#2e8297",
                color: "white",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => scrollTo({ y: 0 })}
            >
              {t("scrollToTop")}
            </Button>
          )}
        </Transition>
      </Tooltip>
    </Affix>
  );
}
