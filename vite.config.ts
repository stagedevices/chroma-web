import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { getPrivacyStamp, getPressStamp } from "./scripts/privacy-stamp.mjs";

export default defineConfig({
  plugins: [react()],
  base: "/chroma-web/",
  define: {
    __PRIVACY_LAST_UPDATED__: JSON.stringify(getPrivacyStamp()),
    __PRESS_LAST_UPDATED__: JSON.stringify(getPressStamp()),
  },
});
