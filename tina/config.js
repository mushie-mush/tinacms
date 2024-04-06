import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
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
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        format: "json",
        path: "contents/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "image",
            label: "Banner",
            name: "banner",
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
          },
        ],
      },
      {
        name: "homepage",
        label: "Homepage",
        format: "json",
        path: "contents/pages",
        match: {
          include: "Home",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            label: "Carousel",
            name: "Carousel",
            list: true,
            ui: {
              itemProps(item) {
                return { label: item?.carouselTitle };
              },
            },
            fields: [
              {
                type: "string",
                name: "carouselTitle",
                label: "Carousel Title",
                isTitle: true,
                required: true,
              },
              {
                type: "image",
                name: "carouselImage",
                label: "Carousel Image",
                required: true,
              },
              {
                type: "rich-text",
                name: "carouselText",
                label: "Carousel Text",
                templates: [
                  {
                    name: "carouselButton",
                    label: "Button",
                    fields: [
                      {
                        name: "buttonText",
                        type: "string",
                        label: "Button Text",
                      },
                      {
                        name: "buttonLink",
                        type: "string",
                        label: "Button Link",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Introduction Section",
            name: "introductionSection",
            fields: [
              {
                type: "rich-text",
                label: "Content Body",
                name: "contentBody",
              },
              {
                type: "image",
                name: "featuredImage01",
                label: "Featured Image 01",
              },
              {
                type: "string",
                label: "Image Link",
                name: "featuredImageLink01",
              },
              {
                type: "image",
                name: "featuredImage02",
                label: "Featured Image 02",
              },
              {
                type: "string",
                label: "Image Link",
                name: "featuredImageLink02",
              },
            ],
          },
        ],
      },
    ],
  },
});
