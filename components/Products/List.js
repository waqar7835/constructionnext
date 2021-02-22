import React, { useState } from 'react';
import { Modal, Form, Input, Button, Radio, Checkbox,Menu, Dropdown, } from 'antd';
const { TextArea } = Input;
import VideoChatModal from './VideoChatModal';
import EmailSellerModal from './EmailSellerModal';
const List = () => {
   
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
      <div className="listing-content">    
        <div className="views-row">
           <div className="invent-pro-cus">
             <div className="invent-pro-cus-lft">
                <div className="invent-cus-img">  
                    <img src="/images/listing.jpg"  width="1064" height="768" alt="" loading="lazy" typeof="Image"/>
                </div>
                <div className="invent-cus-created">updated: Mon, 02/15/2021 - 15:53</div>
                <div className="invent-cus-body"><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p></div>
             </div>
           
           <div className="invent-pro-cus-mid">
                <div className="invent-cus-title">Skid Steers 2</div>
                <div className="invent-cus-des">Lorem ipsum dolor sit </div>
                <div className="invent-cus-price"><span>Price:</span> </div>
                 <div className="invent-cus-purchas-cus"><span> <i className="fas fa-money-bill-alt"></i> </span><a href="#"> </a></div> 
                <div className="invent-cus-machloc"><span>Machine Location:</span> Lorem ipsum dolor sit  dir</div>
                <div className="invent-cus-rhrs"><span>Hours:</span> 235 </div>
                <div className="invent-cus-snum"><span>Serial Numbers:</span> 7238682et8723 </div>
                <div className="invent-cus-cond"><span>Condition:</span> Used </div>
                <div className="invent-cus-stnum"><span>Stock Number:</span> 7238e6dhweud </div>
                <div className="invent-cus-bucket"><span>Bucket:</span> Yes </div>
                <div className="invent-cus-ac"><span>A/C:</span> Yes</div>
                <div className="invent-cus-heater"><span>Heater:</span> Yes</div>
                <div className="invent-cus-rnum-fend"><span>Number of Fanders:</span> -1</div>
                <div className="invent-cus-buc-cap"><span>Bucket Capacity</span> 2.4</div>
            </div>
            <div className="invent-pro-cus-rt">
              <div className="manf-detail">
                <div className="lister-dealer-info">
                    <p><a href="#">Lorem Ipsum has</a></p>
                    <p>Lorem Ipsum has has t</p>
                    <p><span>Phone:</span> 7483804</p>
                </div>
                <div className="products-info-btns">
                    <a href="/inventory/listing/skid-steers-2" >View Details</a>
                   <EmailSellerModal/>
                    <VideoChatModal/>
                </div>
              </div>
            </div>
        </div> 
        </div>   
       
      </div>
    );
  };
  
  export default List;