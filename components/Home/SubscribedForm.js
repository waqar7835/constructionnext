import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import submitContant from "@store/actions/forms/contact";
// antd v3
const Subscribed = ({ form: { getFieldDecorator, validateFields } }) => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    validateFields((err, values) => {
      if (!err) {
        const { email } = values;
        submitContant({ email })
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
        "Thank you for your Subscribed , Stay informed - subscribe to our newsletter.",
      duration: 5,
    };
    notification.success(args);
  };
  // for error handler
  const openErrorNotification = () => {
    const args = {
      message: "Thanks to Subscribe Us",
      description: "Something went wrong, Subscribe again shortly.",
      duration: 0,
    };
    notification.error(args);
  };
  return (
    <Form onSubmit={onSubmit} className="custom-form-final subscribed-from">
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
        <div className="js-form-item-message desp-custom">
          The subscriber's email address.
        </div>
      </div>
      <Form.Item className="col-lg-12 ">
        <Button
          className="btn btn-str-up2"
          type="submit"
          htmlType="submit"
          loading={loading}
          disabled={loading}
        >
          <span>Subscribe </span>
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Form.create()(Subscribed);
