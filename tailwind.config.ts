import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          ".steps-vertical .step:before": {
            backgroundColor: "#D9D9D9", 
          },
          success: "#F6B7CC",
          neutral: "#d9d9d9"
        },
      },
    ],
    darkTheme: [],
  },
};

export default config;
