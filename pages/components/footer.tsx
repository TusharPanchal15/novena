import Image from "next/image";
import React from "react";
import FooterLogo from "../../public/images/logo.png";

import { FooterMock } from "../Mockdata/Footer";

const footer = () => {
  return (
    <footer className="footer section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <Image
                  src={FooterLogo}
                  alt="Footer Logo"
                  className="img-fluid"
                />
              </div>
              <p>{FooterMock.FooterMainContent.Description}</p>
              <ul className="list-inline footer-socials mt-4">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/themefisher">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/themefisher">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.pinterest.com/themefisher/">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">
                {FooterMock.Department.Heading}
              </h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                {FooterMock.DepartmentList.map((department, index: number) => {
                  return (
                    <li key={index}>
                      <a href={department.Link}>{department.Name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">
                {FooterMock.Support.Heading}
              </h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                {FooterMock.SupprtList.map((support, index: number) => {
                  return (
                    <li key={index}>
                      <a href={support.Link}>{support.Name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">
                {FooterMock.ContactDetails.Heading}
              </h4>
              <div className="divider mb-4"></div>

              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-email mr-3"></i>
                  <span className="h6 mb-0">
                    {FooterMock.ContactDetails.ContactAvailabilty}
                  </span>
                </div>
                <h4 className="mt-2">
                  <a href="tel:+23-345-67890">
                    {FooterMock.ContactDetails.ContactEmail}
                  </a>
                </h4>
              </div>

              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-support mr-3"></i>
                  <span className="h6 mb-0">
                    {FooterMock.ContactDetails.ContactTiming}
                  </span>
                </div>
                <h4 className="mt-2">
                  <a href="tel:+23-345-67890">
                    {FooterMock.ContactDetails.ContactNumber}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-btm py-4 mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="copyright">
                &copy; Copyright Reserved to
                <span className="text-color">Novena</span> by
                <a href="https://themefisher.com/" target="_blank">
                  Themefisher
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="#" className="subscribe">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={
                      FooterMock.FooterEndDetails.NewsletterPlaceholder
                    }
                  />
                  <a
                    href={FooterMock.FooterEndDetails.NewsletterCTALink}
                    className="btn btn-main-2 btn-round-full"
                  >
                    {FooterMock.FooterEndDetails.NewsletterCTAText}
                  </a>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <a className="backtop js-scroll-trigger" href="#top">
                <i className="icofont-long-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
