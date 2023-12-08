import Image from "next/image";
import React from "react";

import { TestimonialMock } from "@/pages/Mockdata/HomePage/Testimonial";
import Slider from "react-slick";

const testimonial = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="section testimonial-2 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2>{TestimonialMock.Heading}</h2>
              <div className="divider mx-auto my-4"></div>
              <p>{TestimonialMock.Description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* <div className="col-lg-12 testimonial-wrap-2"> */}
          <Slider className="col-lg-12" {...settings}>
            {TestimonialMock.Comments.map((comment, index: number) => {
              return (
                <div
                  key={index}
                  className="testimonial-block style-2 mx-2  gray-bg"
                >
                  <i className="icofont-quote-right"></i>

                  <div className="testimonial-thumb">
                    <Image
                      src={comment.DisplayPicture.src}
                      alt={comment.DisplayPicture.alt}
                      className="img-fluid"
                    />
                  </div>

                  <div className="client-info ">
                    <h4>{comment.Compliment}</h4>
                    <span>{comment.Name}</span>
                    <p>{comment.Description}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default testimonial;
