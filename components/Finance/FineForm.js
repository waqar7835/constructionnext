import { Form, Input, Button , notification} from "antd";
import React, { useState } from "react";
import submitContant from "@store/actions/forms/fiance";

const Fine = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company_name, setCompany] = useState("");
  const [equipment_price, setPrice] = useState("");
  const [equipment_location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // loading handler 
    setLoading(true);
    submitContant({  first_name, last_name, email, company_name, message, equipment_price, equipment_location })
    .then((res) => { 
      if(res.code == 200) {
        openNotification();
        setFirstName("");
        setLastName
        setEmail("");
        setMessage("");
        setCompany("");
        setPrice("");
        setLocation("");
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
    <div className="section-space-all">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-form-layout4 text-center">
              <Form
                id="contact-form"
                name="basic"
                className="custom-form-final"
                onSubmit={handleSubmit}
              >
                <div className="col-md-6 col-sm-6 ">
                  <Form.Item
                    name="username"
                    className=" "
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="First Name"
                      className="form-control top-input"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-sm-6 ">
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
                      placeholder="Last Name"
                      class="form-control top-input"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-sm-6 ">
                  <Form.Item
                    name="company"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Company Name!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Comapny Name"
                      className="form-control top-input"
                      data-error="company field is required"
                      required=""
                      value={company_name}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-sm-6 ">
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
                      data-error="email field is required"
                      required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Item>
                </div>
                <div className="col-md-6 col-sm-6 ">
                  <Form.Item
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
                      className="form-control top-input"
                      value={equipment_price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </Form.Item>
                </div>

                <div className="col-md-6 col-sm-6">
                  <Form.Item
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
                      className="form-control top-input"
                      data-error="location field is required"
                      required=""
                      value={equipment_location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </Form.Item>
                </div>

                <div className="col-md-12 ">
                  <Form.Item
                    name="text-area"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone Number!",
                      },
                    ]}
                  >
                    <Input.TextArea
                      style={{ height: 170 }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Item>
                </div>

                <Form.Item className="col-lg-12 ">
                  <Button
                    className=" btn btn-str-up2"
                    type="submit"
                    htmlType="submit"
                    loading={loading}
                    disabled={loading}
                  >
                    <span>Submit</span>
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
