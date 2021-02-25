import Detail from "./Detail";
import ContactForm from "./ContactForm";

const FormContainer = ({ header }) => {
  return (
    <div className="section-space-all">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="section-title-primary">
              <h2>
                Send Us a <span> Message</span>
              </h2>
            </div>
            <div className="contact-form-layout4 text-center">
              <ContactForm />
            </div>
          </div>
          <div className="col-md-4">
            <Detail header={header} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormContainer;
