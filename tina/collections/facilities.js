import React from 'react';
import { seoPageProps } from '@pcode-at/tinacms-seo';

const facilitySchema = {
    name: 'facilities',
    label: 'Facilities',
    format: 'mdx',
    path: 'contents/facilities',
    ui: {
        beforeSubmit: async ({ values }) => {
            return {
                ...values,
                slug: values.facilityName.toLowerCase().replace(/ /g, '-'),
                filename: values.facilityName.toLowerCase().replace(/ /g, '-'),
            };
        },
    },
    fields: [
        seoPageProps,
        {
            type: 'string',
            name: 'facilityName',
            label: 'Name',
            isTitle: true,
            required: true,
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
            type: 'string',
            name: 'facilityIcon',
            label: 'Icon',
        },
        {
            type: 'image',
            name: 'facilityThumb',
            label: 'Thumbnail',
        },
        {
            type: 'image',
            name: 'facilityBanner',
            label: 'Banner',
        },
        {
            type: 'string',
            name: 'facilityList',
            label: 'Facilities',
            list: true,
        },
        {
            type: 'image',
            name: 'facilityImages',
            label: 'Images',
            list: true,
        },
    ],
};

export default facilitySchema;
