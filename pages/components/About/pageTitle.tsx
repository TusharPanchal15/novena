import React from "react";

import { PageTitleMock } from "@/pages/Mockdata/About/PageTitle";

const pageTitle = () => {
  return (
    <section className="page-title bg-1">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block text-center">
              <span className="text-white">{PageTitleMock.pageEyeBrow}</span>
              <h1 className="text-capitalize mb-5 text-lg">
                {PageTitleMock.pageTitle}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pageTitle;
