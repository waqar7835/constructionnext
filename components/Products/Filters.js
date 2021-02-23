import React, { useState } from 'react';
import { Collapse, Checkbox,Modal, Form, Input, Divider } from 'antd';
import YearFilter from './YearFilter';
import PriceFilter from './PriceFilter';
import CountryStateCity from './CountryStateCity';
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;


const plainOptions = ['Log Trailers'];
const plainOptions2 = ['Conventional Day Cab Trucks', 'Dump Trucks'];
const Filters = () => {
    const [isCatModalVisible, setIsCatModalVisible] = useState(false);
    const [isManModalVisible, setIsManModalVisible] = useState(false);
 

    const showCatModal = () => {
       
        setIsCatModalVisible(true);
      };
      const showManModal = () => {
       
        setIsManModalVisible(true);
      };
  
    const handleOk = () => {
      
      setIsCatModalVisible(false);
   
    };
    const handleOkMan = () => {
      
        
        setIsManModalVisible(true);
      };
  
    const handleCancel = () => {
     
      setIsCatModalVisible(false);
     
    };
    const handleCancelMan = () => {    
     
        setIsManModalVisible(false);
      };
//    function onChange(e) {
//       console.log(`checked = ${e.target.checked}`);
//     }
    
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [indeterminate2, setIndeterminate2] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
    const [checkAll2, setCheckAll2] = React.useState(false);
  
    const onChange = list => {
     
      setIndeterminate(!!list.length && list.length < plainOptions.length);
  
      setCheckAll(list.length === plainOptions.length);
    };
  
    const onCheckAllChange = e => {
     
      setIndeterminate(false);
      
      setCheckAll(e.target.checked);
    };
    const onChange2 = list => {
     
      
        setIndeterminate2(!!list.length && list.length < plainOptions2.length);
        setCheckAll2(list.length === plainOptions2.length);
      };
    const onCheckAllChange2 = e => {    
       
        setIndeterminate2(false);
        setCheckAll2(e.target.checked);
      };
    
   
    function callback(key) {
        console.log(key);
      }      
     
     
    return (
      <div className="filters-block">
         <form className="views-exposed-form">
            <div className="js-form-item form-item custom-control custom-textfield js-form-type-textfield form-type-textfield js-form-item-title form-item-title">
                <label  className="custom-control-label">Quick Search</label>        
                <input placeholder="Keyword(s) Search"  className="form-text form-control" />
            </div>       
                      
            {/* <fieldset  id="edit-country--wrapper" className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                   <span className="fieldset-legend">Country </span>
                </legend>
                <div className="fieldset-wrapper">
                   <div id="edit-country" className="form-checkboxes">
                       <div className="form-checkboxes bef-nested">        
                         <ul>
                             <li>
                                 <div className="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-country-55 form-item-country-55">
                                     <input  type="checkbox" id="edit-country-55"  className="form-checkbox custom-control-input"/>
                                     <label  className="custom-control-label option">USA</label>
                                 </div>
                            </li>
                         </ul>            
                       </div>
                  </div>
                </div>
            </fieldset> */}
            <Collapse defaultActiveKey={['5']} onChange={callback}>
            <Panel header="Listing Type" key="5">
            <fieldset  id="edit-country--wrapper" className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                {/* <legend>
                   <span className="fieldset-legend">Listing Type </span>
                </legend> */}
                <div className="fieldset-wrapper">
                   <div id="edit-country" className="form-checkboxes">
                       <div className="form-checkboxes bef-nested">        
                         <ul>
                             <li>
                                 <div className="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-country-55 form-item-country-55">
                                     <input  type="checkbox" id="edit-country-55"  className="form-checkbox custom-control-input"/>
                                     <label  className="custom-control-label option">For Sale</label>
                                 </div>
                            </li>
                         </ul>            
                       </div>
                  </div>
                </div>
            </fieldset>
            </Panel>
            <Panel header="Condition" key="6">
            <fieldset  id="edit-country--wrapper" className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                {/* <legend>
                   <span className="fieldset-legend">Condition </span>
                </legend> */}
                <div className="fieldset-wrapper">
                   <div id="edit-country" className="form-checkboxes">
                       <div className="form-checkboxes bef-nested">        
                         <ul>
                             <li>
                                 <div className="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-country-55 form-item-country-55">
                                     <input  type="checkbox" id="edit-country-55" className="form-checkbox custom-control-input"/>
                                     <label  className="custom-control-label option">Used</label>
                                 </div>
                            </li>
                         </ul>            
                       </div>
                  </div>
                </div>
            </fieldset>
            </Panel>
            </Collapse>
            {/* <fieldset  id="edit-state--wrapper" className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                    <span className="fieldset-legend">State</span>
                </legend>
                <div className="fieldset-wrapper">
                    <div id="edit-state" className="form-checkboxes"><div className="form-checkboxes bef-nested">
                         <ul>
                             <li>
                                 <div className="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-state-56 form-item-state-56">
                                     <input  type="checkbox" id="edit-state-56"  className="form-checkbox custom-control-input"/>
                                     <label for="edit-state-56" className="custom-control-label option">CALIFORNIA</label>
                                 </div>                                
                             </li>
                             <li>
                                 <div className="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-state-57 form-item-state-57">
                                     <input  type="checkbox" id="edit-state-57"  className="form-checkbox custom-control-input"/>
                                     <label for="edit-state-57" className="custom-control-label option">NEVADA</label>
                                     </div>                                
                              </li>
                              <li>
                                  <div className="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-state-58 form-item-state-58">
                                      <input  type="checkbox" id="edit-state-58" className="form-checkbox custom-control-input"/>
                                      <label for="edit-state-58" className="custom-control-label option">NEW YORK</label>
                                  </div>                                
                                </li>
                                <li>
                                    <div className="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-state-59 form-item-state-59">
                                        <input  type="checkbox" id="edit-state-59"  className="form-checkbox custom-control-input"/>
                                        <label  className="custom-control-label option">WASHINGTON</label>
                                    </div>
                                </li>
                            </ul>           
                         </div>
                    </div>
                </div>
            </fieldset> */}
            {/* <div className="js-form-item form-item custom-control custom-textfield js-form-type-textfield form-type-textfield js-form-item-created form-item-created">
                <label for="edit-created" className="custom-control-label">Authored on</label>        
                <input  type="text" id="edit-created" size="30" maxlength="128" className="form-text form-control"/>
            </div> */}

            <Collapse defaultActiveKey={['1']} onChange={callback}>
             <Panel header="Category" key="1">
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    Semi-Trailers
                </Checkbox>           
                <CheckboxGroup options={plainOptions}  onChange={onChange} />
                <Checkbox indeterminate={indeterminate2} onChange={onCheckAllChange2} checked={checkAll2}>
                Heavy Duty Trucks
                </Checkbox>           
                <CheckboxGroup options={plainOptions2}  onChange={onChange2} />  
                <a onClick={showCatModal} >+ Show All</a>  
             </Panel>    
             <Panel header="Manufacturer" key="2">
                    <Form.Item label="Popular">
                        <Checkbox onChange={onChange}>
                            BOBCAT
                        </Checkbox> 
                        <Checkbox onChange={onChange}>
                              DOOSAN
                        </Checkbox>
                        <Checkbox onChange={onChange}>             
                                KUBOTA
                        </Checkbox>
                        <Checkbox onChange={onChange}>
                             FREIGHTLINER
                        </Checkbox>
                        <Checkbox onChange={onChange}>
                                VIKING
                        </Checkbox>
                    </Form.Item>
                    <a onClick={showManModal}  className="apply-filter">+ Show All</a>  
             </Panel>          
             <Panel header="Year" key="4">
              <YearFilter/>
            </Panel>   
            <Panel header="Price" key="7">
              <PriceFilter/>
            </Panel>  
            </Collapse>           
              <div className="countryStateCity"><CountryStateCity/></div>              
          
         
            {/* <div className="js-form-item form-item custom-control js-form-type-select form-type-select js-form-item-category form-item-category">
                <label for="edit-category" className="custom-control-label">Select Equipment</label>
                <select data-drupal-selector="edit-category" id="edit-category" name="category" className="form-select custom-select"><option value="All">- Any -</option><option value="4">Articulated Dump Trucks</option><option value="8">Attachments</option><option value="2">Excavators</option><option value="6">Material Handling</option><option value="7">Mowers</option><option value="1" selected="selected">Skid Steers</option><option value="10">Track Loaders</option><option value="3">Utility Vehicles</option><option value="5">Wheel Loaders</option></select>
            </div> */}
         </form>
         {/* Category Modal */}
         <Modal title="Categories"   visible={isCatModalVisible}  onCancel={handleCancel} footer={[]} >
         <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    Semi-Trailers
                </Checkbox>           
                <CheckboxGroup options={plainOptions}  onChange={onChange} />
                <Checkbox indeterminate={indeterminate2} onChange={onCheckAllChange2} checked={checkAll2}>
                Heavy Duty Trucks
                </Checkbox>           
                <CheckboxGroup options={plainOptions2}  onChange={onChange2} /> 
       </Modal>

       {/* Manufacturer Modal */}
       <Modal title="Manufacturer"   visible={isManModalVisible}  onCancel={handleCancelMan} footer={[]} >
       <Form.Item label="Popular">
                        <Checkbox onChange={onChange}>
                            BOBCAT
                        </Checkbox> 
                        <Checkbox onChange={onChange}>
                              DOOSAN
                        </Checkbox>
                        <Checkbox onChange={onChange}>             
                                KUBOTA
                        </Checkbox>
                        <Checkbox onChange={onChange}>
                             FREIGHTLINER
                        </Checkbox>
                        <Checkbox onChange={onChange}>
                                VIKING
                        </Checkbox>
                    </Form.Item>
                    <a className="apply-filter">Apply Filter</a>
       </Modal>

      </div>
    );
  };
  
  export default Filters;
  