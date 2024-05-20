import React from 'react';
import { GroupListField } from 'tinacms';
import { seoPageProps } from '@pcode-at/tinacms-seo';

const pageSchema = {
    name: 'pages',
    label: 'Pages',
    format: 'mdx',
    path: 'contents/pages',
    match: {
        exclude: '{Home,About}',
    },
    fields: [
        seoPageProps,
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
        },
        {
            type: 'image',
            name: 'pageBanner',
            label: 'Banner',
        },
        {
            type: 'rich-text',
            name: 'pageContent',
            label: 'Content',
            templates: [
                {
                    name: 'sectionHeading',
                    label: 'Section Heading',
                    fields: [
                        {
                            type: 'string',
                            name: 'heading',
                            label: 'Text',
                        },
                    ],
                },
            ],
        },
        {
            type: 'object',
            name: 'pageImageList',
            label: 'Images',
            list: true,
            fields: [
                {
                    type: 'image',
                    name: 'pageImage',
                    label: 'Image',
                },
                {
                    type: 'string',
                    name: 'pageImageName',
                    label: 'Image Name',
                },
            ],
        },
        {
            type: 'string',
            name: 'postType',
            label: 'Post Type',
            options: ['products', 'access', 'facilities'],
        },
        {
            type: 'object',
            name: 'products',
            label: 'Products',
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.products };
                },
                component: (props) => {
                    const postType = props.tinaForm.values.postType;

                    if (postType !== 'products') {
                        return null;
                    }

                    return GroupListField(props);
                },
            },
            fields: [
                {
                    type: 'reference',
                    name: 'products',
                    label: 'Products',
                    collections: ['products'],
                },
            ],
        },
        {
            type: 'object',
            name: 'access',
            label: 'Access',
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.access };
                },
                component: (props) => {
                    const postType = props.tinaForm.values.postType;

                    if (postType !== 'access') {
                        return null;
                    }

                    return GroupListField(props);
                },
            },
            fields: [
                {
                    type: 'reference',
                    name: 'access',
                    label: 'Access',
                    collections: ['access'],
                },
            ],
        },
        {
            type: 'object',
            name: 'facilities',
            label: 'Facilities',
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.facilities };
                },
                component: (props) => {
                    const postType = props.tinaForm.values.postType;

                    if (postType !== 'facilities') {
                        return null;
                    }

                    return GroupListField(props);
                },
            },
            fields: [
                {
                    type: 'reference',
                    name: 'facilities',
                    label: 'Facilities',
                    collections: ['facilities'],
                },
            ],
        },
    ],
};

export default pageSchema;
