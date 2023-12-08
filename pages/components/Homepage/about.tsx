import Image from "next/image";
import React from "react";

import { AboutMock } from "@/pages/Mockdata/HomePage/About";
import Link from "next/link";

const about = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="about-img">
              <Image
                src={AboutMock.ImageOne.src}
                alt={AboutMock.ImageOne.alt}
                className="img-fluid"
              />
              <Image
                src={AboutMock.ImageTwo.src}
                alt={AboutMock.ImageTwo.alt}
                className="img-fluid mt-4"
              />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="about-img mt-4 mt-lg-0">
              <Image
                src={AboutMock.ImageThree.src}
                alt={AboutMock.ImageThree.alt}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-content pl-4 mt-4 mt-lg-0">
              <h2 className="title-color">{AboutMock.AboutTitle}</h2>
              <p className="mt-4 mb-5">{AboutMock.AboutPara}</p>

              <Link
                href={AboutMock.AboutCTA.AboutCtaLink}
                className="btn btn-main-2 btn-round-full btn-icon"
              >
                {AboutMock.AboutCTA.AboutCtaTitle}
                <i className="icofont-simple-right ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
