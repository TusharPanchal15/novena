import Image from "next/image";
import React from "react";

import Slider from "react-slick";

import { PartnersMock } from "@/pages/Mockdata/HomePage/Partners";

const partners = () => {
  const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="section clients">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2>{PartnersMock.Heading}</h2>
              <div className="divider} mx-auto my-4"></div>
              <p>{PartnersMock.Description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <div className="row clients-logo"> */}
        <Slider className="row" {...settings}>
          {PartnersMock.PartnersList.map((partner, index: number) => {
            return (
              <div key={index} className="col-lg-2">
                <div className="client-thumb">
                  <Image
                    src={partner.Partner.src}
                    width={150}
                    height={150}
                    alt={partner.Partner.alt}
                    className=" h-auto"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* </div> */}
    </section>
  );
};

export default partners;
