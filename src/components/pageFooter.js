import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import client from "tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

function PageFooter() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const contactData = await client.request({
        query: `query global {
        global(relativePath: "Global.mdx") {
          contact {
            address
            addressMarketingGallery
            phone
            email
            map {
              latitude
              longitude
              zoom
            }
            image
          }
        }
      }`,
      });

      setData(contactData.data.global.contact);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <section className={`container pt-0`}>
      <div className={`row page-footer`}>
        <div className={`col-md-6 page-footer--details`}>
          <h3>Marketing Gallery Grand Wisata</h3>
          <TinaMarkdown content={data?.addressMarketingGallery} />
          <div className="tel">
            <FontAwesomeIcon icon={faPhoneAlt} />
            {data?.phone}
          </div>
          <div className="mail">
            <FontAwesomeIcon icon={faEnvelope} />
            {data?.email}
          </div>
        </div>
        <div className={`col-md-6 page-footer--img`}>
          <img src={data?.image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default PageFooter;
