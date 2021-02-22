import Detail from "./Detail";

const Form = () => {
  return (
    <div class="section-space-all">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="section-title-primary">
              <h2>
                Send Us a <span> Message</span>
              </h2>
            </div>
            <div class="contact-form-layout4 text-center">
              <form id="contact-form" novalidate="true">
                <div class="row">
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control top-input"
                        name="name"
                        placeholder="Name"
                        data-error="Name field is required"
                        required=""
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control top-input"
                        name="email"
                        placeholder="Email address"
                        data-error="Email field is required"
                        required=""
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control top-input"
                        name="company"
                        placeholder="Company"
                        data-error="Company field is required"
                        required=""
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control top-input"
                        name="phone"
                        placeholder="Phone"
                        data-error="Phone field is required"
                        required=""
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <textarea
                        class="form-control message-box"
                        name="message"
                        data-error="Message field is required"
                        required=""
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <button
                        class="btn-primary-fill-ghost disabled"
                        type="submit"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-response"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <Detail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
