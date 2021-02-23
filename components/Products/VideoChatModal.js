import React, { useState } from 'react';
import { Modal, Form, Input, Button, Radio, Checkbox,Menu, Dropdown, } from 'antd';
const { TextArea } = Input;
const VideoChatModal = () => {
   
    const [isVideoModalVisible, setIsVideoModalVisible] = useState(false);
 

   
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
    }
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Apple
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Android
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
             Other
            </a>
          </Menu.Item>
        </Menu>
      );
      const timemenu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              8am-12pm
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              12pm-3pm
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              3pm-6pm
            </a>
          </Menu.Item>
         
        </Menu>
      );
      const daymenu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
              Monday-Februry 22
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
            Tuesday-Februry 23
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
            Wednessday-Februry 24
            </a>
          </Menu.Item>
         
        </Menu>
      );
    return (
      <>
      <a onClick={showVideoModal}>Video Chat</a>
        <Modal title="Email this to a friend"   visible={isVideoModalVisible}  onCancel={handleCancel} footer={[]} >
            <Form layout="vertical" >
            <Form.Item label="First Name">
                <Input placeholder="Enter your first name" />
                </Form.Item>
                <Form.Item label="Last Name">
                 <Input placeholder="Enter your last name" />
                </Form.Item>
                <Form.Item label="Email"  rules={[{ type: 'email' }]}>
                    <Input placeholder="Enter your email address" />
                </Form.Item>
                <Form.Item label="Phone" >
                    <Input placeholder="(000) 000-0000" />
                </Form.Item>
                <Form.Item label="Postal Code" >
                    <Input placeholder="Enter your postal code" />
                </Form.Item>
                <Checkbox onChange={onChange}>Click here to acknowledge you understand our Privacy Policy</Checkbox>
                <Form.Item label="Video Chat Service" >
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                 <Button>Service</Button>
                 </Dropdown>
                 </Form.Item>
                 <Form.Item label="When would you like to video chat?" >
                 <Dropdown overlay={timemenu} placement="bottomLeft" arrow>
                 <Button>Time</Button>
                 </Dropdown>
                 <Dropdown overlay={daymenu} placement="bottomLeft" arrow>
                 <Button>Day</Button>
                 </Dropdown>
                 </Form.Item>
                <Form.Item label="Message">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item>     
                    <Button type="primary">Submit</Button>
                </Form.Item>
           </Form>       
        </Modal>
      </>
    );
  };
  
  export default VideoChatModal;