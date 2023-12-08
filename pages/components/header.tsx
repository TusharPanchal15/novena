import Image from "next/image";
import React from "react";
import { HeaderMock } from "../Mockdata/Header";
import Link from "next/link";

const header = () => {
  // console.log(HeaderMock);

  return (
    <header>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item">
                  <a href="mailto:support@gmail.com">
                    <i className="icofont-support-faq mr-2"></i>
                    {HeaderMock.HeaderContact.Email}
                  </a>
                </li>
                <li className="list-inline-item">
                  <i className="icofont-location-pin mr-2"></i>
                  {HeaderMock.HeaderContact.Address}
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                <a href="tel:+23-345-67890">
                  <span>{HeaderMock.HeaderContact.CallNowLabel} </span>
                  <span className="h4">{HeaderMock.HeaderContact.Phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src={HeaderMock.HeaderLogo.src}
              alt="logoImage"
              className="img-fluid"
            />
          </Link>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto ">
              {HeaderMock.HeaderNavigation.map((Navs, index) => {
                

                if (
                  Navs.Name == "Department" ||
                  Navs.Name == "Doctors" ||
                  Navs.Name == "Blog"
                ) {
                  return <></>;
                } else {
                  return (
                    <li key={index} className="nav-item">
                      <Link className="nav-link" href={Navs.Nav}>
                        {Navs.Name}
                      </Link>
                    </li>
                  );
                }
              })}

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="department.html"
                  id="dropdown02"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Department <i className="icofont-thin-down"></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li>
                    <Link className="dropdown-item" href="department.html">
                      Departments
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="department-single.html"
                    >
                      Department Single
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="doctor.html"
                  id="dropdown03"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Doctors <i className="icofont-thin-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li>
                    <a className="dropdown-item" href="doctor.html">
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="doctor-single.html">
                      Doctor Single
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="appoinment.html">
                      Appoinment
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="blog-sidebar.html"
                  id="dropdown05"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog <i className="icofont-thin-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                  <li>
                    <a className="dropdown-item" href="blog-sidebar.html">
                      Blog with Sidebar
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="blog-single.html">
                      Blog Single
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
