/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "black",
        foreground: "white",
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#EAB308',
              '&:hover': {
                color: '#FDE047',
              },
            },
            h1: {
              color: '#EAB308',
            },
            h2: {
              color: '#EAB308',
            },
            h3: {
              color: '#EAB308',
            },
            h4: {
              color: '#EAB308',
            },
            strong: {
              color: '#EAB308',
            },
            blockquote: {
              borderLeftColor: '#EAB308',
              color: '#fff',
            },
            p: {
              color: '#D1D5DB',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
