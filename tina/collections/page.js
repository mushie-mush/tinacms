const pageSchema = {
  name: "pages",
  label: "Pages",
  format: "mdx",
  path: "contents/pages",
  match: {
    exclude: "{Home,About}",
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
      type: "image",
      name: "pageBanner",
      label: "Banner",
    },
    {
      type: "rich-text",
      name: "pageContent",
      label: "Content",
      templates: [
        {
          name: "sectionHeading",
          label: "Section Heading",
          fields: [
            {
              type: "string",
              name: "heading",
              label: "Text",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "pageImageList",
      label: "Images",
      list: true,
      fields: [
        {
          type: "image",
          name: "pageImage",
          label: "Image",
        },
        {
          type: "string",
          name: "pageImageName",
          label: "Image Name",
        },
      ],
    },
  ],
};

export default pageSchema;
