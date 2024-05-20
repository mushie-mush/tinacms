import PageFooter from "@/components/pageFooter";
import PageHeader from "@/components/pageHeader";
import SectionHeading from "@/components/sectionHeading";
import React from "react";
import client from "tina/__generated__/client";
import { tinaField, useTina } from "tinacms/dist/react";

export const getStaticProps = async () => {
    const data = await client.request({
        query: `query aboutPage {
      aboutPage(relativePath: "About.mdx") {
        title
        aboutBanner
        aboutHeading
        aboutSection01 {
          aboutSectionContent1
          aboutSectionImage1
          aboutSectionImageName1
        }
        aboutSection02 {
          aboutSectionContent2
          aboutSectionImage2
          aboutSectionImageName2
        }
        aboutSection03 {
          aboutSectionContent3
          aboutSectionImage3
          aboutSectionImageName3
        }
      }
    }`,
    });

    return {
        props: {
            data: data.data.aboutPage,
            query: data.query,
            variables: data.variables || "",
        },
    };
};

function About(props) {
    const { data } = useTina({
        data: props.data,
        query: props.query,
        variables: props.variables,
    });

    return (
        <>
            <PageHeader bg={data.aboutBanner}>Tentang Kami</PageHeader>
            <section className="container">
                <div className="row">
                    <div
                        className={`img-col col-md-6 d-flex justify-content-center align-items-start justify-content-sm-start align-items-sm-center`}
                    >
                        <div
                            data-tina-field={tinaField(
                                data.aboutSection01,
                                "aboutSectionImage1"
                            )}
                            className={`about-img-01`}
                            style={{
                                backgroundImage: `url(${data.aboutSection01.aboutSectionImage1})`,
                            }}
                        ></div>
                    </div>
                    <div className="col-md-6">
                        <SectionHeading>
                            Kota Mandiri Terintegrasi dan Terencana
                        </SectionHeading>
                        <p
                            data-tina-field={tinaField(
                                data.aboutSection01,
                                "aboutSectionContent1"
                            )}
                        >
                            Tingginya permintaan property commercial maupun
                            residential di dalam kawasan kota mandiri /
                            township, menginisiasi Sinarmas Land untuk membangun
                            kota mandiri Grand Wisata Bekasi di timur Jakarta
                            yang lengkap dengan fasilitas residential yang asri,
                            commercial yang serba lengkap serta menunjang
                            lifestyle masa kini.
                        </p>
                        <p>
                            Kehadiran kota mandiri seperti Grand Wisata Bekasi
                            tidak hanya menyediakan fasiltas hunian dan
                            commercial terlengkap di timur Jakarta, namun juga
                            menjadi lokomotif property dan ekonomi di Bekasi.
                        </p>
                        <p>
                            Berada di lahan seluas 1.100 Ha, lokasi Grand Wisata
                            Bekasi hanya berjarak 15 menit ke Jakarta dan 5
                            menit ke kawasan ekonomi & industri terpadu terbesar
                            di Indonesia (Kawasan Industri MM2100) membuat Grand
                            Wisata Bekasi menjadi kota mandiri berprospek tinggi
                            sebagai supporting township bagi 4000 perusahaan
                            multinasional dari 30 negara.
                        </p>
                    </div>
                </div>
                <div className={`row mt-sm-5 about-section-02`}>
                    <div className="col-md-6 d-flex justify-content-sm-center align-items-sm-center">
                        <div>
                            <h4>Konsep TOD (Transport Oriented Development)</h4>
                            <p>
                                Grand Wisata terkoneksi dengan infrastruktur
                                seperti akses langsung jalan tol Jakarta
                                Cikampek, JORR I&II, LRT dan KCIC melalui
                                shuttle bus.
                            </p>
                            <h4>Konsep Low Density Township</h4>
                            <p>
                                Grand Wisata turut mengaplikasikan konsep low
                                density township yang membuat Grand Wisata
                                menjadi kawasan residential dengan banyak ruang
                                terbuka hijau, asri dan exclusive yang nyaman
                                dan aman.
                            </p>
                            <p>
                                Ukuran township yang besar memungkinkan adanya
                                pembangunan beragam fasilitas seperti Mall
                                Living World Grand Wisata, rumah sakit, sekolah
                                berkualitas, modern market, tempat berbisnis dan
                                tempat rekreasi bertaraf internasional di dalam
                                Grand Wisata Bekasi.
                            </p>
                        </div>
                    </div>
                    <div
                        className={`img-col col-md-6 d-flex justify-content-sm-end align-items-sm-center justify-content-center align-items-start`}
                    >
                        <div
                            className={`about-img-02`}
                            style={{
                                backgroundImage: `url(${data.aboutSection02.aboutSectionImage2})`,
                            }}
                        ></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <img
                            src={data.aboutSection03.aboutSectionImage3}
                            className={`about-img-03`}
                            alt="Sinarmas Land"
                        ></img>
                        <h4>
                            Sinarmas Land Lebih Dari 40 Tahun Berkarya Membangun
                            Indonesia
                        </h4>
                        <p>
                            Sinarmas Land adalah perusahaan developer terbesar
                            di Indonesia yang turut serta membangun Indonesia
                            selama 40 tahun di 26 kota di Indonesia dan 5
                            negara.
                        </p>
                    </div>
                </div>
            </section>
            <PageFooter />
        </>
    );
}

export default About;
