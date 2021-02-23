import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
const MainMenu = () => {
  return (
    // <div className="headermenu">

    // <Navbar collapseOnSelect>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="/">Home</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <Nav.Link href="#pricing">Services</Nav.Link>
    //       <Nav.Link href="#pricing">About</Nav.Link>
    //       <Nav.Link href="/contact">Contact</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    // </div>
    // <nav id="dropdown">
    //   <ul className="text-left">
    //     <li>
    //       <Link href="/">
    //         <a>Home</a>
    //       </Link>
    //     </li>

    //     <li>
    //       <a href="#">Products</a>
    //       <ul>
    //         <li>
    //           <Link href="/inventory/search">
    //             <a>All Products</a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </li>

    //     <li>
    //       <Link href="/contact">
    //         <a>Contact</a>
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">Features</a>
        <a className="nav-item nav-link" href="#">Pricing</a>
        <a className="nav-item nav-link disabled" href="#">Disabled</a>
      </div>
    </div>
  </nav>
  );
};

export default MainMenu;
