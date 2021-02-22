import { Collapse, Checkbox } from 'antd';
const { Panel } = Collapse;


const Filters = () => {
    
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }
    function callback(key) {
        console.log(key);
      }      
     
      const options =['Semi-Trailers', 'Log Trailers', 'Heavy Duty Trucks'];
    return (
      <div className="filters-block">
         <form className="views-exposed-form">
            <div className="js-form-item form-item custom-control custom-textfield js-form-type-textfield form-type-textfield js-form-item-title form-item-title">
                <label  className="custom-control-label">Quick Search</label>        
                <input placeholder="Keyword(s) Search"  className="form-text form-control" />
            </div>
            <fieldset  id="edit-country--wrapper" className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                   <span className="fieldset-legend">Listing Type </span>
                </legend>
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
            <fieldset  id="edit-country--wrapper" className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                   <span className="fieldset-legend">Condition </span>
                </legend>
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
            
            <fieldset  id="edit-country--wrapper" className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
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
            </fieldset>
            <fieldset  id="edit-state--wrapper" className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
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
            </fieldset>
            <div className="js-form-item form-item custom-control custom-textfield js-form-type-textfield form-type-textfield js-form-item-created form-item-created">
                <label for="edit-created" className="custom-control-label">Authored on</label>        
                <input  type="text" id="edit-created" size="30" maxlength="128" className="form-text form-control"/>
            </div>

            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Checkbox onChange={onChange}>Semi-Trailers</Checkbox>
                <Checkbox onChange={onChange}>Log Trailers</Checkbox>
                <Checkbox onChange={onChange}>Heavy Duty Trucks</Checkbox>
                <Checkbox onChange={onChange}>Conventional Day Cab Trucks</Checkbox>
                <Checkbox onChange={onChange}>Log Trailers</Checkbox>             
               
                
            </Collapse>,
            {/* <div className="js-form-item form-item custom-control js-form-type-select form-type-select js-form-item-category form-item-category">
                <label for="edit-category" className="custom-control-label">Select Equipment</label>
                <select data-drupal-selector="edit-category" id="edit-category" name="category" className="form-select custom-select"><option value="All">- Any -</option><option value="4">Articulated Dump Trucks</option><option value="8">Attachments</option><option value="2">Excavators</option><option value="6">Material Handling</option><option value="7">Mowers</option><option value="1" selected="selected">Skid Steers</option><option value="10">Track Loaders</option><option value="3">Utility Vehicles</option><option value="5">Wheel Loaders</option></select>
            </div> */}
         </form>
      </div>
    );
  };
  
  export default Filters;
  