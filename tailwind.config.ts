import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    fontFamily: {
      josefinsans: ["Josefin Sans", "sans-serif"],
    },
  },
} satisfies Config;
