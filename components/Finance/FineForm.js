import { Form, Input, Button } from "antd";
import React, { useState } from 'react';

const Fine = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(' ');
  const [message, setMessage] = useState(' ');
  const [company, setCompany] = useState(' ');
  const [price, setPrice] = useState(' ');
  const [location, setLocation] = useState(' ');
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function handleSubmit(e){
    e.preventDefault();
    console.log("working form submit",firstName, lastName, email, price, company, message, location);

  }

  return (
    <div class="section-space-all">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="contact-form-layout4 text-center">
              <Form
                id="contact-form"
                novalidate="true"
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onSubmit={handleSubmit}
              >
                <Form.Item
                  class="col-md-6 col-sm-6 "
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="First Name"
                    class="form-control top-input"
                    data-error="Name field is required"
                    required=""
                    value={firstName} onChange={(e)=> setFirstName(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  class="col-md-6 col-sm-6 "
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Last Name"
                    class="form-control top-input"
                    data-error="Name field is required"
                    required=""
                    value={lastName} onChange={(e)=> setLastName(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  class="col-md-6 col-sm-6 "
                  name="company"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Company Name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Comapny Name"
                    class="form-control top-input"
                    data-error="company field is required"
                    required=""
                    value={company} onChange={(e)=> setCompany(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  class="col-md-6 col-sm-6 "
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
                    class="form-control top-input"
                    data-error="email field is required"
                    required=""
                    value={email} onChange={(e)=> setEmail(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  class="col-md-6 col-sm-6 "
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Please input price!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Equipment Price"
                    class="form-control top-input"
                    data-error="price field is required"
                    required=""
                    value={price} onChange={(e)=> setPrice(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  class="col-md-6 col-sm-6 "
                  name="location"
                  rules={[
                    {
                      required: true,
                      message: "Please input location!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Equipment Location"
                    class="form-control top-input"
                    data-error="location field is required"
                    required=""
                    value={location} onChange={(e)=> setLocation(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  class="col-lg-12 form-group"
                  name="text-area"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Phone Number!",
                    },
                  ]}
                >
                  <Input.TextArea style={{ height: 170 }} value={message} onChange={(e)=> setMessage(e.target.value)} />
                </Form.Item>

                {/* <Form.Item name={["user", "introduction"]} label="Introduction">
                  <Input.TextArea />
                </Form.Item> */}
                <Form.Item class="col-lg-12 ">
                  <Button
                    class="btn-primary-fill-ghost disabled"
                    type="submit"
                    htmlType="submit"
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                  >
                    <span style={{ fontSize: 16 }}>Submit</span>
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fine;
