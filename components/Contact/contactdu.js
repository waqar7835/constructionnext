import { Form, Input, Button } from "antd";
// antd v3
const Demo = ({ form: { getFieldDecorator, validateFields } }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <div className="contact-form-layout4 text-center">
      <Form onSubmit={onSubmit} className="custom-form-final">
        <div className="col-md-6 col-xs-12 ">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true }],
            })(<Input placeholder='Name'   className="form-control top-input" />)}
          </Form.Item>
        </div>
        <div className="col-md-6 col-xs-12 ">
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true }],
            })(<Input placeholder='Email'   className="form-control top-input" />)}
          </Form.Item>
        </div>
        <div className="col-md-6 col-xs-12 ">
          <Form.Item>
            {getFieldDecorator("address", {
              rules: [{ required: true }],
            })(<Input placeholder='Address'  className="form-control top-input" />)}
          </Form.Item>
        </div>
        <div className="col-md-6 col-xs-12 ">
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [{ required: true }],
            })(<Input placeholder='Phone'  className="form-control top-input" />)}
          </Form.Item>
        </div>
        <div className="col-md-12">
        <Form.Item>
            {getFieldDecorator("message", {
              rules: [{ required: true }],
            })(<Input.TextArea placeholder='Message' className="form-control message-box" />)}
          </Form.Item>
        </div>

        <Form.Item className="col-lg-12 ">
          <Button className="btn btn-str-up2" type="submit" htmlType="submit">
            <span>SUBMIT </span>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedDemo = Form.create()(Demo);
export default WrappedDemo;
