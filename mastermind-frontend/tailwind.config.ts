import type { Config } from 'tailwindcss'

export const pegColors: PegColors[] = ["#d60a0a", "#4eb604", "#d4d70b", "#0d0dd4", "#d114bc", "#686868"]

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    ...pegColors.map((color) => `bg-[${color}]`),
    ...pegColors.map((color) => `border-[${color}]`)
  ],
  theme: {
    colors: {
      purple: "#241563",
      pink: "#f8cebc",
      red: "#e63f3e",
      white: "#fffefb"
    }
  },
  plugins: [
  ],
}
export default config
