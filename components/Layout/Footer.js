export default function Footer() {
  return (
    <footer
      className="py-3 py-lg-5 bg-secondary text-white-50 mt-2 mt-md-5 d-print-none"
      id="page-footer"
    >
      <div className="footer-area-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-one-col">
                <div className="footer-logo">
                  <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="footer-newslatter">
                  <h3 className="title-bar-footer">Newsletter</h3>
                  <p>
                    Subscribe to get the latest news, update and offer
                    information.
                  </p>
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          <i className="icofont icofont-paper-plane"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                  <ul className="contact-social">
                    <li>
                      <a href="#" title="facebook">
                        <i className="icofont icofont-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="twitter">
                        <i className="icofont icofont-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="fa-google-plus">
                        <i className="icofont icofont-social-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="dribbble">
                        <i className="icofont icofont-social-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="linkedin-square">
                        <i className="icofont icofont-social-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="pinterest">
                        <i className="icofont icofont-social-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
