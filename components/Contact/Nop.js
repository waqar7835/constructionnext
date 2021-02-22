import Detail from "./Detail";
import { Form, Input, Button, Checkbox } from "antd";

const FormD = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div class="section-space-all">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="section-title-primary">
              <h2>
                Send Us a <span> Message</span>
              </h2>
            </div>
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
                    placeholder="Name"
                    class="form-control top-input"
                    data-error="Name field is required"
                    required=""
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
                    placeholder="Email Address"
                    class="form-control top-input"
                    data-error="Name field is required"
                    required=""
                  />
                </Form.Item>

                <Form.Item
                  class="col-md-6 col-sm-6  "
                  name="company"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Campany Name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Company"
                    class="form-control top-input"
                    data-error="Name field is required"
                    required=""
                  />
                </Form.Item>

                <Form.Item
                  class="col-md-6 col-sm-6 "
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
                    class="form-control top-input"
                    data-error="Name field is required"
                    required=""
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
                  <textarea
                    class="form-control top-input"
                    style={{ height: 170 }}
                    data-error="Name field is required"
                    required=""
                  />
                </Form.Item>

                <Form.Item class="col-lg-12 ">
                  <Button
                    class="btn-primary-fill-ghost disabled"
                    type="submit"
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
