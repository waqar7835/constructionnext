import React, { useState } from "react";
import { Modal, Form, Input, Button, Radio, Checkbox , notification } from "antd";
const { TextArea } = Input;
import submitContant from "@store/actions/forms/emailblock";

// antd v3
const EmailBlockv = ({ form: { getFieldDecorator, validateFields } }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    setPolicy(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    validateFields((err, values) => {
      if (!err) {
        const { first_name , last_name ,  email, recipient_s_email , message , policy } = values;
        submitContant({ first_name , last_name ,  email, recipient_s_email , message , policy })
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
      message: "Email Friend",
      description:
        "Thank you for your submission, we will contact you shortly.",
      duration: 5,
    };
    notification.success(args);
  };
  // for error handler
  const openErrorNotification = () => {
    const args = {
      message: "Email Friend",
      description: "Something went wrong, Submit form again shortly.",
      duration: 0,
    };
    notification.error(args);
  };
  return (
    <div className="email-block">
           <p>
        <a onClick={showModal}>
          {" "}
          <i className="fa fa-envelope" aria-hidden="true"></i>Email
        </a>
      </p>
      <p>
        <a>
          {" "}
          <i className="fa fa-print" aria-hidden="true"></i> Print
        </a>
      </p>
      <Modal
        className="modal-filters customant-popups"
        title="Email this to a friend"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
    <Form onSubmit={onSubmit} className="custom-form-final">
      <div className="col-md-6 col-xs-12 form-input-mb30">
        <Form.Item>
          {getFieldDecorator("first_name", {
            rules: [{ required: true }],
          })(<Input placeholder="First Name" className="form-control top-input" />)}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12 form-input-mb30">
        <Form.Item>
          {getFieldDecorator("last_name", {
            rules: [{ required: true }],
          })(<Input placeholder="Last Name" className="form-control top-input" />)}
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
          {getFieldDecorator("recipient_s_email", {
            rules: [
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ],
          })(<Input placeholder="Recipient's Email" className="form-control top-input" />)}
        </Form.Item>
      </div>
      <div className="col-md-12  form-input-mb30">
      <Form.Item>
          {getFieldDecorator('policy', {
          
          })(<Checkbox>Click here to acknowledge you understand our Privacy Policy</Checkbox>)}
          
          
          
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
    </Modal>
    </div>
  );
};
export default Form.create()(EmailBlockv);
