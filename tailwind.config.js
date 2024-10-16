/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/1159480872_57758d7d-ef5d-4879-aad6-64122d556710.jpg')",
      },
      fontFamily: {
        'yatra': ['Yatra One', 'system-ui'],
      }
    },
  },
  plugins: [],
}
