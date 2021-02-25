import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainMenu from "./MainMenu";
import Mobilemenu from './Mobilemenu'

import $ from 'jquery';

const Header = ({header}) => {

  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    $(window).on("load resize", function () {
      //Define the maximum height for mobile menu

      var wHeight = $(window).height(),
        mLogoH = $("a.logo-mobile-menu").outerHeight();

      wHeight = wHeight - 50;

      $(".mean-nav > ul").css("height", wHeight + "px");
    });

  /*-------------------------------------
   Jquery Stiky Menu at window Load
   -------------------------------------*/
    $(window).on("scroll", function () {
      var s = $("#sticker"),
        w = $("body"),
        h = s.outerHeight(),
        windowpos = $(window).scrollTop(),
        windowWidth = $(window).width(),
        h3 = s.parent("#header-three"),
        h2 = s.parent("#header-two"),
        h1 = s.parent("#header-one"),
        h1H = h1.find(".header-top-bar").outerHeight(),
        topBar = s.prev(".header-top-bar"),
        tempMenu;
      if (windowWidth > 991) {
        w.css("padding-top", "");
        var topBarH,
          mBottom = 0;
        if (h3.length) {
          topBarH = h = 1;
          mBottom = 0;
        } else if (h2.length) {
          mBottom = h2.find(".main-menu-area").outerHeight();
          topBarH = w.find("#top-slider").outerHeight();
          topBarH = mBottom + topBarH;
        } else if (h1.length) {
          topBarH = topBar.outerHeight();
          if (windowpos <= topBarH) {
            if (h1.hasClass("header-fixed")) {
              h1.css("top", "-" + windowpos + "px");
            }
          }
        }
        if (windowpos >= topBarH) {
          if (h1.length || h3.length) {
            s.addClass("stick");
          }
          if (h1.length) {
            if (h1.hasClass("header-fixed")) {
              h1.css("top", "-" + topBarH + "px");
            } else {
              w.css("padding-top", h + "px");
            }
          } else if (h2.length) {
            h2.addClass("hide-menu");
            tempMenu = h2.find(".main-menu-area").clone();
            tempMenu.addClass("temp-main-menu stick").attr("id", "");
            tempMenu.css({ opacity: 0 });
            if (h2.find(".temp-main-menu.stick").length == 0) {
              h2.append(tempMenu);
              h2.find(".temp-main-menu.stick").animate({ opacity: 1 }, 100);
            }
            if (h2.find(".temp-main-menu.stick").length > 1) {
              h2.find(".temp-main-menu.stick").last().remove();
            }
          }
        } else {
          s.removeClass("stick");
          if (h1.length) {
            w.css("padding-top", 0);
          } else if (h2.length) {
            h2.removeClass("hide-menu");
            h2.find(".stick.temp-main-menu").remove();
          }
        }
      }
    });
    $(window).on("load resize", function () {
      var wHeight = $(window).height(),
        mLogoH = $("a.logo-mobile-menu").outerHeight();
      wHeight = wHeight - 50;
      $(".mean-nav > ul").css("height", wHeight + "px");
      headerNsliderResize();
    });

    function headerNsliderResize() {
      var Hh1 = $("#header-one, #header-three"),
        wWidth = $(window).width(),
        Hh1slider = Hh1.parents("#wrapper").find("#header-area-space"),
        mHeight = Hh1.outerHeight();
      if (wWidth < 992) {
        mHeight = $("body > .mean-bar").outerHeight();
      }
      Hh1slider.css("margin-top", mHeight + "px");
    }

    $("#review-form").on(
      "click",
      ".rate-wrapper .rate .rate-item",
      function () {
        var self = $(this),
          target = self.parent(".rate");

        target.addClass("selected");

        target.find(".rate-item").removeClass("active");

        self.addClass("active");
      }
    );
    $(".navbar-toggle").on("click", function () {
      $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
    });

    $(".close-menu, .click-capture").on("click", function () {
      $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
      $(".menu-list ul").slideUp(300);
    });

    var dropToggle = $(".menu-list > li").has("ul").children("a");
    dropToggle.on("click", function () {
      dropToggle.not(this).closest("li").find("ul").slideUp(200);
      $(this).closest("li").children("ul").slideToggle(200);
      return false;
    });
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
     
      <div id="header-one" className=" header header-layout3 header-fixed">
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
                  {!!header && header.field_address_1}
                    <h2 className="media-heading"> {!!header && header.field_location}</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="media top-bar-contact-layout4">
                  <div className="media-left media-middle">
                    <i className="icofont icofont-clock-time"></i>
                  </div>
                  <div className="media-body">
                    <p>{!!header && header.field_hours_title}</p>
                    <h2 className="media-heading">{!!header && header.field_hours_value}</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-12">
                <div className="media top-bar-contact-layout4">
                  <div className="media-left media-middle">
                    <i className="icofont icofont-phone"></i>
                  </div>
                  <div className="media-body">
                    <p>{!!header && header.field_phone_title}</p>
                    <h2 className="media-heading">{!!header&& header.field_phone_number}</h2>
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
              <div className="col-lg-2 col-md-3 menusearch">
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
              {/* <div className="col-lg-2 col-md-1 get-quote">
                <a href="#" title="quote" className="btn quote-btn-grey">
                  Get A quote
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Mobilemenu />
    </header>
  );
};

export default React.memo(Header);
