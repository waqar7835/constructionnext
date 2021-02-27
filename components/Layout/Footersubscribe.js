import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import submitContant from "@store/actions/forms/newsletter";

// antd v3
const Footersubscribe = ({ form: { getFieldDecorator, validateFields } }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
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
      message: "Newsletter",
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
    <Form onSubmit={onSubmit}  className="footer-subscribed">
      <div className="input-group">
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
        <Form.Item className=" input-group-btn ">
        <Button
          className="btn btn-str-up2"
          type="submit"
          htmlType="submit"
          loading={loading}
          disabled={loading}
        >
           <i className="icofont icofont-paper-plane"></i>
        </Button>
      </Form.Item>
      </div>
      
    </Form>
  );
};
export default Form.create()(Footersubscribe);
