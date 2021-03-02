import React, { useState } from "react";
import { Modal, Form, Input, Button, Radio, Checkbox, Menu, Dropdown,  notification } from "antd";
import submitContant from "@store/actions/forms/emailseller";

// antd v3
const EmailSellerModalv = ({ form: { getFieldDecorator, validateFields } }) => {

  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    validateFields((err, values) => {
      if (!err) {
        const { first_name  ,last_name  , email ,policy,  message, phone, postal_code  } = values;
        submitContant({ first_name  ,last_name  , email ,policy,  message, phone, postal_code })
          .then((res) => {
            if (res.code == 200) {
              openNotification();
              setLoading(false);
              setIsModalVisible(false)
            } else {
              setLoading(false);
              openErrorNotification();
              setIsModalVisible(true)
              // console.log("Submit Error : ", e);
            }
          })
          .catch((e) => {
            setLoading(false);
            console.log("Submit Error : ", e);
            openErrorNotification();
          });
      } else {
        setLoading(false);
      }
    });
  };
  const openNotification = () => {
    const args = {
      message: "Email Seller",
      description:
        "Thank you for your submission, we will contact you shortly.",
      duration: 5,
    };
    notification.success(args);
  };
  // for error handler
  const openErrorNotification = () => {
    const args = {
      message: "Email Seller",
      description: "Something went wrong, Submit form again shortly.",
      duration: 0,
    };
    notification.error(args);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showVideoModal = () => {
    setIsVideoModalVisible(true);
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
  return (
      <>
        <a onClick={showModal}>
        <i className="fa fa-envelope" aria-hidden="true"></i> Email Seller
      </a>
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
            rules: [{ 
                required: true,
                message: 'Enter First Name'    
            }],
          })(<Input placeholder="First Name" className="form-control top-input" />)}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12 form-input-mb30">
        <Form.Item>
          {getFieldDecorator("last_name", {
            rules: [{ 
                required: true,
                message: 'Enter Last Name'   }],
          })(<Input placeholder="Last Name" className="form-control top-input" />)}
        </Form.Item>
      </div>
      <div className="col-md-12 col-xs-12  form-input-mb30">
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
          {getFieldDecorator("phone", {
            rules: [{ 
                required: true,
                message: 'Enter Phone Number'   }],
          })(
            <Input placeholder="Phone" className="form-control top-input" />
          )}
        </Form.Item>
      </div>
      <div className="col-md-6 col-xs-12  form-input-mb30">
        <Form.Item>
          {getFieldDecorator("postal_code", {
            rules: [{ 
                required: true,
                message: 'Enter Postal Code'  }],
          })(<Input placeholder="Postal Code" className="form-control top-input" />)}
        </Form.Item>
      </div>
      <div className="col-md-12  form-input-mb30">
            <Form.Item>
              {getFieldDecorator(
                "policy",
                {}
              )(
                <Checkbox>
                  Click here to acknowledge you understand our Privacy Policy
                </Checkbox>
              )}
            </Form.Item>
          </div>
      <div className="col-md-12 form-textarea-mb30">
        <Form.Item>
          {getFieldDecorator("message", {
            rules: [{ 
                required: true,
                message: 'Enter Message ' 
            }],
          })(
            <Input.TextArea 
              row={6}
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
    </>
  );
};
export default Form.create()(EmailSellerModalv);
