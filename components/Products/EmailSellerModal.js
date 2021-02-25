import React, { useState } from "react";
import { Modal, Form, Input, Button, Radio, Checkbox, Menu, Dropdown,  notification } from "antd";
import submitContant from "@store/actions/forms/emailseller";


const { TextArea } = Input;

const EmailSellerModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const [policy, setPolicy] = useState("");
  // loading state 
  const [loading, setLoading] = useState(false);

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
  function handleSubmit(e) {
    e.preventDefault();
    // loading handler 
    setLoading(true);
    submitContant({ first_name : firstName,last_name : lastName, email ,policy,  message, phone, postal_code : postalCode })
      .then((res) => {  
      if(res.code == 200) {
        openNotification();
         setFirstName("");
         setLastName("");
         setEmail("");
         setRecEmail("");
         setMessage("");
         setPolicy("");
          setLoading(false);
            console.log("Submit Response : ", res)
      } else {
        setLoading(false);
        openErrorNotification();
        console.log("Submit Error : ", e);
      }
    })
      .catch((e) => { 
        setLoading(false);
        openErrorNotification();
        console.log("Submit Error : ", e);
    });
  }
  // success handler 
  const openNotification = () => {
    const args = {
      message: 'Fiance Information',
      description:
        'Thank you for your submission, we will contact you shortly.',
      duration: 5,
    };
    notification.success(args);
  };
  // error handler 
  const openErrorNotification = () => {
    const args = {
      message: 'Fiance Information',
      description:
        'Something went wrong, Submit form again shortly.',
      duration: 0,
    };
    notification.error(args);
  };

  return (
    <>
      <a onClick={showModal}>
        <i className="fa fa-envelope" aria-hidden="true"></i> Email Seller
      </a>
      <Modal
        className="modal-filters"
        title="Email this to a friend"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form layout="vertical" onSubmit={handleSubmit} className="popup-model-buttons popup-model-inputs">
          <Form.Item label="First Name">
            <Input
              className="form-control top-input"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            required />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
            className="form-control top-input"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            required />
          </Form.Item>
          <Form.Item label="Email" rules={[{ type: "email" }]}>
            <Input
            className="form-control top-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            required />
          </Form.Item>
          <Form.Item label="Phone">
            <Input
            className="form-control top-input"
              placeholder="(000) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            required />
          </Form.Item>
          <Form.Item label="Postal Code">
            <Input
            className="form-control top-input"
              placeholder="Enter your postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Form.Item>

          <Checkbox value={policy} onChange={onChange}>
            Click here to acknowledge you understand our Privacy Policy
          </Checkbox>
          <Form.Item label="Message">
            <TextArea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button className=" btn btn-str-up2"
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    disabled={loading}
                    >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EmailSellerModal;
