/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-main': '#00a8e8',
        'imessage-conversation': '#2294fb',
        'imessage-sent': '#2294fb',
        'imessage-received': '#b4b4bc',
        'imessage-bg': '#747474',
      },
    },
  },
  plugins: [],
}

