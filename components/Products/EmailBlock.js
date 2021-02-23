import React, { useState } from 'react';
import { Modal, Form, Input, Button, Radio, Checkbox } from 'antd';
const { TextArea } = Input;

const EmailBlock = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(' ');
  const [recEmail, setRecEmail] = useState(' '); 
  const [message, setMessage] = useState(' ');
  const [policy, setPolicy] = useState(' ');
 

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
    setPolicy(e.target.checked);
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("working form submit",firstName, lastName, email, message, policy,recEmail);

  }

    return (
      <div className="email-block">
        <p><a onClick={showModal}> <i className="fa fa-envelope" aria-hidden="true"></i>Email</a></p>
        <p><a  > <i className="fa fa-print" aria-hidden="true"></i>  Print</a></p>
        <Modal title="Email this to a friend"   visible={isModalVisible}  onCancel={handleCancel} footer={[]} >
        <Form layout="vertical"  onSubmit={handleSubmit}  >
     <Form.Item label="First Name">
          <Input placeholder="Enter your first name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input placeholder="Enter your last name" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email"  rules={[{ type: 'email' }]}>
          <Input placeholder="Enter your email address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Item>
        <Form.Item label="Recipient's Email"  rules={[{ type: 'email' }]}>
          <Input placeholder="Enter recipient's email address " value={recEmail} onChange={(e)=> setRecEmail(e.target.value)} />
        </Form.Item>
        <Checkbox value={policy} onChange={onChange}>Click here to acknowledge you understand our Privacy Policy</Checkbox>
        <Form.Item label="Message">
      <TextArea rows={4}  value={message} onChange={(e)=> setMessage(e.target.value)}/>
      </Form.Item>
      <Form.Item>     
        <Button type="primary" htmlType="submit" >Submit</Button>
      </Form.Item>
    </Form>
       
      </Modal>
      

      </div>
    );
  };
  
  export default EmailBlock;