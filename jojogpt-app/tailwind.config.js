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
        'imessage-conversation': '#0b84ff',
        'imessage-sent': '#2a90ff',
        'imessage-received': '#3b3a3e',
        'imessage-bg': '#2b2a2b',
        'imessage-container': '#1e1e11',
        'imessage-recipients': '#343637',
      },
    },
  },
  plugins: [],
}

