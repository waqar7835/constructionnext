import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import Link from "next/link";
import { Menu, Item } from "antd";

const { SubMenu } = Menu;

const MainMenu = () => {
  return (
    <nav id="dropdown">
      <ul >
        <li>
          <a href="/">Welcome</a>
        </li>

        <li>
          <a href="#">Inventory</a>
          <ul>
            <li>
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
            </li>
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
