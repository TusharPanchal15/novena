import React from "react";
import Slider from "react-slick";

import { TestimonialMock } from "@/pages/Mockdata/About/Testimonial";

const aboutTestimonial = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="section-title">
              <h2 className="mb-4">{TestimonialMock.testimonialTitle}</h2>
              <div className="divider  my-4"></div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          {/* <div className="col-lg-6 testimonial-wrap offset-lg-6"> */}
          <Slider className="col-lg-6 offset-lg-6" {...settings}>
            {TestimonialMock.testimonialSlider.map(
              (testimonial, index: number) => {
                return (
                  <div key={index} className="testimonial-block">
                    <div className="client-info ">
                      <h4>{testimonial.testimonialComment}</h4>
                      <span>{testimonial.testimonialName}</span>
                    </div>
                    <p>{testimonial.testimoinialPara}</p>
                    <i className="icofont-quote-right"></i>
                  </div>
                );
              }
            )}
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default aboutTestimonial;
