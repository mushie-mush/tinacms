import Cards from "@/components/cards";
import PageFooter from "@/components/pageFooter";
import PageHeader from "@/components/pageHeader";
import React from "react";
import client from "tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const getStaticProps = async () => {
  const data = await client.request({
    query: `query pages {
            pages(relativePath: "Fasilitas.mdx") {
              title
              pageBanner
              pageContent
              pageImageList {
                pageImage
                pageImageName
              }
            }
            facilitiesConnection {
              edges {
                node {
                  facilityName
                  facilityIcon
                  facilityList
                  facilityThumb
                  slug
                }
              }
            }
          }`,
  });

  return {
    props: {
      data: data.data,
    },
  };
};

function Facilities({ data }) {
  const facilities = data.facilitiesConnection.edges.map((edge) => edge.node);
  return (
    <>
      <PageHeader bg={data.pages.pageBanner}>Fasilitas</PageHeader>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <TinaMarkdown content={data.pages.pageContent} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Cards items={facilities} category="facility" />
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}

export default Facilities;
