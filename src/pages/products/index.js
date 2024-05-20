import Cards from '@/components/cards';
import PageFooter from '@/components/pageFooter';
import PageHeader from '@/components/pageHeader';
import React from 'react';
import client from 'tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export const getStaticProps = async () => {
    const data = await client.request({
        query: `query pages {
        pages(relativePath: "Produk.mdx") {
          title
          pageBanner
          pageContent
          pageImageList {
            pageImage
            pageImageName
          }
          postType
          products {
            products {
              ... on Products {
                name
                slug
                thumbnail
                type
              }
            }
          }
          access {
            access {
              ... on Access {
                name
                slug
                thumbnail
                type
              }
            }
          }
        }
      }`,
    });

    return {
        props: {
            data: data.data.pages,
        },
    };
};

function Products({ data }) {
    const posts = data[data.postType].map((post) => post[data.postType]);
    console.log(posts);

    return (
        <>
            <PageHeader bg={data.pageBanner}>Produk</PageHeader>
            <section className="container">
                <div className="row">
                    <div className="col-12">
                        <TinaMarkdown content={data.pageContent} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Cards items={posts} category={data.postType} />
                    </div>
                </div>
            </section>
            <PageFooter />
        </>
    );
}

export default Products;
