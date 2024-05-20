import React from 'react';
import { seoPageProps } from '@pcode-at/tinacms-seo';

const accessSchema = {
    name: 'access',
    label: 'Access',
    format: 'mdx',
    path: 'contents/access',
    ui: {
        beforeSubmit: async ({ values }) => {
            return {
                ...values,
                slug: values.name.toLowerCase().replace(/ /g, '-'),
                filename: values.name.toLowerCase().replace(/ /g, '-'),
            };
        },
    },
    fields: [
        seoPageProps,
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            isTitle: true,
            required: true,
        },
        {
            type: 'string',
            name: 'type',
            label: 'Type',
        },
        {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            ui: {
                component: ({ input }) => {
                    return <div class="hidden"></div>;
                },
            },
        },
        {
            type: 'image',
            name: 'thumbnail',
            label: 'Thumbnail',
        },
        {
            type: 'image',
            name: 'accessBanner',
            label: 'Banner',
        },
        {
            type: 'rich-text',
            name: 'accessDescription',
            label: 'Description',
        },
        {
            type: 'object',
            name: 'accessContent',
            label: 'Content',
            list: true,
            fields: [
                {
                    type: 'image',
                    name: 'contentImage',
                    label: 'Image',
                },
                {
                    type: 'string',
                    name: 'contentDescription',
                    label: 'Description',
                },
            ],
        },
    ],
};

export default accessSchema;
