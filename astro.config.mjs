import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ["cloudinary.com"]
  }
});