import Equipments from "@components/Common/Equipments";
import { baseURL } from "@config/config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Main = ({ content }) => {
  console.log(content);
  return (
    <>
      <div id="header-area-space"></div>
      <section className="bg-gray2 product-title-banner" id="welcome-section-fluid">
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
                {/* {sliderData.map((val, index) => ( */}
                <div>
                  <img
                    src="/images/653gaZ_3.jpg"
                    alt="slider"
                    title={`#slider-direction`}
                  />
                </div>
                <div>
                  <img
                    src="/images/653gaZ_3.jpg"
                    alt="slider"
                    title={`#slider-direction`}
                  />
                </div>
                <div>
                  <img
                    src="/images/653gaZ_3.jpg"
                    alt="slider"
                    title={`#slider-direction`}
                  />
                </div>
                <div>
                  <img
                    src="/images/653gaZ_3.jpg"
                    alt="slider"
                    title={`#slider-direction`}
                  />
                </div>
                {/* ))} */}
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
                  <div className="pro-det-title"> {!!content && content.title}</div>
                  <div className="pro-det-sub-title">
                    <div className="field field--name-field-description field--type-string field--label-hidden field__item">
                      Lorem ipsum dolor sit{" "}
                    </div>
                  </div>
                  <div className="pro-det-prbtn">
                    <div className="pro-b2-gen-label">Price:  {!!content && content.field_price}</div>
                    <div className="pro-det-prbtn rigth-side-detailp"></div>
                  </div>
                  <div className="pro-det-btnp rigth-side-detailp">
                    <p>
                      <a className="btn btn-str-up2">Make an Offer</a>
                    </p>
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
                    <p>
                      <a
                        className="cboxElement"
                        data-colorbox-inline=".webform-submission-video-chat-form"
                      >
                        Video Chat With This Dealer
                      </a>
                    </p>
                  </div>
                  <div className="pro-rt2-lft-loc rigth-side-detailp">
                    <p>Matchine Location:</p>
                    <p></p>
                    <div className="field field--name-field-machine-location field--type-string-long field--label-hidden field__item">
                    {!!content && content.field_machine_location}
                    </div>
                    <p></p>
                  </div>
                  <div className="pro-send-emailbtn rigth-side-detailp">
                    <p>
                      <a
                        className="cboxElement"
                        data-colorbox-inline=".webform-submission-email-seller-form"
                      >
                        {" "}
                        <i
                          className="fa fa-envelope"
                          aria-hidden="true"
                        ></i>{" "}
                        SEND EMAIL
                      </a>
                    </p>
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
                    {!!content && content.field_hours}
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Condition</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-condition field--type-list-string field--label-hidden field__item">
                      Used
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Stock Number</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-stock-number field--type-string field--label-hidden field__item">
                      7238e6dhweud
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
                      Yes
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Bucket Capacity</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-bucket-capacity field--type-string field--label-hidden field__item">
                      2.4
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
                      -1
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
                      Yes
                    </div>
                  </div>
                </div>
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Heater</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-heater field--type-list-string field--label-hidden field__item">
                      Yes
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
