/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#fef9ec",
        background: "#140f00",
        "secondary-background": "#241B00",
        primary: "#ff8400",
        secondary: "#291f00",
        accent: "#f86c30",
      },
    },
  },
  plugins: [],
};
