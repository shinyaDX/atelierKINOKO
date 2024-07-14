import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
    },
  },
  plugins: [
    function (pluginAPI: any) {
      const { addUtilities } = pluginAPI;
      const newUtilities = {
        ".writing-vertical-rl": {
          "writing-mode": "vertical-rl",
          "text-orientation": "mixed",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
