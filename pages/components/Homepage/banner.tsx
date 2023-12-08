import React from "react";
import { BannerMock } from "@/pages/Mockdata/HomePage/Banner";
import Link from "next/link";
// import Image from "next/image";
// import bannerImg from "../../../public/banner.jpg";
const banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xl-7">
            <div className="block">
              <div className="divider mb-3"></div>
              <span className="text-uppercase text-sm letter-spacing ">
                {BannerMock.Banner.eyeBrow}
              </span>
              <h1 className="mb-3 mt-3">{BannerMock.Banner.Title}</h1>

              <p className="mb-4 pr-5">{BannerMock.Banner.Para}</p>
              <div className="btn-container ">
                <Link
                  href={BannerMock.Banner.CTA.ctaLink}
                  target="_blank"
                  className="btn btn-main-2 btn-icon btn-round-full text-white"
                >
                  {BannerMock.Banner.CTA.ctaTitle}
                  <i className="icofont-simple-right ml-2  "></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default banner;
