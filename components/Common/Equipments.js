import React, { useEffect } from "react";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import getEquipmentsData from "@store/actions/equipments";
import ReactHtmlParser from "react-html-parser";
import { baseURL } from "@config/config";

const Equipments = ({equipmentHeading}) => {
  const dispatch = useDispatch();
  const equipmentsData = useSelector((state) => state.equipments.equipments);
  useEffect(() => {
    dispatch(getEquipmentsData());
  }, []);
  return (
    <div className="section-space-less30 bg-gray2 bg-common-style equipmentsData-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>
         {!!equipmentHeading && equipmentHeading.title}
          </h2>
          {ReactHtmlParser(!!equipmentHeading && equipmentHeading.body)} 
        </div>
      </div>
      <div className="container">
        <div className="row">
          {equipmentsData.map((val, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-xs-12 for-product-deatil">
              <div className="shape-service-layout1">
              <img
                src={baseURL + val.image_uri}
                alt={val.index}
                title={val.name}
              />
              <h3><Link href={`/inventory/search?equipment=${val.tid}`}>{val.name}</Link></h3>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Equipments;
