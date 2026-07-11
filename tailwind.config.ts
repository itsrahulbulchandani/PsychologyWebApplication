import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F0',
          deep: '#F2EDE2',
        },
        ink: {
          DEFAULT: '#212D27',
          soft: '#55645C',
        },
        pine: {
          DEFAULT: '#1E4B3F',
          dark: '#153830',
          light: '#2F6B59',
          pale: '#E9EFE6',
        },
        sage: {
          DEFAULT: '#9CB8A8',
          light: '#DCE7DC',
          pale: '#F0F4EC',
        },
        clay: {
          DEFAULT: '#B26E4B',
          dark: '#96552F',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'measure': '68ch',
      },
    },
  },
  plugins: [],
};
export default config;
