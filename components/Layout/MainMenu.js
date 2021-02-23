import { Container , Navbar, Nav ,NavLink } from "react-bootstrap";
import Link from "next/link";
import { Menu  , Item} from 'antd';

const { SubMenu } = Menu;

const MainMenu = () => {
  return (
    <div className="headermenu">

    <Navbar collapseOnSelect>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Welcome</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </div>
    // <nav id="dropdown">
    //   <ul className="text-left">
    //     <li>
    //       <Link href="/">
    //         <a>Welcome</a>
    //       </Link>
    //     </li>

    //     <li>
    //       <a href="#">Inventory</a>
    //       <ul>
    //         <li>
    //           <Link href="/inventory/search">
    //             <a>All Inventory</a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </li>
    //     <li>
    //     <Link href="/">
    //         <a> Financing Available</a>
    //     </Link> 
    //     </li>
       
    //     <li>
    //       <Link href="/contact">
    //         <a>Contact Us</a>
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  
     
  );
};

export default MainMenu;
