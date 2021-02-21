import React, { useEffect } from "react";
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
    <div>
      {equipmentsData.map((val, index) => (
        <div key={index}>
          <img
            src={baseURL + val.image_uri}
            alt="equipments"
            title={`equipments-${index}`}
          />
          <h3>{val.name}</h3>
        </div>
      ))}
    </div>
  );
};
export default Equipments;
