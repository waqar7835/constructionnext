
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ReactPlayer from 'react-player/youtube'


const About = () => {
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
            <Modal   visible={isModalVisible}  onCancel={handleCancel} footer={[]} >
              <ReactPlayer url="https://youtu.be/O_C5CN1L3Xo" />
            </Modal>
              <img src="/images/about-4-1.png" alt="img" />
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
                About The <span>Fabricate</span>
              </h2>
              <p>
                <strong>
                  {" "}
                  Fabrication generates objects in Ruby. Fabricators are
                  schematics for your objects, and can be created as needed
                  anywhere in your app or specs.
                </strong>
              </p>
              <ul>
                <li>
                  <a href="#">Alienum phaedrum torquatos necu</a>
                </li>
                <li>
                  <a href="#">Nihil expetendis in mei</a>
                </li>
                <li>
                  <a href="#">Mei an pericula euripidispartem</a>
                </li>
              </ul>
              <p className="off-mobile">
                but has specific support for ActiveRecord Models, Mongoid
                Documents. Sequel Models Sequel Modelsbut has for specific.
                support for ActiveRecord Models, Mongoid Documents, ActiveRecord
                Fabrication can generate anything
              </p>
              <div className="button-for-more text-left">
                <a href="#" title="learn More" className="btn btn-str-up2">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
