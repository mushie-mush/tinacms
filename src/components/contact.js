import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import marketingImg from "./../../images/marketing-gallery.jpg";

function Contact() {
  return (
    <section className={`container pt-0`}>
      <div className={`row contact`}>
        <div className={`col-md-6 contact--details`}>
          <h3>Marketing Gallery Grand Wisata</h3>
          <p>
            Jl. Celebration Boulevard Kav 1, <br />
            Grand Wisata Bekasi, 17510
          </p>
          <div className="tel">
            <FontAwesomeIcon icon={faPhoneAlt} />
            +62 87888 570 800
          </div>
          <div className="mail">
            <FontAwesomeIcon icon={faEnvelope} />
            dhona.grandwisata@gmail.com
          </div>
        </div>
        <div className={`col-md-6 contact--img`}>
          <Image src={marketingImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
