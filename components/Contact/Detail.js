const Detail = () => {
  return (
    <div>
      <div className="contact-info-layout3 shadow-equal">
        <div className="title-box">
          <h2>Contact details</h2>
        </div>
        <ul className="contact-address">
          <li>
            <i className="bi bi-location-pointer"></i>
            <p>505 North State Street, London, United Kingdom</p>
          </li>
          <li>
            <i className="bi bi-phone"></i>
            <p>9684 32 45 789</p>
          </li>
          <li>
            <i className="bi bi-envelop"></i>
            <p>domain@info.com</p>
          </li>
        </ul>
        <p>Working hours 08:00 - 22:00</p>
        <ul className="contact-social">
          <li>
            <a href="#" title="facebook">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" title="twitter">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" title="fa-google-plus">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" title="dribbble">
              <i className="fa fa-dribbble" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" title="linkedin-square">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" title="pinterest">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;
