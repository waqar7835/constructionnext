import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import submitContant from "@store/actions/forms/fiance";

// antd v3
const Demo = ({ form: { getFieldDecorator, validateFields } }) => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    validateFields((err, values) => {
      if (!err) {
        const {
          first_name,
          last_name,
          email,
          company_name,
          message,
          equipment_price,
          equipment_location,
        } = values;
        submitContant({
          first_name,
          last_name,
          email,
          company_name,
          message,
          equipment_price,
          equipment_location,
        })
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
      message: "Fiance Form",
      description:
        "Thank you for your submission, we will contact you shortly.",
      duration: 5,
    };
    notification.success(args);
  };
  // for error handler
  const openErrorNotification = () => {
    const args = {
      message: "Fiance Form",
      description: "Something went wrong, Submit form again shortly.",
      duration: 0,
    };
    notification.error(args);
  };
  return (
    <Form onSubmit={onSubmit} className="custom-form-final">
      <div className="col-md-6 col-xs-12 form-input-mb30">
        <Form.Item>
          {getFieldDecorator("first_name", {
            rules: [
              {
                required: true,
                message: "Please enter First Name",
              },
            ],
          })(
            <Input
              placeholder="First Name"
              className="form-control top-input"
            />
          )}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12 form-input-mb30">
        <Form.Item>
          {getFieldDecorator("last_name", {
            rules: [{ required: true, message: "Please enter Last Name" }],
          })(
            <Input placeholder="Last Name" className="form-control top-input" />
          )}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12 form-input-mb30">
        <Form.Item>
          {getFieldDecorator("company_name", {
            rules: [{ required: true, message: "Please enter Company Name" }],
          })(
            <Input
              placeholder="Company Name"
              className="form-control top-input"
            />
          )}
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
          {getFieldDecorator("equipment_price", {
            rules: [{ required: true, message: " Enter Equipment price" }],
          })(
            <Input
              placeholder="Equipment Price"
              className="form-control top-input"
            />
          )}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12  form-input-mb30">
        <Form.Item>
          {getFieldDecorator("equipment_location", {
            rules: [{ required: true, message: " Enter Equipment Location" }],
          })(
            <Input
              placeholder="Equipment Location"
              className="form-control top-input"
            />
          )}
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

const WrappedDemo = Form.create()(Demo);
export default WrappedDemo;
