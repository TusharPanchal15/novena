import React from "react";
import { FeatureMock } from "@/pages/Mockdata/HomePage/Feature";
import Link from "next/link";

const feature = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="feature-block d-lg-flex">
              <div className="feature-item mb-5 mb-lg-0">
                <div className="feature-icon mb-4">
                  <i
                    className={`icofont-${FeatureMock?.cardOne?.IconPrimary}`}
                  ></i>
                </div>
                <span>{FeatureMock?.cardOne?.TimePrimary}</span>
                <h4 className="mb-3">{FeatureMock?.cardOne?.TitlePrimary}</h4>
                <p className="mb-4">{FeatureMock?.cardOne?.ParaPrimary}</p>
                <Link
                  href={FeatureMock?.cardOne?.CTA?.ctaLink}
                  className="btn btn-main btn-round-full"
                >
                  {FeatureMock?.cardOne?.CTA?.ctaTitle}
                </Link>
              </div>

              <div className="feature-item mb-5 mb-lg-0">
                <div className="feature-icon mb-4">
                  <i
                    className={`icofont-${FeatureMock?.cardTwo?.IconSecondary}`}
                  ></i>
                </div>
                <span>{FeatureMock?.cardTwo?.TimeSecondary}</span>
                <h4 className="mb-3">{FeatureMock?.cardTwo?.TitleSecondary}</h4>
                <ul className="w-hours list-unstyled">
                  {FeatureMock?.cardTwo?.CardList?.map(
                    (timeCard, index: number) => {
                      return (
                        <li
                          key={index}
                          className="d-flex justify-content-between"
                        >
                          {timeCard?.Days}
                          <span>{timeCard?.Timing}</span>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>

              <div className="feature-item mb-5 mb-lg-0">
                <div className="feature-icon mb-4">
                  <i
                    className={`icofont-${FeatureMock?.cardThree?.IconThird}`}
                  ></i>
                </div>
                <span>{FeatureMock?.cardThree?.TimeThird}</span>
                <h4 className="mb-3">{FeatureMock?.cardThree?.TitleThird}</h4>
                <p>{FeatureMock?.cardThree?.ParaThird}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default feature;
