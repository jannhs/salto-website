'use client'

import { Accordion, Container, Grid, Title, Image } from '@mantine/core';
import { useMessages, useTranslations } from 'next-intl';
import classes from './faq.module.css';
import image from '@/public/faq.svg';

export default function AccordionFAQ() {
  const t = useTranslations('Resources');
  const messages = useMessages();
  const keysFAQ = Object.keys(messages.Resources.faq.items);

  // Each item of the faq translation message is mapped to an accordion item
  const items = keysFAQ.map((item, index) => {
    const question = t(`faq.items.${item}.question`);
    const answer = t(`faq.items.${item}.answer`);
    return (
      <Accordion.Item value={question} key={index}>
        <Accordion.Control>{question}</Accordion.Control>
        <Accordion.Panel>{answer}</Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image.src} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} mb={20} >
              {t('faq.title')}
            </Title>

            <Accordion defaultValue="item-1" chevronPosition="right" variant="separated">
              {items}
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}