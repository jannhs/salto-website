import type { Resource } from "@/utils/types";
import { Grid, GridCol, Card } from "@mantine/core";

type VideosGridProps = {
  videos: Resource[];
};

export function VideosGrid({ videos }: VideosGridProps) {
  return (
    <Card p="0">
      <Grid gutter="lg" pt="sm">
        {videos.map((item: Resource) => (
          <GridCol span={{ base: 12, sm: 12, md: 6, lg: 6 }} key={item.url}>
            <iframe src={item.url} className="w-full aspect-video" allowFullScreen />
          </GridCol>
        ))}
      </Grid>
    </Card>
  );
}
