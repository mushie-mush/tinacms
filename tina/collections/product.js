import { TinaCMS, Form } from "tinacms";
import React from "react";

const productSchema = {
  name: "products",
  label: "Products",
  format: "mdx",
  path: "contents/products",
  ui: {
    beforeSubmit: async ({ values }) => {
      return {
        ...values,
        slug: values.name.toLowerCase().replace(/ /g, "-"),
        filename: values.name.toLowerCase().replace(/ /g, "-"),
      };
    },
  },
  fields: [
    {
      type: "string",
      name: "name",
      label: "Product Name",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "slug",
      label: "Slug",
      ui: {
        component: ({ input }) => {
          return <div class="hidden"></div>;
        },
      },
    },
    {
      type: "string",
      name: "type",
      label: "Product Type",
      required: true,
    },
    {
      type: "image",
      name: "productBanner",
      label: "Product Banner",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Product Thumbnail",
    },
    {
      type: "string",
      name: "productTitle",
      label: "Product Title",
    },
    {
      type: "rich-text",
      name: "productDescription",
      label: "Product Description",
    },
    {
      type: "object",
      name: "productBarcode",
      label: "Product Barcode",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.productBarcodeLabel };
        },
      },
      fields: [
        {
          type: "string",
          name: "productBarcodeLabel",
          label: "Barcode Label",
        },
        {
          type: "image",
          name: "productBarcodeImage",
          label: "Barcode Image",
        },
        {
          type: "string",
          name: "productBarcodeLink",
          label: "Barcode Link",
        },
      ],
    },
    {
      type: "object",
      name: "productSpecifications",
      label: "Product Specifications",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `${item?.productSpecificationLabel}: ${item?.productSpecificationValue}`,
          };
        },
      },
      fields: [
        {
          type: "string",
          name: "productSpecificationLabel",
          label: "Label",
        },
        {
          type: "string",
          name: "productSpecificationValue",
          label: "Value",
        },
      ],
    },
    {
      type: "image",
      name: "productGallery",
      label: "Gallery",
      list: true,
    },
    {
      type: "image",
      name: "productFloorplan",
      label: "Floorplan",
      list: true,
    },
    {
      type: "image",
      name: "productSiteplan",
      label: "Siteplan",
      list: true,
    },
    {
      type: "image",
      name: "productMasterplan",
      label: "Masterplan",
    },
  ],
};

export default productSchema;
