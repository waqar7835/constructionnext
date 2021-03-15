import React, { useState } from "react";
import {
  Modal,
  Select,
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  Menu,
  Dropdown,
  notification,
} from "antd";
import submitContant from "@store/actions/forms/videochat";

const { Option } = Select;
const { TextArea } = Input;
// antd v3
const VideoChatModalv = ({ form: { getFieldDecorator, validateFields } ,title, id}) => {
  const [loading, setLoading] = useState(false);
  const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
  const product_title = title;
  const product_id = id;
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    validateFields((err, values) => {
      if (!err) {
        const {
          first_name,
          last_name,
          email,
          recipient_s_email,
          message,
          phone,
          postal_code,
          policy,
          video_chat_service,
          time,
          days,
        } = values;
        submitContant({
          first_name,
          last_name,
          email,
          recipient_s_email,
          message,
          phone,
          postal_code,
          policy,
          video_chat_service,
          time,
          days,
          product_title,
          product_id,
        })
          .then((res) => {
            if (res.code == 200) {
              openNotification();
              setLoading(false);
              setIsVideoModalVisible(false);
            } else {
              setLoading(false);
              openErrorNotification();
              setIsVideoModalVisible(true);
              console.log("Submit Error : ", e);
            }
          })
          .catch((e) => {
            console.log("Submit Error : ", e);
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
      message: "Video Chat",
      description:
        "Thank you for your submission, we will contact you shortly.",
      duration: 5,
    };
    notification.success(args);
  };
  // for error handler
  const openErrorNotification = () => {
    const args = {
      message: "Video Chat",
      description: "Something went wrong, Submit form again shortly.",
      duration: 0,
    };
    notification.error(args);
  };
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
  return (
    <>
      <a onClick={showVideoModal}>
        <i className="fa fa-video-camera" aria-hidden="true"></i> Video Chat
      </a>
      <Modal
        className="modal-filters customant-popups video-chat-model"
        title="Email this to a friend"
        visible={isVideoModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form onSubmit={onSubmit} className="custom-form-final">
          <div className="col-md-6 col-xs-12 form-input-mb30">
            <Form.Item>
              {getFieldDecorator("first_name", {
                rules: [
                  {
                    required: true,
                    message: "Enter First Name",
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
                rules: [
                  {
                    required: true,
                    message: "Enter Last Name",
                  },
                ],
              })(
                <Input
                  placeholder="Last Name"
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
              })(
                <Input placeholder="Email" className="form-control top-input" />
              )}
            </Form.Item>
          </div>
          {/* <div className="col-md-6 col-xs-12  form-input-mb30">
            <Form.Item>
              {getFieldDecorator("recipient_s_email", {
                rules: [
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ],
              })(
                <Input
                  placeholder="Recipient Email "
                  className="form-control top-input"
                />
              )}
            </Form.Item>
          </div> */}
          <div className="col-md-6 col-xs-12  form-input-mb30">
            <Form.Item>
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: true,
                    message: "Enter Phone Number",
                  },
                ],
              })(
                <Input placeholder="Phone" className="form-control top-input" />
              )}
            </Form.Item>
          </div>
          <div className="col-md-6 col-xs-12  form-input-mb30">
            <Form.Item>
              {getFieldDecorator("postal_code", {
                rules: [
                  {
                    required: true,
                    message: "Enter Postal Code",
                  },
                ],
              })(
                <Input
                  placeholder="Postal Code"
                  className="form-control top-input"
                />
              )}
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
          <div className="col-md-12  form-input-mb30">
            <label> Video Chat Service </label>
            <Form.Item>
              {getFieldDecorator("video_chat_service", {
                rules: [
                  {
                    required: true,
                    message: "Enter Postal Code",
                  },
                ],
              })(
                <Select style={{ width: 120 }} placeholder="Select Service">
                  <Option value="Apple"> Apple</Option>
                  <Option value="Android"> Android</Option>
                  <Option value="Other"> Other</Option>
                </Select>
              )}
            </Form.Item>
          </div>
          <div className="col-md-12  form-input-mb30 video-chat-timing">
            <label> When would you like to video chat? </label>
            <Form.Item>
              {getFieldDecorator("time", {
                rules: [
                  {
                    required: true,
                    message: "Select Time",
                  },
                ],
              })(
                <Select style={{ width: 120 }} placeholder="Select Time">
                  <Option value="8am-12pm">8am-12pm</Option>
                  <Option value="12pm-3pm">12pm-3pm</Option>
                  <Option value="3pm-6pm"> 3pm-6pm</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("days", {
                rules: [
                  {
                    required: true,
                    message: "Select Day",
                  },
                ],
              })(
                <Select
                  style={{ width: 120, marginLeft: 10 }}
                  placeholder="Select Day"
                >
                  <Option value="Sunday-February 14">Sunday-February 14</Option>
                </Select>
              )}
            </Form.Item>
          </div>
          <div className="col-md-12 form-textarea-mb30">
            <Form.Item>
              {getFieldDecorator("message", {
                rules: [
                  {
                    required: true,
                    message: "Enter Message ",
                  },
                ],
              })(
                <TextArea
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
export default Form.create()(VideoChatModalv);
