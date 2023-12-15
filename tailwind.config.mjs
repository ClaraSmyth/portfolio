/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        screen: ["100vh /* Fallback */", "100svh"],
      },
    },
  },
  plugins: [],
};
