import { defineConfig } from "tinacms";
import homepageSchema from "./collections/home";
import aboutSchema from "./collections/about";
import productSchema from "./collections/product";
import pageSchema from "./collections/page";
import globalSchema from "./collections/global";
import facilitySchema from "./collections/facilities";
import accessSchema from "./collections/access";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      globalSchema,
      homepageSchema,
      aboutSchema,
      productSchema,
      facilitySchema,
      accessSchema,
      pageSchema,
    ],
  },
});
