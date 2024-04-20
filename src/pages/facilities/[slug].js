import PageHeader from "@/components/pageHeader";
import SectionHeading from "@/components/sectionHeading";
import React from "react";
import client from "tina/__generated__/client";

export const getStaticPaths = async () => {
  const res = await client.request({
    query: `
        query facilitiesConnection {
            facilitiesConnection {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `,
  });

  const paths = res.data.facilitiesConnection.edges.map((edge) => {
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
    query: `query facilities {
            facilities(relativePath: "${slug}.mdx") {
              facilityName
              slug
              facilityIcon
              facilityThumb
              facilityBanner
              facilityList
              facilityImages
            }
          }
          `,
  });

  return {
    props: {
      data: res.data.facilities,
    },
  };
};

function FacilityDetails({ data }) {
  const items = data.facilityList;
  const group = [...new Set(items.map(([v]) => v).sort())];

  return (
    <>
      <PageHeader bg={data.facilityBanner}>{data.facilityName}</PageHeader>
      <section className="container">
        <div className="row">
          <div className="col-12">
            {group.map((g) => {
              return (
                <>
                  <SectionHeading>{g}</SectionHeading>
                  {items
                    .filter((item) => item.startsWith(g))
                    .map((item) => {
                      return <p>{item}</p>;
                    })}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default FacilityDetails;
