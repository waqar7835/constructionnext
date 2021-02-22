import React, { useEffect } from "react";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import getEquipmentsData from "@store/actions/equipments";
import { baseURL } from "@config/config";

const Equipments = () => {
  const dispatch = useDispatch();
  const equipmentsData = useSelector((state) => state.equipments.equipments);
  useEffect(() => {
    dispatch(getEquipmentsData());
  }, []);
  return (
    <div className="section-space-less30 bg-gray2 bg-common-style">
      <div className="container">
        <div className="section-title text-center">
          <h2>
            We Build <span>Your Dream</span>
          </h2>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consec tetur, adipisci velit, sed quia non numquam eius modi
            tempora.
          </p>
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
              <h3><Link href="/inventory/search">{val.name}</Link></h3>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Equipments;
