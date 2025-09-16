import { createTheme, MantineColorsTuple } from "@mantine/core";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const darkSlateGreen: MantineColorsTuple = [
  "#f1f9f7",
  "#e4efed",
  "#c3dfd9",
  "#9fcec5",
  "#82c0b3",
  "#6fb7a8",
  "#63b3a3",
  "#529d8e",
  "#468c7e",
  "#173630",
];

// https://mantine.dev/colors-generator/?color=dce9e2
const lightSlateGreen: MantineColorsTuple = [
  "#eef9f3",
  "#dce9e2",
  "#c4d8cd",
  "#a4c2b2",
  "#88b09a",
  "#76a58b",
  "#6c9f83",
  "#5a8b70",
  "#4e7c63",
  "#3e6b53",
];

// const palette = [
//   "#F7BA2C",
//   "#DCAF30",
//   "#C0A334",
//   "#A59838",
//   "#898C3C",
//   "#6E8140",
//   "#527544",
//   "#376A48",
//   "#1B5E4C",
//   "#005350",
// ];

const myYellow: MantineColorsTuple = [
  "#fff8e0",
  "#fff0cc",
  "#fce09c",
  "#face69",
  "#f8c03d",
  "#f7ba2c",
  "#f6b10d",
  "#db9b00",
  "#c38a00",
  "#a97600",
];

export const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: montserrat.style.fontFamily },
  colors: { darkSlateGreen: darkSlateGreen, lightSlateGreen: lightSlateGreen, myYellow: myYellow },
  primaryColor: "darkSlateGreen",
  primaryShade: 6,
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});
