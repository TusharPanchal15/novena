import { CtaMock } from "@/pages/Mockdata/Services/Cta";
import Link from "next/link";
import React from "react";

const ctaPage = () => {
  return (
    <section className="section cta-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="cta-content">
              <div className="divider mb-4"></div>
              <h2 className="mb-5 text-lg">
                {CtaMock.ctaTitle}
                <span className="title-color">{CtaMock.ctaSpan}</span>
              </h2>
              <Link
                href={CtaMock.ctaButton.ctaLink}
                className="btn btn-main-2 btn-round-full"
              >
                {CtaMock.ctaButton.ctaText}
                <i className="icofont-simple-right  ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ctaPage;
