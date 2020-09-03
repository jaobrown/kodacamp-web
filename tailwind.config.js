module.exports = {
  purge: ['./src/**/*.jsx'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      fontFamily: {
        sans: [
          'greycliff-cf',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          "'Helvetica Neue'",
          'Arial',
          "'Noto Sans'",
          'sans-serif',
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
      },
      colors: {
        orange: {
          50: '#FFE8D9',
          100: '#FFD0B5',
          200: '#FFB088',
          300: '#FF9466',
          400: '#F9703E',
          500: '#F35627',
          600: '#DE3A11',
          700: '#C52707',
          800: '#AD1D07',
          900: '#841003',
        },
        teal: {
          50: '#E1FCF8',
          100: '#C1FEF6',
          200: '#92FDF2',
          300: '#62F4EB',
          400: '#3AE7DB',
          500: '#1CD4CB',
          600: '#0EBBB2',
          700: '#09A4A4',
          800: '#078A8F',
          900: '#056E6E',
        },
        red: {
          50: '#FFE3E3',
          100: '#FFC2BD',
          200: '#FFA29B',
          300: '#FB7667',
          400: '#F55648',
          500: '#EF301F',
          600: '#D82708',
          700: '#A6240D',
          800: '#8E1500',
          900: '#631001',
        },
        gray: {
          50: '#F5F7FA',
          100: '#E3E7EB',
          200: '#CBD2D9',
          300: '#9AA5B1',
          400: '#7B8794',
          500: '#616E7C',
          600: '#52606D',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
