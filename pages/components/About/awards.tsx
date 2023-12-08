import Image from "next/image";
import React from "react";

import { AwardsMock } from "@/pages/Mockdata/About/Awards";

const awards = () => {
  return (
    <section className="section awards">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h2 className="title-color">{AwardsMock.awardsTitle}</h2>
            <div className="divider mt-4 mb-5 mb-lg-0"></div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {AwardsMock.awardsImages.map((awardImg, index: number) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="award-img">
                      <Image
                        src={awardImg.src}
                        alt={awardImg.alt}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default awards;
