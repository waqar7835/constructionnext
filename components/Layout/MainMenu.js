import { Navbar, Nav } from "react-bootstrap";
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
    <nav id="dropdown" >
      <ul class="text-left">
        <li>
          <a class="active" href="#">
            Home
          </a>
          <ul>
            <li>
              <a href="index.html">Construction 1</a>
            </li>
            <li>
              <a href="index1.html">Construction 2</a>
            </li>
            <li>
              <a href="index2.html">Architectur</a>
            </li>
            <li>
              <a href="index3.html">Architectur Group</a>
            </li>
            <li>
              <a href="index4.html">Interior</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="#">Services</a>
          <ul>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="services-details.html">Services Details</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Projects</a>
          <ul>
            <li>
              <a href="project1.html">Projects 1</a>
            </li>
            <li>
              <a href="project2.html">Projects 2</a>
            </li>
            <li>
              <a href="project3.html">Projects 3</a>
            </li>
            <li>
              <a href="project4.html">Projects 4</a>
            </li>
            <li>
              <a href="project-details1.html">Project Details 1</a>
            </li>
            <li>
              <a href="project-details2.html">Project Details 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul>
            <li>
              <a href="team.html">Team</a>
            </li>
            <li>
              <a href="pricing.html">Pricing</a>
            </li>
            <li>
              <a href="faqs.html">Faqs</a>
            </li>
            <li>
              <a href="process.html">Process</a>
            </li>
            <li>
              <a href="404-page.html">404 page</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Features</a>
          <ul>
            <li>
              <a href="gallery-style.html">Gallery Style</a>
            </li>
            <li>
              <a href="blog-style.html">Blog Style</a>
            </li>
            <li>
              <a href="testimonials.html">Testimonials</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Blog</a>
          <ul>
            <li>
              <a href="blog-post1.html">Blog Post 1</a>
            </li>
            <li>
              <a href="blog-post2.html">Blog Post 2</a>
            </li>
            <li>
              <a href="blog-details.html">Blog Details</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
