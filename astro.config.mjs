import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://dev.d2l7gw9pgh8hks.amplifyapp.com", //TODO: Change this to redirect properly
  integrations: [mdx(), sitemap(), react()],
  vite: {
    ssr: {
      external: ["@aws-amplify/pubsub"],
      noExternal: ["@aws-amplify/*", "@radix-ui/*"],
    },
    resolve: {
      alias: [
        {
          find: "./runtimeConfig",
          replacement: "./runtimeConfig.browser",
        },
      ],
    },
  },
});
