import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import React, { useEffect } from "react";
import Link from "next/link";
import { Menu, Item } from "antd";
import getEquipmentsData from "@store/actions/equipments";
import { useDispatch, useSelector } from "react-redux";

const { SubMenu } = Menu;

const MainMenu = () => {
  const dispatch = useDispatch();
  const equipmentsData = useSelector((state) => state.equipments.equipments);
  useEffect(() => {
    dispatch(getEquipmentsData());
  }, []);
  return (
    <nav id="dropdown">
      <ul >
     
        <li>
          <a href={`/inventory/search`}>Inventory</a>
          <ul>
          {equipmentsData.map((val, index) => (
            <li>
              <a href={`/inventory/search?equipment=${val.tid}`}>{val.name}</a>
            </li>
          ))}
            {/* <li>
              <a href="/inventory/search">Construction</a>
            </li>
            <li>
              <a href="/inventory/search">Ag</a>
            </li>
            <li>
              <a href="/inventory/search">Trucks</a>
            </li>
            <li>
              <a href="/inventory/search">Trailers</a>
            </li>
            <li>
              <a href="/inventory/search">Material Handling</a>
            </li>
            <li>
              <a href="/inventory/search">Attachments</a>
            </li> */}
          </ul>
        </li>
        <li>
          <a href="/finance">Financing Available</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
