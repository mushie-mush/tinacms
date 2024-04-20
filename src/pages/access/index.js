import PageHeader from "@/components/pageHeader";
import React from "react";
import client from "tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import SectionHeading from "@/components/sectionHeading";
import Cards from "@/components/cards";
import PageFooter from "@/components/pageFooter";

const sectionHeading = (props) => (
  <SectionHeading>{props.heading}</SectionHeading>
);

export const getStaticProps = async () => {
  const data = await client.request({
    query: `query pages {
            pages(relativePath: "Akses.mdx") {
              title
              pageBanner
              pageContent
              pageImageList {
                pageImage
                pageImageName
              }
            }
            accessConnection {
              edges {
                node {
                  name
                  type
                  thumbnail
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

function Access({ data }) {
  const access = data.accessConnection.edges.map((edge) => edge.node);
  return (
    <>
      <PageHeader bg={data.pages.pageBanner}>Akses</PageHeader>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <TinaMarkdown
              content={data.pages.pageContent}
              components={{ sectionHeading }}
            />
          </div>
        </div>
        <div className="row">
          {data.pages.pageImageList.map((image) => (
            <div className="col-sm-6" key={image.pageImageName}>
              <img src={image.pageImage} alt="" />
            </div>
          ))}
          <div className="col-12">
            <Cards items={access} category={"access"} />
          </div>
        </div>
      </section>
      <PageFooter />
    </>
  );
}

export default Access;
