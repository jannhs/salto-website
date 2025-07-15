"use client";

import { Grid, GridCol } from "@mantine/core";
import { Resource } from "@/utils/types";
import { BrochureCard } from "./BrochureCard";

type BrochuresGridProps = {
  resources: Resource[];
};

export function BrochuresGrid({ resources }: BrochuresGridProps) {
  return (
    <>
      <div className=" py-5 m-auto max-w-380">
        <Grid gutter="lg">
          {resources.map((item: Resource) => (
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 4 }} key={item.url}>
              <BrochureCard
                type={item.type}
                title={item.title}
                imagePreview={item.imagePreview ?? ""}
                url={item.url}
                source={item.source}
                sourceHref={item.sourceHref}
                altPreview={item.altPreview ?? ""}
              />
            </GridCol>
          ))}
        </Grid>
      </div>
    </>
  );
}
