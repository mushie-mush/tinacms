import Cards from "@/components/cards";
import PageFooter from "@/components/pageFooter";
import PageHeader from "@/components/pageHeader";
import React from "react";
import client from "tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

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
            }
            productsConnection {
              edges {
                node {
                  name
                  type
                  thumbnail
                  slug
                }
              }
            }
          }
          `,
  });

  return {
    props: {
      data: data.data,
    },
  };
};

function Products({ data }) {
  const node = data.productsConnection.edges.map((edge) => edge.node);

  return (
    <>
      <PageHeader bg={data.pages.pageBanner}>Produk</PageHeader>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <TinaMarkdown content={data.pages.pageContent} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Cards items={node} category={"products"} />
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}

export default Products;
