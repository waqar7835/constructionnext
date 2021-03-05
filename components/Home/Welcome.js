import ReactHtmlParser from "react-html-parser";
import SubscribedForm from "./SubscribedForm";

const Welcome = ({ welcome }) => {
  return (
    <section className="bg-gray21 " id="welcome-section-fluid">
      <div className="container">
        <div className="row">
          <div className="region region-welcome-section">
            <div
              id="block-bootstrap-for-drupal-constructioncom-page-title"
              className="block block-core block-page-title-block"
            ></div>
            <div
              id="block-welcome"
              className=" bg-common-style block block-block-content block-block-content14bbc390-4504-40e5-b7df-9f691c2e1fa2"
            >
              <h2>{!!welcome && welcome.title}</h2>

              <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__items">
                {ReactHtmlParser(!!welcome && welcome.body)}
              </div>
            </div>
            
            <div
              className="simplenews-subscriber-form contact-form-layout4"
               
            >
              {/* <SubscribedForm /> */}
              {/* <form
                action="/"
                method="post"
                id="simplenews-subscriptions-block-ce69e592-96f2-447a-a58d-3244b9d41b07"
              >
                <div
                  className="field--type-email field--name-mail field--widget-email-default js-form-wrapper form-wrapper"
                  id="edit-mail-wrapper"
                >
                  <div className="js-form-item form-item custom-control custom-email js-form-type-email form-type-email js-form-item-mail-0-value form-item-mail-0-value">
                    <label className="custom-control-label js-form-required form-required">
                      Email
                    </label>

                    <input
                      type="email"
                      id="edit-mail-0-value"
                      placeholder="Enter email"
                      className="form-email required form-control"
                      required="required"
                    />

                    <div
                      id="edit-mail-0-value--description"
                      className="description"
                    >
                      The subscriber's email address.
                    </div>
                  </div>
                </div>
                <div
                  className="field--type-simplenews-subscription field--name-subscriptions field--widget-simplenews-subscription-select js-form-wrapper form-wrapper"
                  id="edit-subscriptions-wrapper"
                ></div>
                <div
                  id="edit-message"
                  className="js-form-item form-item custom-control custom-item js-form-type-item form-type-item js-form-item-message form-item-message form-no-label"
                >
                  Stay informed - subscribe to our newsletter.
                </div>

                <div
                  className="form-actions js-form-wrapper form-wrapper"
                  id="edit-actions"
                >
                  <a href="#" className="btn btn-str-up2">
                    {" "}
                    Subscribe
                  </a>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
