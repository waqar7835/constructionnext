import React, { useCallback, useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Head from "next/head";


const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // dispatch(time({}));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  const [isRander , setIsRander] = useState(false);
  useEffect(() => {
    // if(window){}
    setIsRander(!!window);

  }, [])
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
      
      <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link rel="stylesheet" href={`/css/bootstrap.min.css`} />

          <link rel="stylesheet" href={`/css/style.css`} />
          <link rel="stylesheet" href={`/css/icofont.css`} />
          <link rel="stylesheet" href={`/css/font-awesome.min.css`} />
          <link rel="stylesheet" href={`/css/meanmenu.min.css`} />
          {!!isRander && (
            <>
              <script src={`/js/jquery-2.2.4.min.js`} />
              {/* <script src={`/js/jquery.magnific-popup.min.js`} /> */}
              {/* <script src={`/js/bootstrap.min.js`} /> */}
              {/* <script src={`/js/isotope.pkgd.min.js`} /> */}
              {/* <script src={`/js/jquery.countdown.min.js`} /> */}
              {/* <script src={`/js/jquery.counterup.min.js`} /> */}
              {/* <script src={`/js/jquery.equalheights.min.js`} /> */}
              {/* <script src={`/js/jquery.justifiedGallery.min.js`} /> */}
              {/* <script src={`/js/jquery.nav.js`} /> */}
              {/* <script src={`/js/jquery.scrollUp.min.js`} /> */}
              {/* <script src={`/js/modernizr-2.8.3.min.js`} />
              <script src={`/js/plugins.js`} /> */}
              {/* <script src={`/js/validator.min.js`} /> */}
              {/* <script src={`/js/vc-gallery.js`} /> */}
              {/* <script src={`/js/waypoints.min.js`} /> */}
              {/* <script src={`/js/wow.min.js`} /> */}
              <script src={`/js/jquery.meanmenu.min.js`} />
              <script src={`/js/main.js`} />
            </>
          )}
        </Head>
      <div
        id="header-one"
        className=" header header-layout3 header-fixed"
      >
        <div className="header-top-area1 header-top-bar bg-grey">
          <div className="container">
            <div className="row">
              {/* logo section  */}
              <div className="col-lg-4 col-md-3 col-sm-12">
                <div className="logo-area">
                  <a href="/">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
              {/* logo section  */}
              
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
              <div className="col-lg-2 col-md-1 get-quote">
                  <a href="#" title="quote" className="btn quote-btn-grey">Get A quote</a>
              </div>
            </div>
          </div>
        </div>
        </div>
       
    </header>
  );
};

export default React.memo(Header);
