import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import Equipments from "@components/Common/Equipments";
import { baseURL } from "@config/config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductEmail from "./ProductEmail";
import ProductVideoChat from "./ProductVideoChat";
import ProductDetailSellerMail from "./ProductDetailSellerMail";
import ReactHtmlParser from "react-html-parser";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
//  import 'bootstrap-css-only/css/bootstrap.min.css';
//   import 'mdbreact/dist/css/mdb.css';
// import { MDBInput } from "mdbreact";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
  
} from "react-share";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  FacebookMessengerShareButton,
  WeiboShareButton
} from "react-share";
const Main = ({ content }) => {
  console.log({ content });
  const [images, setContentImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [socialIcon, setSocialIcon] = useState(false);

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
  //  console.log(content);

  const showModal = () => {
    setIsModalVisible(true);
  };
 
  const showSocialIcons = () => {
setSocialIcon(true);
  }
  const handleCancel = () => {
    setSocialIcon(false);
  };
//console.log("images=>",images);

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
              <span className="image-zommer">
                      <i className="fa fa-search-plus " onClick={showModal} aria-hidden="true"></i>
                </span>
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
                      Price: ${" "}{!!content && content.field_price}{" "}
                    </div>
                    {/* <div className="pro-det-prbtn rigth-side-detailp">
                     
                    </div> */}
                  </div>
                  <div className="pro-det-btnp rigth-side-detailp">
                    <ProductDetailSellerMail />
                  </div>
                  <div className="pro-b2-purchase-value"></div>
                  {/* <div className="pro-rt2-lft-title rigth-side-detailp">
                    <p>
                      <a href="#">Lorem ipsum dolor sit </a>
                    </p>
                  </div> */}
                  {/* <div className="pro-rt2-lft-subt rigth-side-detailp">
                    <p>Lorem, ipsum dolor site</p>
                  </div> */}
                  {/* <div className="pro-rt2-lft-phon rigth-side-detailp">
                    <p>
                      <span>Phone: </span> {!!content && content.field_phone}
                    </p>
                  </div> */}
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
                <div className="social-icons">
                <p>Share On:</p>
              <TwitterShareButton url={"https://twitter.com/"}><TwitterIcon size={32} round={true} /></TwitterShareButton>
              <FacebookShareButton url={"https://www.facebook.com/"}><FacebookIcon size={32} round={true}/></FacebookShareButton>
              <LinkedinShareButton url={"www.linkedin.com"}> <LinkedinIcon size={32} round={true}/></LinkedinShareButton>
              <a className="new-social-add" onClick={showSocialIcons}>+</a>
              </div>
              </div>             
            </div>
            {/* product right side end  */}
            {/* product description start  */}
            
            <div className="product-detail-block2">
            <div className="body-description">
              <h3>Description</h3>
              {ReactHtmlParser(!!content && content.body)} 
            </div>
              <div className="pro-b2-general showMe">
                <h2>General</h2>
                {!!content && content.field_hours && (
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Hours</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-hours field--type-string field--label-hidden field__item">
                      {!!content && content.field_hours}
                    </div>
                  </div>
                </div>
                )}
                {!!content && content.field_serial_numbers && (
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Serial Number</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-serial-numbers field--type-string field--label-hidden field__item">
                      {!!content && content.field_serial_numbers}
                    </div>
                  </div>
                </div>
                )}
                {!!content && content.field_select_equipment && (
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Equipment</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-serial-numbers field--type-string field--label-hidden field__item">
                      {!!content && content.field_select_equipment}
                    </div>
                  </div>
                </div>
                )}
                 {!!content && content.field_equipment_category && (
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Category</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-serial-numbers field--type-string field--label-hidden field__item">
                      {!!content && content.field_equipment_category}
                    </div>
                  </div>
                </div>
                 )}
                {!!content && content.field_category && (
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Manufacturer</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-serial-numbers field--type-string field--label-hidden field__item">
                      {!!content && content.field_category}
                    </div>
                  </div>
                </div>
                )}
                  {!!content && content.field_condition && (
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Condition</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-condition field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_condition}
                    </div>
                  </div>
                </div>
                  )}
                  {!!content && content.field_stock_number && (  
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Stock Number</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-stock-number field--type-string field--label-hidden field__item">
                      {!!content && content.field_stock_number}
                    </div>
                  </div>
                </div>
                  )}
                 {!!content && content.field_modal && (  
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Model</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-stock-number field--type-string field--label-hidden field__item">
                      {!!content && content.field_modal}
                    </div>
                  </div>
                </div>
                  )}
                  {!!content && content.field_category && (  
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Manufacturer</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-stock-number field--type-string field--label-hidden field__item">
                      {!!content && content.field_category}
                    </div>
                  </div>
                </div>
                  )}
                 {!!content && content.field_year && (  
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Year</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-stock-number field--type-string field--label-hidden field__item">
                      {!!content && content.field_year}
                    </div>
                  </div>
                </div>
                  )}
              </div>
              <div className="pro-b2-general showMe">
              {(!!content && content.field_bucket || content.field_bucket_capacity || content.field_bucket_type )?
                <h2>Attachments</h2>
                :" "
              }
                {!!content && content.field_bucket && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Bucket</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-bucket field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_bucket}
                    </div>
                  </div>
                </div>
                )}
               {!!content && content.field_bucket_type && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Bucket Type</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-bucket field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_bucket_type}
                    </div>
                  </div>
                </div>
                )}
                {!!content && content.field_bucket_capacity && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Bucket Capacity</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-bucket-capacity field--type-string field--label-hidden field__item">
                      {!!content && content.field_bucket_capacity}
                    </div>
                  </div>
                </div>
                )}
              </div>
              <div className="pro-b2-general showMe">
              {(!!content && content.field_number_of_fenders || content.field_rops)?
                <h2>Exterior</h2>
                :" "
              }
                {!!content && content.field_number_of_fenders && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Number of Fenders</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-number-of-fenders field--type-integer field--label-hidden field__item">
                      {!!content && content.field_number_of_fenders}
                    </div>
                  </div>
                </div>
                )}
               {!!content && content.field_rops && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">ROPS</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-number-of-fenders field--type-integer field--label-hidden field__item">
                      {!!content && content.field_rops}
                    </div>
                  </div>
                </div>
                )}
              </div>
              <div className="pro-b2-general showMe">
                {(!!content && content.field_a_c || content.field_heater || content.field_keyless_start || content.field_seat_material)?
                   <h2>Interior</h2>:" "
              }
               {!!content && content.field_keyless_start && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Keyless Start</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_keyless_start}
                    </div>
                  </div>
                </div>
                )}
                 {!!content && content.field_seat_material && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Seat Material</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_seat_material}
                    </div>
                  </div>
                </div>
                )}
               
                {!!content && content.field_a_c && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">A/C</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_a_c}
                    </div>
                  </div>
                </div>
                )}
                 {!!content && content.field_heater && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Heater</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-heater field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_heater}
                    </div>
                  </div>
                </div>
                 )}
              </div>
              <div className="pro-b2-general showMe">
                {(!!content && content.field_track_type )?
                   <h2>Chassis</h2>:" "
              }
               {!!content && content.field_track_type && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Track Type</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_track_type}
                    </div>
                  </div>
                </div>
                )}                
              </div>
              <div className="pro-b2-general showMe">
                {(!!content && content.field_operating_weight )?
                   <h2>Category Specific</h2>:" "
              }
               {!!content && content.field_operating_weight && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Operating Weight</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_operating_weight}
                    </div>
                  </div>
                </div>
                )}                
              </div>
              <div className="pro-b2-general showMe">
                {(!!content && content.field_max_travel_speed )?
                   <h2>Powertrain</h2>:" "
              }
               {!!content && content.field_max_travel_speed && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Max Travel Speed</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_max_travel_speed}
                    </div>
                  </div>
                </div>
                )}                
              </div>
              <div className="pro-b2-general showMe">
                {(!!content && content.field_horsepower || content.field_engine_manufacturer || content.field_engine_model || content.field_engine_tier || content.field_engine_turbo)?
                   <h2>Engine</h2>:" "
              }
               {!!content && content.field_horsepower && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Horsepower</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_horsepower}
                    </div>
                  </div>
                </div>
                )}     
               {!!content && content.field_engine_manufacturer && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Engine Manufacturer</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_engine_manufacturer}
                    </div>
                  </div>
                </div>
                )}       
               {!!content && content.field_engine_model && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Engine Model</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_engine_model}
                    </div>
                  </div>
                </div>
                )}   
                  {!!content && content.field_engine_tier && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Engine Tier</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_engine_tier}
                    </div>
                  </div>
                </div>
                )}  
                {!!content && content.field_engine_turbo && ( 
                <div className="pro-b2-gen-flex">
                  <div className="pro-b2-gen-label">Engine Turbo</div>
                  <div className="pro-b2-gen-value">
                    <div className="field field--name-field-a-c field--type-list-string field--label-hidden field__item">
                      {!!content && content.field_engine_turbo}
                    </div>
                  </div>
                </div>
                )}           
              </div>
              <div className="pro-commercial-financial"></div>
            </div>
            {/* product description end  */}
          </div>
        </div>
      </div>
    
       {isModalVisible && (
              <Lightbox
                mainSrc={baseURL + images[photoIndex]}
                nextSrc={
                  baseURL + images[(photoIndex + 1) % images.length]
                }
                prevSrc={
                  baseURL + images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => setIsModalVisible(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(

                    (photoIndex + images.length - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}
        <Modal
        className="modal-filters customant-popups new-social-popups"      
        visible={socialIcon}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="container1">
          <h2> Share </h2>
          <p>
            <span className="field field--name-title field--type-string field--label-hidden">
                {!!content && content.title}
              </span>
            </p>
            <input type="text" placeholder="Find a service" />
            <span className="search-icon-popup"><i className="fa fa-search"></i></span>
           
            <div className="social-icons-div">
              <div className="social-icon">
            <EmailShareButton >
               <EmailIcon size={32} round={true} openShareDialogOnClick/>              
            </EmailShareButton>
            {/* <p> Email</p> */}
            </div>
            <div className="social-icon">
            <TwitterShareButton url={"https://twitter.com/"}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            </div>
            <div className="social-icon">
              <FacebookShareButton url={"https://www.facebook.com/"}>
                <FacebookIcon size={32} round={true}/>
              </FacebookShareButton>
            </div>
            <div className="social-icon">
              <LinkedinShareButton url={"www.linkedin.com"}> 
                <LinkedinIcon size={32} round={true}/>
              </LinkedinShareButton>
            </div>          
          <div className="social-icon">
            <FacebookMessengerShareButton>
              <FacebookMessengerIcon size={32} round={true}/>
            </FacebookMessengerShareButton>
          </div>
  
  {/* <HatenaShareButton><HatenaIcon size={32} round={true}/></HatenaShareButton>
  <InstapaperShareButton><InstapaperIcon size={32} round={true}/></InstapaperShareButton>
  <LineShareButton><LineIcon size={32} round={true}/></LineShareButton>
  <LinkedinShareButton><LinkedinIcon size={32} round={true}/></LinkedinShareButton>
  <LivejournalShareButton><LivejournalIcon size={32} round={true}/></LivejournalShareButton>
  <MailruShareButton><MailruIcon size={32} round={true}/></MailruShareButton>
  <OKShareButton><OKIcon size={32} round={true}/></OKShareButton>
  <PinterestShareButton><PinterestIcon size={32} round={true}/></PinterestShareButton>
  <PocketShareButton><PocketIcon size={32} round={true}/></PocketShareButton>
 <RedditShareButton><RedditIcon size={32} round={true}/></RedditShareButton> 
 <TelegramShareButton> <TelegramIcon size={32} round={true}/></TelegramShareButton>
  <TumblrShareButton><TumblrIcon size={32} round={true} size={32} round={true}/></TumblrShareButton>
 <TwitterShareButton> <TwitterIcon size={32} round={true}/></TwitterShareButton>
 <ViberShareButton><ViberIcon size={32} round={true}/></ViberShareButton> 
 <VKShareButton> <VKIcon size={32} round={true}/></VKShareButton>
  <WeiboShareButton><WeiboIcon size={32} round={true}/></WeiboShareButton>
  <WhatsappShareButton><WhatsappIcon size={32} round={true}/></WhatsappShareButton>
  <WorkplaceShareButton><WorkplaceIcon size={32} round={true}/></WorkplaceShareButton> */}
            </div>

        </div>

      </Modal>
      

    </>
  );
};

export default Main;
