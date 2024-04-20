const aboutSchema = {
  name: "aboutPage",
  label: "About",
  format: "mdx",
  path: "contents/pages",
  match: {
    include: "About",
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
      type: "image",
      name: "aboutBanner",
      label: "Banner",
    },
    {
      type: "string",
      name: "aboutHeading",
      label: "Heading",
    },
    {
      type: "object",
      name: "aboutSection01",
      label: "Section Content 01",
      fields: [
        {
          type: "rich-text",
          name: "aboutSectionContent1",
          label: "Content",
        },
        {
          type: "image",
          name: "aboutSectionImage1",
          label: "Image",
        },
        {
          type: "string",
          name: "aboutSectionImageName1",
          label: "Image Name",
        },
      ],
    },
    {
      type: "object",
      name: "aboutSection02",
      label: "Section Content 02",
      fields: [
        {
          type: "rich-text",
          name: "aboutSectionContent2",
          label: "Content",
        },
        {
          type: "image",
          name: "aboutSectionImage2",
          label: "Image",
        },
        {
          type: "string",
          name: "aboutSectionImageName2",
          label: "Image Name",
        },
      ],
    },
    {
      type: "object",
      name: "aboutSection03",
      label: "Section Content 03",
      fields: [
        {
          type: "rich-text",
          name: "aboutSectionContent3",
          label: "Content",
        },
        {
          type: "image",
          name: "aboutSectionImage3",
          label: "Image",
        },
        {
          type: "string",
          name: "aboutSectionImageName3",
          label: "Image Name",
        },
      ],
    },
  ],
};

export default aboutSchema;
