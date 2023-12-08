import React from "react";
import { DataMock } from "@/pages/Mockdata/HomePage/Data";

const data = () => {
  return (
    <section className="cta-section ">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            {DataMock.DataRow.map((data, index: number) => {
              return (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-stat">
                    <i className={`icofont-${data.iconName}`}></i>
                    <span className="h3">{data.dataNumber}</span>
                    {data.dataSpan}
                    <p>{data.dataTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default data;
