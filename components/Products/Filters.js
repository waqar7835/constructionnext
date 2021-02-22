import { Collapse } from 'antd';
const { Panel } = Collapse;
const Filters = () => {
    function callback(key) {
        console.log(key);
      }      
      const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      `;
    return (
      <div className="filters-block">
         <form className="views-exposed-form">
            <div class="js-form-item form-item custom-control custom-textfield js-form-type-textfield form-type-textfield js-form-item-title form-item-title">
                <label for="edit-title" class="custom-control-label">Quick Search</label>        
                <input placeholder="Keyword(s) Search"  class="form-text form-control" />
            </div>
            <fieldset data-drupal-selector="edit-country" id="edit-country--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                   <span class="fieldset-legend">Listing Type </span>
                </legend>
                <div class="fieldset-wrapper">
                   <div id="edit-country" class="form-checkboxes">
                       <div class="form-checkboxes bef-nested">        
                         <ul>
                             <li>
                                 <div class="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-country-55 form-item-country-55">
                                     <input data-drupal-selector="edit-country-55" type="checkbox" id="edit-country-55" name="country[55]" value="55" class="form-checkbox custom-control-input"/>
                                     <label for="edit-country-55" class="custom-control-label option">For Sale</label>
                                 </div>
                            </li>
                         </ul>            
                       </div>
                  </div>
                </div>
            </fieldset>
            <fieldset data-drupal-selector="edit-country" id="edit-country--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                   <span class="fieldset-legend">Condition </span>
                </legend>
                <div class="fieldset-wrapper">
                   <div id="edit-country" class="form-checkboxes">
                       <div class="form-checkboxes bef-nested">        
                         <ul>
                             <li>
                                 <div class="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-country-55 form-item-country-55">
                                     <input data-drupal-selector="edit-country-55" type="checkbox" id="edit-country-55" name="country[55]" value="55" class="form-checkbox custom-control-input"/>
                                     <label for="edit-country-55" class="custom-control-label option">Used</label>
                                 </div>
                            </li>
                         </ul>            
                       </div>
                  </div>
                </div>
            </fieldset>
            
            <fieldset data-drupal-selector="edit-country" id="edit-country--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                   <span class="fieldset-legend">Country </span>
                </legend>
                <div class="fieldset-wrapper">
                   <div id="edit-country" class="form-checkboxes">
                       <div class="form-checkboxes bef-nested">        
                         <ul>
                             <li>
                                 <div class="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-country-55 form-item-country-55">
                                     <input data-drupal-selector="edit-country-55" type="checkbox" id="edit-country-55" name="country[55]" value="55" class="form-checkbox custom-control-input"/>
                                     <label for="edit-country-55" class="custom-control-label option">USA</label>
                                 </div>
                            </li>
                         </ul>            
                       </div>
                  </div>
                </div>
            </fieldset>
            <fieldset data-drupal-selector="edit-state" id="edit-state--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                    <span class="fieldset-legend">State</span>
                </legend>
                <div class="fieldset-wrapper">
                    <div id="edit-state" class="form-checkboxes"><div class="form-checkboxes bef-nested">
                         <ul>
                             <li>
                                 <div class="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-state-56 form-item-state-56">
                                     <input data-drupal-selector="edit-state-56" type="checkbox" id="edit-state-56" name="state[56]" value="56" class="form-checkbox custom-control-input"/>
                                     <label for="edit-state-56" class="custom-control-label option">CALIFORNIA</label>
                                 </div>                                
                             </li>
                             <li>
                                 <div class="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-state-57 form-item-state-57">
                                     <input data-drupal-selector="edit-state-57" type="checkbox" id="edit-state-57" name="state[57]" value="57" class="form-checkbox custom-control-input"/>
                                     <label for="edit-state-57" class="custom-control-label option">NEVADA</label>
                                     </div>                                
                              </li>
                              <li>
                                  <div class="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-state-58 form-item-state-58">
                                      <input data-drupal-selector="edit-state-58" type="checkbox" id="edit-state-58" name="state[58]" value="58" class="form-checkbox custom-control-input"/>
                                      <label for="edit-state-58" class="custom-control-label option">NEW YORK</label>
                                  </div>                                
                                </li>
                                <li>
                                    <div class="js-form-item form-item custom-control custom-checkbox js-form-type-checkbox form-type-checkbox js-form-item-state-59 form-item-state-59">
                                        <input data-drupal-selector="edit-state-59" type="checkbox" id="edit-state-59" name="state[59]" value="59" class="form-checkbox custom-control-input"/>
                                        <label for="edit-state-59" class="custom-control-label option">WASHINGTON</label>
                                    </div>
                                </li>
                            </ul>           
                         </div>
                    </div>
                </div>
            </fieldset>
            <div class="js-form-item form-item custom-control custom-textfield js-form-type-textfield form-type-textfield js-form-item-created form-item-created">
                <label for="edit-created" class="custom-control-label">Authored on</label>        
                <input data-drupal-selector="edit-created" type="text" id="edit-created" name="created" value="" size="30" maxlength="128" class="form-text form-control"/>
            </div>

            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="Category" key="1">
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
                </Panel>
            </Collapse>,
            {/* <div class="js-form-item form-item custom-control js-form-type-select form-type-select js-form-item-category form-item-category">
                <label for="edit-category" class="custom-control-label">Select Equipment</label>
                <select data-drupal-selector="edit-category" id="edit-category" name="category" class="form-select custom-select"><option value="All">- Any -</option><option value="4">Articulated Dump Trucks</option><option value="8">Attachments</option><option value="2">Excavators</option><option value="6">Material Handling</option><option value="7">Mowers</option><option value="1" selected="selected">Skid Steers</option><option value="10">Track Loaders</option><option value="3">Utility Vehicles</option><option value="5">Wheel Loaders</option></select>
            </div> */}
         </form>
      </div>
    );
  };
  
  export default Filters;
  