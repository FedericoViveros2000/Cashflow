const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/components/*.vue", "./src/views/*vue", "./src/App.vue"],
  theme: {
    colors: {
      ...colors,
      "blue-color": "#0689b0",
      "green-color": "#04b500",
    },
  },
  plugins: [],
};
