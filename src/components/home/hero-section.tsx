import { Container, Title, Text, Overlay } from "@mantine/core";
import classes from "./hero.module.css";

export default function HeroSection() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Welcome to the SALTO{" "}
          <Text component="span" inherit className={classes.highlight}>
            initiative!
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            SALTO is a collaborative project by the University of Turin that aims to foster positive and effective
            interactions between healthcare professionals and foreign residents.
          </Text>
        </Container>

        {/* <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </div> */}
      </div>
    </div>
  );
}
