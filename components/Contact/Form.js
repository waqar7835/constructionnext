import React, { useState } from "react";
import Detail from "./Detail";
import { useDispatch } from "react-redux";
import { Form, Input, Button, notification } from "antd";
import submitContant from "@store/actions/forms/contact";
import WrappedDemo from './contactdu';

const { TextArea } = Input;

const FormD = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    submitContant({ name, address, email, phone, message })
      .then((res) => {
        if(res.code == 200) {
          openNotification();
          setName("");
          setAddress("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
          console.log("Submit Response : ", res)
        } else {
          setLoading(false);
          openErrorNotification();
          // console.log("Submit Error : ", e);
          
        }
       
      })
      .catch((e) => {
        setLoading(false);
        openErrorNotification();
        console.log("Submit Error : ", e);
      })
  }
  const openNotification = () => {
    const args = {
      message: 'Contact Us',
      description:
        'Thank you for your submission, we will contact you shortly.',
      duration: 5,
    };
    notification.success(args);
  };
  // for error handler 
  const openErrorNotification = () => {
    const args = {
      message: 'Contact Us',
      description:
        'Something went wrong, Submit form again shortly.',
      duration: 0,
    };
    notification.error(args);
  };
  return (
    <div className="section-space-all">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="section-title-primary">
              <h2>
                Send Us a <span> Message</span>
              </h2>
            </div>
            <div className="contact-form-layout4 text-center">
              <Form
                id="contact-form"
                name="basic"
                className="custom-form-final"
                onSubmit={handleSubmit}
              >
                <div className="col-md-6 colxs-12 ">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Name"
                      className="form-control top-input"
                      data-error="Name field is required"
                      required=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-xs-12 ">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Email"
                      className="form-control top-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-xs-12 ">
                  <Form.Item
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Address!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Address"
                      className="form-control top-input"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-xs-12 ">
                  <Form.Item
                    name="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone Number!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Phone"
                      className="form-control top-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-12 ">
                  <Form.Item
                    className="col-lg-12 form-group"
                    name="text-area"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone Number!",
                      },
                    ]}
                  >
                    <TextArea
                      style={{ height: 170 }}
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
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
            </div>
          </div>
          <div className="col-md-4">
            <Detail />
          </div>
          <WrappedDemo />
        </div>
      </div>
    </div>
  );
};
export default FormD;
