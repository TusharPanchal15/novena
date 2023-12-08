import React from "react";

import { ServicesMock } from "@/pages/Mockdata/HomePage/Services";

const services = () => {
  return (
    <section className="section service gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <h2>{ServicesMock.ServiceTitle}</h2>
              <div className="divider mx-auto my-4"></div>
              <p>{ServicesMock.ServicePara}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {ServicesMock.ServiceCards.map((service, index: number) => {
            return (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className={`icofont-${service.serviceIcon} text-lg`}></i>
                    <h4 className="mt-3 mb-3">{service.serviceTitle}</h4>
                  </div>

                  <div className="content">
                    <p className="mb-4">{service.servicePara}</p>
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

export default services;
