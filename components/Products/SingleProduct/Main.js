import React, { useEffect, useState } from "react";
import Equipments from "@components/Common/Equipments";
import { baseURL } from "@config/config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductEmail from "./ProductEmail";
import ProductVideoChat from "./ProductVideoChat";
import ProductDetailSellerMail from "./ProductDetailSellerMail";
const Main = ({ content }) => {
  console.log({ content });
  const [images, setContentImages] = useState([]);

  const handlePrint = () => {
    var prtContent = document.getElementById("listing-content-results");
    var WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  useEffect(() => {
    if (
      !!content &&
      !!content.field_image &&
      content.field_image.trim() != ""
    ) {
      const images = content.field_image.split("====!");
      setContentImages(images);
    }
  }, [content]);
  // console.log(content);
  return (
    <>
      <div id="header-area-space"></div>
      <section
        className="bg-gray2 product-title-banner"
        id="welcome-section-fluid"
      >
        <div className="container">
          <div className="row">
            <h1 className="page-title">
              <span className="field field--name-title field--type-string field--label-hidden">
                {!!content && content.title}
              </span>
            </h1>
          </div>
        </div>
      </section>
      <div className="product-detail-section">
        <Equipments />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <Carousel infiniteLoop={true}>
                {images.map((val, index) => (
                  <div>
                    <img
                      src={baseURL + val}
                      alt="slider"
                      title={`#slider-direction`}
                    />
                  </div>
                  // <div>
                  //   <img
                  //     src="/images/653gaZ_3.jpg"
                  //     alt="slider"
                  //     title={`#slider-direction`}
                  //   />
                  // </div>
                  // <div>
                  //   <img
                  //     src="/images/653gaZ_3.jpg"
                  //     alt="slider"
                  //     title={`#slider-direction`}
                  //   />
                  // </div>
                  // <div>
                  //   <img
                  //     src="/images/653gaZ_3.jpg"
                  //     alt="slider"
                  //     title={`#slider-direction`}
                  //   />
                  // </div>
                ))}
              </Carousel>
            </div>
            {/* product right side start  */}
            <div className="col-lg-4 col-md-4">
              <div className="project-info-layout1 shadow-equal">
                <div className="info-top">
                  {/* {sliderData.map((val, index) => (
                    <div key={index}>
                      <img
                        src={baseURL + val.image_uri}
                        alt="slider"
                        title={`#slider-direction-${index}`}
                      />
                    </div>
                  ))} */}
                  <div className="pro-det-title">
                    {" "}
                    {!!content && content.title}
                  </div>
                  <div className="pro-det-sub-title">
                    <div className="field field--name-field-description ">
                      {!!content && content.field_description}
                    </div>
                  </div>
                  <div className="pro-det-prbtn">
                    <div className="pro-b2-gen-label">
                      Price: {!!content && content.field_price}{" "}
                    </div>
                    {/* <div className="pro-det-prbtn rigth-side-detailp">
                     
                    </div> */}
                  </div>
                  <div className="pro-det-btnp rigth-side-detailp">
                    <ProductDetailSellerMail />
                  </div>
                  <div className="pro-b2-purchase-value"></div>
                  <div className="pro-rt2-lft-title rigth-side-detailp">
                    <p>
                      <a href="#">Lorem ipsum dolor sit </a>
                    </p>
                  </div>
                  <div className="pro-rt2-lft-subt rigth-side-detailp">
                    <p>Lorem, ipsum dolor site</p>
                  </div>
                  <div className="pro-rt2-lft-phon rigth-side-detailp">
                    <p>
                      <span>Phone: </span> {!!content && content.field_phone}
                    </p>
                  </div>
                  <div className="pro-rt2-lft-video rigth-side-detailp">
                    <ProductVideoChat />
                  </div>
                  <div className="pro-rt2-lft-loc rigth-side-detailp">
                    <p>Machine Location:</p>
                    <p></p>
                    <div className="field field--name-field-machine-location field--type-string-long field--label-hidden field__item">
                      {!!content && content.field_machine_location}
                    </div>
                    <p></p>
                  </div>
                  <div className="pro-send-emailbtn rigth-side-detailp">
                    <ProductEmail />
                  </div>
                </div>
              </div>
            </div>
            {/* product right side end  */}
            {/* product description start  */}
            <div className="product-detail-block2">
              <div className="pro-b2-general showMe">
                <h2>General</h2>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Hours</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-hours field--type-string field--label-hidden field__item">
                      {!!content && content.field_hours}
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Serial Number</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-serial-numbers field--type-string field--label-hidden field__item">
                      {!!content && content.field_serial_numbers}
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Condition</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-condition field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_condition}
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Stock Number</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-stock-number field--type-string field--label-hidden field__item">
                      {!!content && content.field_stock_number}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-b2-general showMe">
                <h2>Attachments</h2>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Bucket</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-bucket field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_bucket}
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Bucket Capacity</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-bucket-capacity field--type-string field--label-hidden field__item">
                      {!!content && content.field_bucket_capacity}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-b2-general showMe">
                <h2>Exterior</h2>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Number of Fenders</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-number-of-fenders field--type-integer field--label-hidden field__item">
                      {!!content && content.field_number_of_fenders}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-b2-general showMe">
                <h2>Interior</h2>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">A/C</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_a_c}
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Heater</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-heater field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_heater}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-commercial-financial"></div>
            </div>
            {/* product description end  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
