import ReactHtmlParser from "react-html-parser";
const Fineit = ({ finance }) => {
  return (
    <section className="bg-gray2" id="welcome-section-fluid">
      <div className="container">
        <div className="row">
          <div className="region region-welcome-section">
            {/* <div
              id="block-welcome"
              className="section-space-less30 bg-gray2 bg-common-style block block-block-content block-block-content14bbc390-4504-40e5-b7df-9f691c2e1fa2"
            >
              <h2 className="finance-title">{!!finance && finance.title}</h2>

              <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__items">
                {ReactHtmlParser(!!finance && finance.body)}
              </div>
            </div> */}
            <div
              id="block-welcome"
              className="section-space-less30 bg-gray2 bg-common-style block block-block-content block-block-content14bbc390-4504-40e5-b7df-9f691c2e1fa2"
            >
              <h3 className="finance-title">
                Finance with us now. With 0 cash down finance!<span> </span>
                <span style={{ fontSize: "12px", verticalAlign: " middle" }}>
                  O.A.C on approved credit
                </span>
              </h3>

              <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__items">
                <p>
                  <b>Taycor : </b>
                  Get Pre Approval within Minutes!
                </p>
                <p>
                  Taycor Financial has been a partner to the small and
                  medium-sized business community for nearly three decades.
                </p>
                <p>
                  We understand that your business is an extension of you.
                  Whether you’re replacing, expanding, or upgrading your
                  equipment infrastructure, or need working capital, Taycor has
                  a tailored program to fit your needs.
                </p>
                <div style={{ marginTop: 20 }}>
                  <a href="https://www.apply.taycor.com/619" target="_blank">
                    <img src="/images/tay.png" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="simplenews-subscriptions-block-ce69e592-96f2-447a-a58d-3244b9d41b07 simplenews-subscriber-form block block-simplenews block-simplenews-subscription-block"
              id="block-simplenewssubscription-2"
            >
              <form
                action="/"
                method="post"
                id="simplenews-subscriptions-block-ce69e592-96f2-447a-a58d-3244b9d41b07"
                className="financeform"
              >
                {/* <div
                  id="edit-message"
                  className="js-form-item form-item custom-control custom-item js-form-type-item form-type-item js-form-item-message form-item-message form-no-label"
                >
                  To get a finance quote, call us today:
                </div>

                <div
                  style={{ fontSize: 27 }}
                  id="edit-message"
                  className="js-form-item form-item custom-control custom-item js-form-type-item form-type-item js-form-item-message form-item-message form-no-label"
                >
                  267-399-7003
                </div>

                <div
                  id="edit-message"
                  className="js-form-item form-item custom-control custom-item js-form-type-item form-type-item js-form-item-message form-item-message form-no-label"
                >
                  Or simply complete our Quick Contact Request below and we'll
                  call you right away.
                </div> */}

                {/* <form className="finace-fiance-from"      //// to remove for new changes
                  
                >
 
                  <div className="input-group">
                    

                    <input
                      type="email"
                      id="edit-mail-0-value"
                      placeholder="Email us at: inventory-horsham@leaserv.com"
                      className="form-email required form-control"
                      required="required"
                    />
                    <span class="input-group-btn"><button class="btn btn-default" type="submit"><i class="icofont icofont-paper-plane"></i></button></span>
                  </div>
                </form> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fineit;
