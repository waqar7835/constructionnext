
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ReactPlayer from 'react-player/youtube'
import ReactHtmlParser from "react-html-parser";

const About = ({about}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="about-area section-space-less30e">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          
            <div className="video-box-layout1">
            <Modal   title="About The OneSource"   visible={isModalVisible}  onCancel={handleCancel} footer={[]} >
              <ReactPlayer url={!!about[0] && about[0].field_video} width={'100%'} />
            </Modal>
              <img src="/images/about-4-1.png" alt="img" />
              {/* {!!about[0] && about[0].field__video_image_} */}
              {/* <a
                className="primary-icon popup-youtube video-play-button"
                href="https://youtu.be/O_C5CN1L3Xo"
                onClick={showModal} >
                <i className="icofont icofont-play"></i>
              </a> */} 
              <a
                className="primary-icon popup-youtube video-play-button"  onClick={showModal}>
              <i className="icofont icofont-play"></i>
      </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="about-content-layout1">
              <h2>
              {!!about[0] && about[0].title}
              </h2>
              {ReactHtmlParser(!!about[0] && about[0].body)} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
