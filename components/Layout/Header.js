import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // dispatch(time({}));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY >= 105);
  }, []);

  return (
    <header>
      <div
        id="header-one"
        className="bg-light light-border header header-layout1 header-fixed"
      >
        <div className="header-top-area1 header-top-bar bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <div className="logo-area">
                  <a href="index.html">
                    <img
                      src="images/logo.png"
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
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="media top-bar-contact-layout4">
                  <div className="media-left media-middle">
                    <i className="icofont icofont-clock-time"></i>
                  </div>
                  <div className="media-body">
                    <p>Opening Hours:</p>
                    <h2 className="media-heading">Mon -Fri: 9.00am - 5.00pm</h2>
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
        <div className="main-menu-area" id="sticker">
          <div className="container">
            <div className="row d-md-flex">
              <div className="col-lg-8 col-md-9">
                <nav id="dropdown"  >
                  <ul className="text-left">
                    <li>
                      <a className="active" href="#">
                        Home
                      </a>
                      <ul>
                        <li>
                          <a href="index.html">Construction 1</a>
                        </li>
                        <li>
                          <a href="index1.html">Construction 2</a>
                        </li>
                        <li>
                          <a href="index2.html">Architectur</a>
                        </li>
                        <li>
                          <a href="index3.html">Architectur Group</a>
                        </li>
                        <li>
                          <a href="index4.html">Interior</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                      <ul>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="services-details.html">Services Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                      <ul>
                        <li>
                          <a href="project1.html">Projects 1</a>
                        </li>
                        <li>
                          <a href="project2.html">Projects 2</a>
                        </li>
                        <li>
                          <a href="project3.html">Projects 3</a>
                        </li>
                        <li>
                          <a href="project4.html">Projects 4</a>
                        </li>
                        <li>
                          <a href="project-details1.html">Project Details 1</a>
                        </li>
                        <li>
                          <a href="project-details2.html">Project Details 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="faqs.html">Faqs</a>
                        </li>
                        <li>
                          <a href="process.html">Process</a>
                        </li>
                        <li>
                          <a href="404-page.html">404 page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Features</a>
                      <ul>
                        <li>
                          <a href="gallery-style.html">Gallery Style</a>
                        </li>
                        <li>
                          <a href="blog-style.html">Blog Style</a>
                        </li>
                        <li>
                          <a href="testimonials.html">Testimonials</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                      <ul>
                        <li>
                          <a href="blog-post1.html">Blog Post 1</a>
                        </li>
                        <li>
                          <a href="blog-post2.html">Blog Post 2</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
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
              <div className="col-lg-2 col-md-1">
                <a href="#" title="quote" className="btn quote-btn-grey">
                  Get A quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
