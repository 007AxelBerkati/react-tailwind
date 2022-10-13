module.exports = {
  mode: "jit",
  content: [
    "./src/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variant: {},
  plugins: [require("@tailwindcss/forms", "flowbite/plugin")],
};
