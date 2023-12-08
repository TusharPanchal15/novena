import Image from "next/image";
import React from "react";
import searviceCard1 from "../../../public/images/service/service-1.jpg";
import searviceCard2 from "../../../public/images/service/service-2.jpg";
import searviceCard3 from "../../../public/images/service/service-3.jpg";
import searviceCard4 from "../../../public/images/service/service-4.jpg";
import searviceCard8 from "../../../public/images/service/service-8.jpg";
import searviceCard6 from "../../../public/images/service/service-6.jpg";
import { ServiceCardMock } from "@/pages/Mockdata/Services/ServicesCard";

const serviceCards = () => {
  return (
    <section className="section service-2">
      <div className="container">
        <div className="row">
          {ServiceCardMock.map((service, index: number) => {
            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-block mb-5">
                  <Image
                    src={service.CardImg.src}
                    alt={service.CardImg.alt}
                    className="Image-fluid"
                    height={250}
                    width={250}
                  />
                  <div className="content">
                    <h4 className="mt-4 mb-2 title-color">
                      {service.CardTitle}
                    </h4>
                    <p className="mb-4">{service.CardPara}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default serviceCards;
