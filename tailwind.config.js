/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.tsx",
  "./components/**/*.tsx",
  "./app/**/*.tsx",
];
export const theme = {
  extend: {
    colors: {
      customBrown: "#3A3030", // Your custom color
      border: "#1D1D1D",
      customDark: "#080808",
    },
  },
};
export const plugins = [];
