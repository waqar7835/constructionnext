import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import submitContant from "@store/actions/forms/contact";

// antd v3
const ContactForm = ({ form: { getFieldDecorator, validateFields } }) => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    validateFields((err, values) => {
      if (!err) {
        const { name, address, email, phone, message } = values;
        submitContant({ name, address, email, phone, message })
          .then((res) => {
            if (res.code == 200) {
              openNotification();
              setLoading(false);
            } else {
              setLoading(false);
              openErrorNotification();
              // console.log("Submit Error : ", e);
            }
          })
          .catch((e) => {
            setLoading(false);
            openErrorNotification();
          });
      } else {
        setLoading(false);
      }
    });
  };
  const openNotification = () => {
    const args = {
      message: "Contact Us",
      description:
        "Thank you for your submission, we will contact you shortly.",
      duration: 5,
    };
    notification.success(args);
  };
  // for error handler
  const openErrorNotification = () => {
    const args = {
      message: "Contact Us",
      description: "Something went wrong, Submit form again shortly.",
      duration: 0,
    };
    notification.error(args);
  };
  return (
    <Form onSubmit={onSubmit} className="custom-form-final">
      <div className="col-md-6 col-xs-12 form-input-mb30">
        <Form.Item>
          {getFieldDecorator("name", {
            rules: [{ required: true }],
          })(<Input placeholder="Name" className="form-control top-input" />)}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12  form-input-mb30">
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ],
          })(<Input placeholder="Email" className="form-control top-input" />)}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12  form-input-mb30">
        <Form.Item>
          {getFieldDecorator("address", {
            rules: [{ required: true }],
          })(
            <Input placeholder="Address" className="form-control top-input" />
          )}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12  form-input-mb30">
        <Form.Item>
          {getFieldDecorator("phone", {
            rules: [{ required: true }],
          })(<Input placeholder="Phone" className="form-control top-input" />)}
        </Form.Item>
      </div>
      <div className="col-md-12 form-textarea-mb30">
        <Form.Item>
          {getFieldDecorator("message", {
            rules: [{ required: true }],
          })(
            <Input.TextArea
              placeholder="Message"
              className="form-control message-box"
            />
          )}
        </Form.Item>
      </div>
      <Form.Item className="col-lg-12 ">
        <Button
          className="btn btn-str-up2"
          type="submit"
          htmlType="submit"
          loading={loading}
          disabled={loading}
        >
          <span>SUBMIT </span>
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Form.create()(ContactForm);
