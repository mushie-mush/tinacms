const globalSchema = {
  name: "global",
  label: "Global",
  format: "mdx",
  path: "contents",
  match: {
    include: "Global",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "object",
      name: "navbar",
      label: "Navigations",
      fields: [
        {
          type: "object",
          name: "menu",
          label: "Menu",
          list: true,
          ui: {
            itemProps(item) {
              return { label: item?.label };
            },
          },
          fields: [
            {
              type: "string",
              name: "label",
              label: "Label",
            },
            {
              type: "string",
              name: "link",
              label: "Link",
            },
            {
              type: "string",
              name: "path",
              label: "Path",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "Contact",
      fields: [
        {
          type: "rich-text",
          name: "address",
          label: "Address",
        },
        {
          type: "rich-text",
          name: "addressMarketingGallery",
          label: "Marketing Gallery Address",
        },
        {
          type: "string",
          name: "phone",
          label: "Phone",
        },
        {
          type: "string",
          name: "email",
          label: "Email",
        },
        {
          type: "object",
          name: "map",
          label: "Map",
          fields: [
            {
              type: "string",
              name: "latitude",
              label: "Latitude",
            },
            {
              type: "string",
              name: "longitude",
              label: "Longitude",
            },
            {
              type: "number",
              name: "zoom",
              label: "Zoom Level",
            },
          ],
        },
        {
          type: "image",
          name: "image",
          label: "Marketing Gallery Image",
        },
      ],
    },
  ],
};

export default globalSchema;
