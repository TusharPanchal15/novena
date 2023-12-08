import Image from "next/image";
import React from "react";
import { AboutMock } from "@/pages/Mockdata/About/About";

const aboutPage = () => {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="title-color">{AboutMock.aboutTitle}</h2>
          </div>
          <div className="col-lg-8">
            <p>{AboutMock.aboutPara}</p>
            <Image
              src={AboutMock.aboutSign.src}
              width={200}
              height={100}
              alt={AboutMock.aboutSign.alt}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutPage;
