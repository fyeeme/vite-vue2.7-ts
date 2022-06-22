import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      textColor: {
        primary: "#38BDF8",
      },
    },
  },
  plugins: [require("windicss/plugin/line-clamp")],
});
