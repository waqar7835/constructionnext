import React, { useState } from 'react';
import { Collapse, Checkbox,Modal, Form, Input, Divider } from 'antd';
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;
const CountryStateCity = () => {
    
    const [isCityModalVisible, setIsCityModalVisible] = useState(false);
    const [isStateModalVisible, setIsStateModalVisible] = useState(false);
   
      const showCityModal = () => {       
        setIsCityModalVisible(true);
      };
      const showStateModal = () => {       
        setIsStateModalVisible(true);
      };   
   
    const handleCancelCity = () => {     
        setIsCityModalVisible(false);     
      };
      const handleCancelState = () => {     
        setIsStateModalVisible(false);     
      };
      function callback(key) {
        console.log(key);
      }     
      function onChange(e) {
              console.log(`checked = ${e.target.checked}`);
            }
  return (
    <>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
             <Panel header="Country" key="1">
                <Checkbox onChange={onChange}>USA</Checkbox>
             </Panel>               
             <Panel header="State" key="2">
             <Checkbox onChange={onChange}>CALIFORNIA</Checkbox>
             <Checkbox onChange={onChange}>COLORADO</Checkbox>
             <Checkbox onChange={onChange}>FLORIDA</Checkbox>
             <Checkbox onChange={onChange}>GEORGIA</Checkbox>         
                <a onClick={showStateModal} className="apply-filter" >+ Show All</a>            
             </Panel>
             <Panel header="City" key="3">
             <Checkbox onChange={onChange}>ARLINGTON</Checkbox>
             <Checkbox onChange={onChange}>BEDFORD</Checkbox>
             <Checkbox onChange={onChange}>BIG LAKE</Checkbox>
             <Checkbox onChange={onChange}>BOWLING GREEN</Checkbox>         
                <a onClick={showStateModal} className="apply-filter" >+ Show All</a>            
             </Panel>
            </Collapse>
            {/* state popup modal */}
            <Modal title="State"   visible={isStateModalVisible}  onCancel={handleCancelState} footer={[]} >
            <Input placeholder="Filter" />
             <Checkbox onChange={onChange}>CALIFORNIA</Checkbox>
             <Checkbox onChange={onChange}>COLORADO</Checkbox>
             <Checkbox onChange={onChange}>FLORIDA</Checkbox>
             <Checkbox onChange={onChange}>GEORGIA</Checkbox> 
             <Checkbox onChange={onChange}>KENTUCKY</Checkbox>
             <Checkbox onChange={onChange}>LOUISIANA</Checkbox>
             <Checkbox onChange={onChange}>MASSACHUSETTS</Checkbox>
             <Checkbox onChange={onChange}>MINNESOTA</Checkbox>           
                    <a className="apply-filter">Apply Filter</a>
       </Modal>

        {/* Cities popup modal */}
        <Modal title="City"   visible={isCityModalVisible}  onCancel={handleCancelCity} footer={[]} >
            <Input placeholder="Filter" />
             <Checkbox onChange={onChange}>ARLINGTON</Checkbox>
             <Checkbox onChange={onChange}>BEDFORD</Checkbox>
             <Checkbox onChange={onChange}>BIG LAKE</Checkbox>
             <Checkbox onChange={onChange}>BOWLING GREEN</Checkbox> 
             <Checkbox onChange={onChange}>BYRON</Checkbox>
             <Checkbox onChange={onChange}>CERRITOS</Checkbox>
             <Checkbox onChange={onChange}>CHARLOTTE</Checkbox>
             <Checkbox onChange={onChange}>CHEHALIS</Checkbox>           
                    <a className="apply-filter">Apply Filter</a>
       </Modal>


    </>
  );
};

export default CountryStateCity;
