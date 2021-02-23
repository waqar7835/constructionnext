import { Form, Input, Button } from "antd";

const Fine = () => {
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
          <div class="col-md-12">
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
                    placeholder="First Name"
                    class="form-control top-input"
                    data-error="Name field is required"
                    required=""
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
                  <Input.TextArea style={{ height: 170 }} />
                </Form.Item>

                {/* <Form.Item name={["user", "introduction"]} label="Introduction">
                  <Input.TextArea />
                </Form.Item> */}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fine;
