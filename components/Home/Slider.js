import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getSliderData from "@store/actions//slider";
import { baseURL } from "@config/config";

const Slider = () => {
    const dispatch = useDispatch();
    const sliderData = useSelector((state) => state.slider);
    useEffect(() => {
        dispatch(getSliderData()); 
    }, []);
    console.log(sliderData)
    return (
        <div>
            
        </div>
    )
}
export default Slider;