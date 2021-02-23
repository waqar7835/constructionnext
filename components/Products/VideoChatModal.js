import React, { useState } from 'react';
import { Modal, Form, Input, Button, Radio, Checkbox,Menu, Dropdown,Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
const VideoChatModal = () => {
   
    const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(' ');
    const [phone, setPhone] = useState('');
    const [postalCode, setPostalCode] = useState(' ');
    const [message, setMessage] = useState(' ');
    const [policy, setPolicy] = useState(' ');
    const [service, setService] = useState(' service');
    const [time, setTime] = useState('Time ');
    const [day, setDay] = useState('Date ');
 

   
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
        function handleSubmit(e){
        e.preventDefault();
        console.log("working form submit",firstName, lastName, email, phone, postalCode, message, policy, service, day, time);
  
      }
     
    return (
      <>
      <a onClick={showVideoModal}>Video Chat</a>
        <Modal title="Email this to a friend"   visible={isVideoModalVisible}  onCancel={handleCancel} footer={[]} >
            <Form layout="vertical" onSubmit={handleSubmit} >
            <Form.Item label="First Name">
                <Input placeholder="Enter your first name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Last Name">
                 <Input placeholder="Enter your last name" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Email"  rules={[{ type: 'email' }]}>
                    <Input placeholder="Enter your email address" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item label="Phone" >
                    <Input placeholder="(000) 000-0000" value={phone} onChange={(e)=> setPhone(e.target.value)} />
                </Form.Item>
                <Form.Item label="Postal Code" >
                    <Input placeholder="Enter your postal code" value={postalCode} onChange={(e)=> setPostalCode(e.target.value)} />
                </Form.Item>
                <Checkbox value={policy} onChange={onChange}>Click here to acknowledge you understand our Privacy Policy</Checkbox>
                <Form.Item label="Video Chat Service" >
                  <Select  value={service} style={{ width: 120 }} onChange={(e)=> setService(e)}>
                   <Option value=" Apple"> Apple</Option>
                    <Option value=" Android"> Android</Option>                   
                    <Option value=" Other"> Other</Option>
                  </Select>
   
                 </Form.Item>
                 <Form.Item label="When would you like to video chat?" >
                 <Select  style={{ width: 120 }} value={time} onChange={(e)=> setTime(e)}>
                   <Option value="8am-12pm">8am-12pm</Option>
                    <Option value="12pm-3pm">12pm-3pm</Option>                   
                    <Option value="3pm-6pm"> 3pm-6pm</Option>
                  </Select>
                  <Select  style={{ width: 120 }} value={day} onChange={(e)=> setDay(e)}>
                    <Option value="Sunday-February 14">Sunday-February 14</Option>
                  </Select>
                 </Form.Item>
                <Form.Item label="Message">
                    <TextArea rows={4} value={message} onChange={(e)=> setMessage(e.target.value)}/>
                </Form.Item>
                <Form.Item>     
                    <Button type="primary" htmlType="submit" >Submit</Button>
                </Form.Item>
           </Form>       
        </Modal>
      </>
    );
  };
  
  export default VideoChatModal;