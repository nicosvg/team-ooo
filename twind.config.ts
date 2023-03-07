import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      yellow: "#FFBE79",
      brown: "#C56602",
      primary: "#374151",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Exo Medium", "sans-serif"],
    },
  },
} as Options;
