import { seoPageProps } from '@pcode-at/tinacms-seo';

const homepageSchema = {
    name: 'homepage',
    label: 'Home',
    format: 'mdx',
    path: 'contents/pages',
    match: {
        include: 'Home',
    },
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        },
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
            type: 'object',
            label: 'Carousel',
            name: 'carousel',
            list: true,
            ui: {
                itemProps(item) {
                    return { label: item?.carouselTitle };
                },
            },
            fields: [
                {
                    type: 'string',
                    name: 'carouselTitle',
                    label: 'Carousel Title',
                    isTitle: true,
                    required: true,
                },
                {
                    type: 'image',
                    name: 'carouselImage',
                    label: 'Carousel Image',
                    required: true,
                },
                {
                    type: 'string',
                    name: 'carouselImageFit',
                    label: 'Image Fit',
                    options: ['contain', 'cover'],
                },
                {
                    type: 'rich-text',
                    name: 'carouselText',
                    label: 'Carousel Text',
                    templates: [
                        {
                            name: 'carouselButton',
                            label: 'Button',
                            fields: [
                                {
                                    name: 'buttonText',
                                    type: 'string',
                                    label: 'Button Text',
                                },
                                {
                                    name: 'buttonLink',
                                    type: 'string',
                                    label: 'Button Link',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'object',
            label: 'Ads Banner',
            name: 'adsBanner',
            fields: [
                {
                    type: 'string',
                    name: 'adsBannerName',
                    label: 'Banner Name',
                },
                {
                    type: 'image',
                    name: 'adsBannerImage',
                    label: 'Banner Image',
                },
                {
                    type: 'string',
                    label: 'Banner Link',
                    name: 'adsBannerLink',
                },
            ],
        },
        {
            type: 'object',
            label: 'Introduction Section',
            name: 'introductionSection',
            fields: [
                {
                    type: 'string',
                    label: 'Heading',
                    name: 'introductionSectionHeading',
                },
                {
                    type: 'rich-text',
                    label: 'Content Body',
                    name: 'introductionSectionBody',
                    templates: [
                        {
                            name: 'carouselButton',
                            label: 'Button',
                            fields: [
                                {
                                    name: 'buttonText',
                                    type: 'string',
                                    label: 'Button Text',
                                },
                                {
                                    name: 'buttonLink',
                                    type: 'string',
                                    label: 'Button Link',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'object',
                    label: 'Featured Image 1',
                    name: 'introductionFeatured01',
                    fields: [
                        {
                            type: 'string',
                            label: 'Image name',
                            name: 'featuredImageName01',
                        },
                        {
                            type: 'image',
                            name: 'featuredImage01',
                            label: 'Featured Image',
                        },
                        {
                            type: 'string',
                            label: 'Image Link',
                            name: 'featuredImageLink01',
                        },
                    ],
                },
                {
                    type: 'object',
                    label: 'Featured Image 2',
                    name: 'introductionFeatured02',
                    fields: [
                        {
                            type: 'string',
                            label: 'Image Name',
                            name: 'featuredImageName02',
                        },
                        {
                            type: 'image',
                            name: 'featuredImage02',
                            label: 'Featured Image',
                        },
                        {
                            type: 'string',
                            label: 'Image Link',
                            name: 'featuredImageLink02',
                        },
                    ],
                },
            ],
        },
        {
            type: 'object',
            label: 'Concepts',
            name: 'concepts',
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.conceptTitle };
                },
            },
            fields: [
                {
                    type: 'string',
                    name: 'conceptTitle',
                    label: 'Concept Heading',
                    isTitle: true,
                    required: true,
                },
                {
                    type: 'rich-text',
                    name: 'conceptText',
                    label: 'Concept Body',
                },
                {
                    type: 'image',
                    name: 'conceptImage',
                    label: 'Concept Image',
                    required: true,
                },
            ],
        },
        {
            type: 'object',
            name: 'sectionSeparator',
            label: 'Separator Image',
            fields: [
                {
                    type: 'string',
                    label: 'Name',
                    name: 'sectionSeparatorName',
                },
                {
                    type: 'image',
                    name: 'sectionSeparatorImage',
                    label: 'Image',
                },
            ],
        },
        {
            type: 'object',
            label: 'Product Section',
            name: 'productSection',
            fields: [
                {
                    type: 'string',
                    label: 'Heading',
                    name: 'productSectionHeading',
                },
                {
                    type: 'rich-text',
                    label: 'Content Body',
                    name: 'productSectionBody',
                },
                {
                    type: 'object',
                    label: 'Featured Image 1',
                    name: 'productSectionFeatured01',
                    fields: [
                        {
                            type: 'string',
                            label: 'Image Name',
                            name: 'featuredImageName01',
                        },
                        {
                            type: 'image',
                            name: 'featuredImage01',
                            label: 'Featured Image',
                        },
                        {
                            type: 'string',
                            label: 'Image Link',
                            name: 'featuredImageLink01',
                        },
                    ],
                },
                {
                    type: 'object',
                    label: 'Featured Image 2',
                    name: 'productSectionFeatured02',
                    fields: [
                        {
                            type: 'string',
                            label: 'Image Name',
                            name: 'featuredImageName02',
                        },
                        {
                            type: 'image',
                            name: 'featuredImage02',
                            label: 'Featured Image',
                        },
                        {
                            type: 'string',
                            label: 'Image Link',
                            name: 'featuredImageLink02',
                        },
                    ],
                },
            ],
        },
        {
            type: 'object',
            label: 'Featured Products',
            name: 'productSectionRef',
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.product };
                },
            },
            fields: [
                {
                    type: 'reference',
                    label: 'Product',
                    name: 'product',
                    collections: ['products'],
                },
            ],
        },
        {
            type: 'string',
            label: 'Videos',
            name: 'videos',
            list: true,
        },
        {
            type: 'object',
            label: 'KPR Bank',
            name: 'kprBank',
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.bankTitle };
                },
            },
            fields: [
                {
                    type: 'string',
                    name: 'bankTitle',
                    label: 'Bank Name',
                    required: true,
                },
                {
                    type: 'image',
                    name: 'bankImage',
                    label: 'Bank Image',
                    required: true,
                },
            ],
        },
    ],
};

export default homepageSchema;
