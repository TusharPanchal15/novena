import Image from "next/image";
import React from "react";

import { FeatureMock } from "@/pages/Mockdata/About/Feature";
const featurePage = () => {
  return (
    <section className="fetaure-page ">
      <div className="container">
        <div className="row">
          {FeatureMock.featureData.map((feature, index: number) => {
            return (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="about-block-item mb-5 mb-lg-0">
                  <Image
                    src={feature.featureImg.src}
                    alt={feature.featureImg.alt}
                    className="Image-fluid w-100"
                  />
                  <h4 className="mt-3">{feature.featureTitle}</h4>
                  <p>{feature.featurePara}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default featurePage;
