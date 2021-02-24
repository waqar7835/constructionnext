import React, { useState } from "react";
import Detail from "./Detail";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import submitContant from "@store/actions/forms/contact";

const { TextArea } = Input;

const FormD = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    submitContant({name, address, email, phone, message})
      .then((res) => console.log("Submit Response : ", res))
      .catch((e) => console.log("Submit Error : ", e));
  }

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
                onSubmit={handleSubmit}
              >
                <Form.Item
                  className="col-md-6 col-sm-6 "
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  className="col-md-6 col-sm-6 "
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
                  />
                </Form.Item>

                <Form.Item
                  className="col-md-6 col-sm-6  "
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
                  />
                </Form.Item>

                <Form.Item
                  className="col-md-6 col-sm-6 "
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

                <Form.Item className="col-lg-12 ">
                  <Button
                    className="btn-primary-fill-ghost"
                    type="submit"
                    htmlType="submit"
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <span style={{ fontSize: 16 }}>SUBMIT REQUEST</span>
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="col-md-4">
            <Detail />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormD;
