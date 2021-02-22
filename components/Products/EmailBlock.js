import React, { useState } from 'react';
import { Modal, Form, Input, Button, Radio, Checkbox } from 'antd';
const { TextArea } = Input;

const EmailBlock = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
 
 

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
  }

    return (
      <div className="email-block">
        <p><a onClick={showModal}> <i className="fa fa-envelope" aria-hidden="true"></i>Email</a></p>
        <p><a  > <i className="fa fa-print" aria-hidden="true"></i>  Print</a></p>
        <Modal title="Email this to a friend"   visible={isModalVisible}  onCancel={handleCancel} footer={[]} >
        <Form
           layout="vertical"
     
    >
     <Form.Item label="First Name">
          <Input placeholder="Enter your first name" />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input placeholder="Enter your last name" />
        </Form.Item>
        <Form.Item label="Email"  rules={[{ type: 'email' }]}>
          <Input placeholder="Enter your email address" />
        </Form.Item>
        <Form.Item label="Recipient's Email"  rules={[{ type: 'email' }]}>
          <Input placeholder="Enter recipient's email address " />
        </Form.Item>
        <Checkbox onChange={onChange}>Click here to acknowledge you understand our Privacy Policy</Checkbox>
        <Form.Item label="Message">
      <TextArea rows={4} />
      </Form.Item>
      <Form.Item>     
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
       
      </Modal>
      

      </div>
    );
  };
  
  export default EmailBlock;