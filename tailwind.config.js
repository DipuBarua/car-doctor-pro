/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        //custom style
        carDoctorTheme: {
          ...require("daisyui/src/theming/themes")["light"],

          primary: "#FF3811",
          secondary: "teal",

          ".btn-primary": {
            "color": "#FFF",
          },

          ".btn-outline.btn-primary:hover": {
            "color": "#fff",
          },
        },
      },
      "dark",
      "light",
    ],
  },
};
