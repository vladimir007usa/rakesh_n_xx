import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion", "motion"],
          "vendor-icons": ["react-icons", "lucide-react"],
          "vendor-lenis": ["lenis"],
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-tabs",
            "@radix-ui/react-dropdown-menu",
          ],
        },
      },
    },
    // Enable gzip-efficient compression
    chunkSizeWarningLimit: 500,
  },
}));
