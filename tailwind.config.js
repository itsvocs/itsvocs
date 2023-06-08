/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./mdx-components.tsx",
  "content/**/*.mdx",
];
export const theme = {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          "code::before": {
            content: '""',
          },
          "code::after": {
            content: '""',
          },
        },
      },
    },
    fontFamily: {
      // sans: ["var(--font-inter)", ..._fontFamily.sans],
      display: ["var(--font-calsans)"],
      defaultFont: ["var(--default-font)", ..._fontFamily.sans],
    },
    backgroundImage: {
      "gradient-radial":
        "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
    },
    animation: {
      "fade-in": "fade-in 3s ease-in-out forwards",
      title: "title 3s ease-out forwards",
      "fade-left": "fade-left 3s ease-in-out forwards",
      "fade-right": "fade-right 3s ease-in-out forwards",
    },
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: "0%",
        },
        "75%": {
          opacity: "0%",
        },
        "100%": {
          opacity: "100%",
        },
      },
      "fade-left": {
        "0%": {
          transform: "translateX(100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
        },
      },
      "fade-right": {
        "0%": {
          transform: "translateX(-100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
        },
      },
      title: {
        "0%": {
          "line-height": "0%",
          "letter-spacing": "0.25em",
          opacity: "0",
        },
        "25%": {
          "line-height": "0%",
          opacity: "0%",
        },
        "80%": {
          opacity: "100%",
        },

        "100%": {
          "line-height": "100%",
          opacity: "100%",
        },
      },
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  require('@tailwindcss/forms'),
  // require("tailwindcss-debug-screens"),
];
