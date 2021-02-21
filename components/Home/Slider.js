import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getSliderData from "@store/actions//slider";
import { baseURL } from "@config/config";

const Slider = () => {
  const dispatch = useDispatch();
  const sliderData = useSelector((state) => state.slider.slider);
  useEffect(() => {
    dispatch(getSliderData());
  }, []);
  console.log(sliderData);
  return (
    <div className="slider-area layout1 slider-overlay-dark">
      <div className="bend niceties preview-1">
        <div id="ensign-nivoslider-3" className="slides nivoSlider">
          {sliderData.map((val, index) =>  <img src={baseURL + val.image_uri}  alt="slider" title={`#slider-direction-${index}`} /> )}
        </div>
        <div id="slider-direction-1" className="t-cn slider-direction">
            <div className="slider-content s-tb slide-1">
                <div className="container">
                    <div className="title-container text-center">
                        <div className="small-title">START PLANNING YOUR NEW</div>
                        <div className="big-title">DREAM HOUSE WITH US</div>
                        <ul className="slider-btn">
                            <li className="slide-left"><a href="#" className="btn-str-up2">Contact Now</a></li>
                            <li className="slide-right"><a href="#" className="btn-str-up-hc">view project</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
