import PageHeader from '@/components/pageHeader';
import SectionHeading from '@/components/sectionHeading';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import client from 'tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useTina } from 'tinacms/dist/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const getStaticPaths = async () => {
    const res = await client.request({
        query: `query productConnection {
      productsConnection {
        edges {
          node {
            slug
          }
        }
      }
    }`,
    });

    const paths = res.data.productsConnection.edges.map((edge) => {
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
        query: `query products {
      products(relativePath: "${slug}.mdx") {
        name
        slug
        type
        productBanner
        thumbnail
        productTitle
        productDescription
        productBarcode {
          __typename
          productBarcodeLabel
          productBarcodeImage
          productBarcodeLink
        }
        productSpecifications {
          __typename
          productSpecificationLabel
          productSpecificationValue
        }
        productGallery
        productFloorplan
        productSiteplan
        productMasterplan
      }
    }
    `,
    });

    return {
        props: {
            data: res.data.products,
            query: res.query,
            variables: res.variables || '',
        },
    };
};

function Product(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    return (
        <>
            <PageHeader bg={data.productBanner} />
            <section className="container">
                <SectionHeading>{data.productTitle}</SectionHeading>
                <div className="row mb-5">
                    <div className="col-md-8">
                        {data.productDescription ? (
                            <TinaMarkdown content={data.productDescription} />
                        ) : (
                            <p>Deskripsi produk tidak tersedia</p>
                        )}
                    </div>
                    <div className="col-md-4 mt-5 mt-sm-0 text-center">
                        <a
                            href="#tertarik"
                            className={`button button-interest`}>
                            Saya Tertarik
                        </a>
                        {data.productBarcode ? (
                            <div className={`w-75 qr-container`}>
                                <h4>Virtual Tour</h4>
                                <div className={`row justify-content-center`}>
                                    {data.productBarcode.map((item, index) => {
                                        return (
                                            <div
                                                className="col-4 col-sm-12"
                                                key={index}>
                                                <Image
                                                    src={
                                                        item.productBarcodeImage
                                                    }
                                                    width={100}
                                                    height={100}
                                                    alt={
                                                        item.productBarcodeLabel
                                                    }
                                                />
                                                <br />
                                                <a
                                                    href={
                                                        item.productBarcodeLink
                                                    }
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="mb-5">
                                                    {item.productBarcodeLabel}
                                                    <FontAwesomeIcon
                                                        icon={faArrowRight}
                                                    />
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <p>Virtual tour tidak tersedia</p>
                        )}
                    </div>
                </div>

                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-touch="true">
                    <div className="carousel-indicators">
                        {data.productGallery.map((img, index) => {
                            return (
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                    aria-current="true"
                                    aria-label={`Slide ${index}`}
                                    key={index}></button>
                            );
                        })}
                    </div>
                    <div className="carousel-inner">
                        {data.productGallery.map((img, index) => {
                            return (
                                <div
                                    className={
                                        index === 0
                                            ? 'carousel-item active'
                                            : 'carousel-item'
                                    }
                                    key={index}>
                                    <Image
                                        src={img}
                                        className="d-block w-100"
                                        width={800}
                                        height={600}
                                        alt={data.productTitle}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {!data.productSpecifications ? (
                    ''
                ) : (
                    <div className="row mt-5">
                        <h2 className="mb-5">Spesifikasi</h2>
                        <div className="col-sm-6">
                            {data.productSpecifications
                                .slice(0, 10)
                                .map((item) => (
                                    <div
                                        className="specification"
                                        key={item.productSpecificationLabel}>
                                        <span className="specification-label">
                                            {item.productSpecificationLabel}
                                        </span>
                                        <span>
                                            {item.productSpecificationValue}
                                        </span>
                                    </div>
                                ))}
                        </div>
                        <div className="col-sm-6">
                            {data.productSpecifications
                                .slice(10, 20)
                                .map((item) => (
                                    <div
                                        className="specification"
                                        key={item.productSpecificationLabel}>
                                        <span className="specification-label">
                                            {item.productSpecificationLabel}
                                        </span>
                                        <span>
                                            {item.productSpecificationValue}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {!data.productFloorplan ? (
                    ''
                ) : (
                    <div className={`row mt-5 floorplan`}>
                        <h2 className="mb-5">Tipe & Floor Plan</h2>

                        {data.productFloorplan.map((floorplan, index) => {
                            return (
                                <div className="col-sm-6" key={index}>
                                    <Image
                                        src={floorplan}
                                        width={800}
                                        height={800}
                                        alt={data.productTitle}></Image>
                                </div>
                            );
                        })}
                    </div>
                )}

                {!data.productSiteplan ? (
                    ''
                ) : (
                    <div className={`row mt-5 siteplan`}>
                        <div className="col-12">
                            <h2 className="mb-5">Site Plan</h2>
                            {data.productSiteplan.length &&
                                data.productSiteplan.map((plan, index) => (
                                    <Image
                                        src={plan}
                                        width={800}
                                        height={800}
                                        alt={data.productTitle}
                                        key={index}></Image>
                                ))}
                        </div>
                    </div>
                )}

                {!data.productMasterplan ? (
                    ''
                ) : (
                    <div className={`row mt-5 masterplan`}>
                        <div className="col-12">
                            <h2 className="mb-5">Master Plan</h2>
                            <Image
                                src={data.productMasterplan}
                                width={1200}
                                height={1200}
                                alt={data.productTitle}></Image>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Product;
