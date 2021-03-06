import React, { useState } from "react";
import { Modal, Form, Input, Button, Radio, Checkbox , notification } from "antd";
const { TextArea } = Input;
import submitContant from "@store/actions/forms/emailblock";

const EmailBlock = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [recEmail, setRecEmail] = useState("");
  const [message, setMessage] = useState("");
  const [policy, setPolicy] = useState("");
  // loading state 
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
  function handleSubmit(e) {
    e.preventDefault();
    // loading handler 
    setLoading(true);
    submitContant({
      first_name: firstName,
      last_name: lastName,
      email,
      recipient_s_email : recEmail,
      message : message,
      policy

    })
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
      })
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
          <Form.Item label="Recipient's Email" rules={[{ type: "email" }]}>
            <Input
              className="form-control top-input"
              placeholder="Enter recipient's email address "
              value={recEmail}
              onChange={(e) => setRecEmail(e.target.value)}
              required />
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
            <Button type="primary"  
                    htmlType="submit"  
                    className="btn btn-str-up2"    
                    loading={loading}
                    disabled={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EmailBlock;
