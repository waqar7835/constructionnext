import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainMenu from "./MainMenu";
const Header = () => {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // dispatch(time({}));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 122) {
      setTopPosition(window.scrollY * -1);
    }
    setIsSticky(window.scrollY >= 112);
  }, []);

  return (
    <header
      style={{ top: topPosition }}
      className={`${isSticky ? "header-sticky" : ""}`}
    >
      <div
        id="header-one"
        className="bg-light light-border header header-layout3 header-fixed"
      >
        <div className="header-top-area1 header-top-bar bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <div className="logo-area">
                  <a href="index.html">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="media top-bar-contact-layout4">
                  <div className="media-left media-middle">
                    <i className="icofont icofont-location-arrow"></i>
                  </div>
                  <div className="media-body">
                    <p>505 North State Street, London</p>
                    <h2 className="media-heading"> United Kingdom</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="media top-bar-contact-layout4">
                    <div className="media-left media-middle">
                      <i className="icofont icofont-location-arrow"></i>
                    </div>
                    <div className="media-body">
                      <p>505 North State Street, London</p>
                      <h2 className="media-heading"> United Kingdom</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="media top-bar-contact-layout4">
                    <div className="media-left media-middle">
                      <i className="icofont icofont-clock-time"></i>
                    </div>
                    <div className="media-body">
                      <p>Opening Hours:</p>
                      <h2 className="media-heading">
                        Mon -Fri: 9.00am - 5.00pm
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-12">
                  <div className="media top-bar-contact-layout4">
                    <div className="media-left media-middle">
                      <i className="icofont icofont-phone"></i>
                    </div>
                    <div className="media-body">
                      <p>Call free:</p>
                      <h2 className="media-heading">980-000-2512</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`main-menu-area layout1 blue-bg ${
            isSticky ? "stick" : ""
          }`}
          id="sticker"
        >
          <div className="container">
            <div className="row d-md-flex">
              <div className="col-lg-8 col-md-9">
                <MainMenu />
              </div>
              <div className="col-lg-2 col-md-1">
                <div className="header-search layout2">
                  <form>
                    <input
                      type="text"
                      className="search-input search-form"
                      placeholder="Search...."
                      required=""
                    />
                    <a href="#" id="search-button" className="search-button">
                      <i className="icofont icofont-search"></i>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
