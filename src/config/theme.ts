import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      background: "#ffffff",
      color: "white",
      fontFamily: "'Inter', sans-serif",
    },
    ul: {
      listStyleType: "disc",
      paddingLeft: "20px",
    },
    ol: {
      listStyleType: "decimal",
      paddingLeft: "20px",
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: "#149BD7" },
        secondary: { value: "#062837" },
      },
    },

    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
});

export default createSystem(defaultConfig, config);
