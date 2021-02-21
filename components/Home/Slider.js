import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getSliderData from "@store/actions/slider";
import { baseURL } from "@config/config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const dispatch = useDispatch();
  const sliderData = useSelector((state) => state.slider.slider);
  useEffect(() => {
    dispatch(getSliderData());
  }, []);
//   console.log(sliderData);
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      {sliderData.map((val, index) => (
        <div key={index}>
          <img
            src={baseURL + val.image_uri}
            alt="slider"
            title={`#slider-direction-${index}`}
          />
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;
