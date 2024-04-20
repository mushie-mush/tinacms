import PageHeader from "@/components/pageHeader";
import SectionHeading from "@/components/sectionHeading";
import React, { useMemo, useState } from "react";
import client from "tina/__generated__/client";
import dynamic from "next/dynamic";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const getStaticProps = async () => {
  const data = await client.request({
    query: `query pages {
            global(relativePath: "Global.mdx") {
              contact {
                address
                phone
                email
                map {
                  latitude
                  longitude
                  zoom
                }
              }
            }
            pages(relativePath: "Kontak.mdx") {
              title
              pageBanner
              pageContent
            }
          }
        `,
  });

  return {
    props: {
      data: data.data.pages,
      contact: data.data.global.contact,
    },
  };
};

function Contact({ data, contact }) {
  const [nama, setNama] = useState("");
  const [telp, setTelp] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [sent, setSent] = useState(false);
  const [fail, setFail] = useState(false);

  const Map = useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const handleFormSubmit = function (event) {
    event.preventDefault();
    axios({
      method: "post",
      url: ``,
      headers: { "content-type": "application/json" },
      data: {
        nama: nama,
        email: email,
        telp: telp,
        pesan: pesan,
      },
    }).then((result) => {
      setSent(true);
      if (result.status != 200) {
        setFail(true);
      }
    });
  };

  return (
    <>
      <PageHeader bg={data.pageBanner}>Kontak</PageHeader>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <TinaMarkdown content={data.pageContent} />
          </div>
        </div>
        <div className="row mt-sm-5">
          <div className={`col-sm-6 location-contact`}>
            <SectionHeading>Lokasi</SectionHeading>
            <div className="location-contact-map">
              <Map
                latitude={contact.map.latitude}
                longitude={contact.map.longitude}
              ></Map>
            </div>
            <div className={`mt-5 location-contact-detail`}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <TinaMarkdown content={contact.address} />
            </div>
            <div className={`location-contact-detail`}>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>{contact.phone}</span>
            </div>
            <div className={`location-contact-detail`}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{contact.email}</span>
            </div>
          </div>
          <div className="col-sm-6">
            <SectionHeading>Hubungi kami</SectionHeading>

            <p>
              Tinggalkan pesan dan pertanyaan Anda disini dan kami akan segera
              menghubungi Anda.
            </p>
            <form
              // action={`mailto:dhona.grandwisata@gmail.com?subject=${nama}%20(✉${email})%20(☎${telp})&body=${pesan}`}
              onSubmit={(e) => handleFormSubmit(e)}
              method="post"
              enctype="text/plain"
            >
              {sent ? (
                fail ? (
                  <div
                    class="alert alert-danger d-flex align-items-center"
                    role="alert"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                      viewBox="0 0 16 16"
                      role="img"
                      aria-label="Warning:"
                    >
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div>Pesan gagal dikirim</div>
                  </div>
                ) : (
                  <div
                    class="alert alert-success d-flex align-items-center"
                    role="alert"
                  >
                    <svg
                      class="bi flex-shrink-0 me-2"
                      width="24"
                      height="24"
                      role="img"
                      aria-label="Success:"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <div>Pesan berhasil dikirim</div>
                  </div>
                )
              ) : (
                ""
              )}

              <div className="mb-3">
                <label className="form-label" htmlFor="nama">
                  Nama
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="nama"
                  id="nama"
                  onChange={(e) => setNama(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="telp">
                  No. Telepon
                </label>
                <input
                  className="form-control"
                  type="tel"
                  name="telp"
                  id="telp"
                  onChange={(e) => setTelp(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-5">
                <label className="form-label" htmlFor="pesan">
                  Pesan
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  name="pesan"
                  id="pesan"
                  onChange={(e) => setPesan(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="button">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
