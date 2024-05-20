import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { client } from "../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "@/components/carousel";
import SectionHeading from "@/components/sectionHeading";
import CompositeImage from "@/components/compositeImage";
import ConceptSlides from "@/components/conceptSlides";
import Cards from "@/components/cards";

export const getStaticProps = async () => {
  const homepageQuery = await client.request({
    query: `query homepage {
      global(relativePath: "Global.mdx") {
        contact {
          addressMarketingGallery
          phone
          email
          map {
            latitude
            longitude
            zoom
          }
        }
      }
      homepage(relativePath: "Home.mdx") {
        title
        carousel {
          carouselTitle
          carouselImage
          carouselText
        }
        adsBanner {
          adsBannerName
          adsBannerImage
          adsBannerLink
        }
        introductionSection {
          introductionSectionHeading
          introductionSectionBody
          introductionFeatured01 {
            featuredImageName01
            featuredImage01
            featuredImageLink01
          }
          introductionFeatured02 {
            featuredImageName02
            featuredImage02
            featuredImageLink02
          }
        }
        concepts{
          conceptText
          conceptTitle
          conceptImage
        }
        sectionSeparator {
          sectionSeparatorName
          sectionSeparatorImage
        }
        productSection {
          productSectionHeading
          productSectionBody
          productSectionFeatured01 {
            featuredImageName01
            featuredImage01
            featuredImageLink01
          }
          productSectionFeatured02 {
            featuredImageName02
            featuredImage02
            featuredImageLink02
          }
        }
        productSectionRef {
          product {
            ... on Products {
              name
              type
              thumbnail
              slug
            }
          }
        }
        videos
        kprBank {
          bankTitle
          bankImage
        }
      }
    }
    `,
  });

  return {
    props: {
      data: homepageQuery.data.homepage,
      contact: homepageQuery.data.global.contact,
    },
  };
};

export default function Home({ data, contact }) {
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const products = data.productSectionRef.map((product) => product.product);

  return (
    <>
      <Carousel items={data.carousel} />

      <div className="container">
        <Image
          src={data.adsBanner.adsBannerImage}
          alt={data.adsBanner.adsBannerName}
          width={1200}
          height={120}
          className="banner-ad"
        ></Image>
      </div>

      <section className={`container`}>
        <div className="row">
          <div className="col-md-6">
            <SectionHeading>
              {data.introductionSection.introductionSectionHeading}
            </SectionHeading>
            <TinaMarkdown
              content={data.introductionSection.introductionSectionBody}
            />
            <Link className="button-link" href="/about">
              Lebih lanjut <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="col-md-6">
            <CompositeImage
              items={{
                featured01: data.introductionSection.introductionFeatured01,
                featured02: data.introductionSection.introductionFeatured02,
              }}
            />
          </div>
        </div>
        <ConceptSlides items={data.concepts} />
      </section>

      <Image
        src={data.sectionSeparator.sectionSeparatorImage}
        className="banner"
        alt={data.sectionSeparator.sectionSeparatorName}
        width={1200}
        height={300}
      ></Image>

      <section className={`container`}>
        <div className="row">
          <div className="col-md-6">
            <SectionHeading>
              {data.productSection.productSectionHeading}
            </SectionHeading>
            <TinaMarkdown content={data.productSection.productSectionBody} />
          </div>
          <div className="col-md-6">
            <CompositeImage
              items={{
                featured01: data.productSection.productSectionFeatured01,
                featured02: data.productSection.productSectionFeatured02,
              }}
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h2>Produk Terkini</h2>
            <Cards items={products} category={`products`} />
            <br />
            <Link className={`button`} href="/products">
              Lebih banyak
            </Link>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h2>Video Terkini</h2>
            <div className="row mt-4">
              {data.videos.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <iframe
                    width="100%"
                    src={item}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container text-center pt-0">
        <p>KPR partnership:</p>
        {data.kprBank.map((item) => (
          <img
            src={item.bankImage}
            className={`bank-icon`}
            alt={item.bankTitle}
            key={item.bankTitle}
          ></img>
        ))}
      </section>

      <section className={`container home-contact`}>
        <div className={`row location`}>
          <div className={`col-md-6 location-details`}>
            <h2>Lokasi</h2>
            <hr />
            <TinaMarkdown content={contact.addressMarketingGallery} />
            <div className="tel">
              <FontAwesomeIcon icon={faPhoneAlt} />
              {contact.phone}
            </div>
            <div className="mail">
              <FontAwesomeIcon icon={faEnvelope} />
              {contact.email}
            </div>
          </div>
          <div className={`col-md-6 location-map`}>
            <Map
              latitude={contact.map.latitude}
              longitude={contact.map.longitude}
            ></Map>
          </div>
        </div>
      </section>
    </>
  );
}
