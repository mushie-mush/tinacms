import PageHeader from "@/components/pageHeader";
import React from "react";
import client from "tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const getStaticPaths = async () => {
  const res = await client.request({
    query: `query accessConnection {
            accessConnection {
              edges {
                node {
                  slug
                }
              }
            }
          }`,
  });

  const paths = res.data.accessConnection.edges.map((edge) => {
    return {
      params: { slug: edge.node.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await client.request({
    query: `query access {
            access(relativePath: "${slug}.mdx") {
              name
              type
              thumbnail
              accessBanner
              accessDescription
              accessContent {
                contentImage
                contentDescription
              }
            }
          }`,
  });

  return {
    props: {
      data: res.data.access,
    },
  };
};

function AccessDetail({ data }) {
  console.log(data);
  return (
    <>
      <PageHeader bg={data.accessBanner}>{data.name}</PageHeader>
      <section className="container">
        <TinaMarkdown content={data.accessDescription} />
        <div
          id="carouselExampleIndicators"
          className="carousel carousel-dark mt-5"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            {data.accessContent.map((content, index) => {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current="true"
                  aria-label={`Slide ${index}`}
                  key={index}
                ></button>
              );
            })}
          </div>
          <div className="carousel-inner">
            {data.accessContent.map((content, index) => {
              return (
                <div
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                  key={index}
                >
                  <img
                    src={content.contentImage}
                    alt={content.contentDescription}
                  />
                  <div
                    className={`carousel-access-caption carousel-caption text-center d-block`}
                  >
                    <h4>{content.contentDescription}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default AccessDetail;
