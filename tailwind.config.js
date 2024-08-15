/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstColor: 'hsl(142, 69%, 61%)',
        firstColorSecond: 'hsl(142 69%, 61%)',
        firstColorAlt: 'hsl(142, 57%, 53%)',
        firstColorLighter: 'hsl(142, 92%, 85%)',
        titleColor: 'hsl(142, 8%, 15%)',
        textColor: 'hsl(142, 8%, 45%)',
        textColorLight: 'hsl(142, 8%, 65%)',
        inputColor: 'hsl(142, 70%, 96%)',
        bodyColor: 'hsl(142, 60%, 99%)',
        containerColor: '#FFF',
        scrollBarColor: 'hsl(142, 49%, 61%)',
        scrollThumbColor: 'hsl(142, 49%, 41%)',
        projectPrimary: '#6a59ff',
        projectBg: '#f5f5f5',
      },
      fontFamily: {
        bodyFont: '"Poppins", sans-serif',
      },
      fontSize: {
        bigFontSize: '2rem',
        h1FontSize: '1.5rem',
        h2FontSize: '1.25rem',
        h3FontSize: '1.125rem',
        normalFontSize: '0.938rem',
        smallFontSize: '0.813rem',
        smallerFontSize: '0.75rem',
      },
      fontWeight: {
        fontMedium: '500',
        fontSemiBold: '600',
      },
      margin: {
        headerHeight: '3rem',
        mb25: '0.25rem',
        mb5: '0.rem',
        mb75: '0.75rem',
        mb1: '1rem',
        mb105: '1.5rem',
        mb2: '2rem',
        mb205: '2.5rem',
        mb3: '3rem',
      },
      zIndex: {
        zToolTip: '10',
        zFixed: '100',
        zModal: '1000'
      }
    },
    height: {
      headerHeight: '3rem'
    }
  },
  plugins: [],
}