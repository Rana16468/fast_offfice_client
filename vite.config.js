import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "agora-vendor": ["agora-react-uikit", "agora-rtm-sdk"],
          "daisyui-components": ["daisyui"],
          // Add more chunks as needed
        },
      },
    },
    // Optionally increase the warning limit if needed
    chunkSizeWarningLimit: 800,
  },
});
