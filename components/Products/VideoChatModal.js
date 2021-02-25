import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  Menu,
  Dropdown,
  Select,
  notification
} from "antd";
import submitContant from "@store/actions/forms/videochat";

const { TextArea } = Input;
const { Option } = Select;
const VideoChatModal = () => {
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const [policy, setPolicy] = useState("");
  const [service, setService] = useState(" service");
  const [time, setTime] = useState("Time ");
  const [day, setDay] = useState("Date ");
  // lofing define 
  const [loading, setLoading] = useState(false);

  const showVideoModal = () => {
    setIsVideoModalVisible(true);
  };

  const handleOk = () => {
    setIsVideoModalVisible(false);
  };

  const handleCancel = () => {
    setIsVideoModalVisible(false);
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
      recipient_s_email : email,
      message,
      phone,
      postal_code: postalCode,
      policy : policy,
      video_chat_service : service,
      when_would_you_like_to_video_chat_ : time,
      when_would_you_like_to_video_chat_2 : day
    })
      .then((res) => { 
        if(res.code == 200) {
          openNotification();
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setPostalCode("");
          setMessage("");
          setPolicy("");
          setService("");
          setTime("");
          setDay("");
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
      <a onClick={showVideoModal}>
        <i className="fa fa-video-camera" aria-hidden="true"></i> Video Chat
      </a>
      <Modal
        className="modal-filters"
        title="Email this to a friend"
        visible={isVideoModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          layout="vertical"
          onSubmit={handleSubmit}
          className="popup-model-buttons popup-model-inputs"
        >
          <Form.Item label="First Name">
            <Input
              className="form-control top-input"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              className="form-control top-input"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Email" rules={[{ type: "email" }]}>
            <Input
              className="form-control top-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Phone">
            <Input
              className="form-control top-input"
              placeholder="(000) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
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
          <Form.Item label="Video Chat Service">
            <Select
              value={service}
              style={{ width: 120 }}
              onChange={(e) => setService(e)}
            >
              <Option value=" Apple"> Apple</Option>
              <Option value=" Android"> Android</Option>
              <Option value=" Other"> Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="When would you like to video chat?">
            <Select
              style={{ width: 120, marginRight: 5 }}
              value={time}
              onChange={(e) => setTime(e)}
            >
              <Option value="8am-12pm">8am-12pm</Option>
              <Option value="12pm-3pm">12pm-3pm</Option>
              <Option value="3pm-6pm"> 3pm-6pm</Option>
            </Select>
            <Select
              style={{ width: 120 }}
              value={day}
              onChange={(e) => setDay(e)}
            >
              <Option value="Sunday-February 14">Sunday-February 14</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Message">
            <TextArea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
               className=" btn btn-str-up2"
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

export default VideoChatModal;
