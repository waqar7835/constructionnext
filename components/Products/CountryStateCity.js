import React, { useState } from 'react';
import { Collapse, Checkbox,Modal, Form, Input, Divider } from 'antd';
import { useRouter } from 'next/router';
import { event } from 'react-ga';
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;
var queryUrl = '';

const CountryStateCity = () => {
  const router = useRouter()
    const [isCityModalVisible, setIsCityModalVisible] = useState(false);
    const [isStateModalVisible, setIsStateModalVisible] = useState(false);
    const [country, setCountry] = useState([]);
    const [checked, setChecked] = useState(false);
    
    
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
    const  toggleChecked = () => {
        setChecked(!checked);

      };
      function onChangeCountry(value){
        console.log(value);
      }
      function onChangeState(value){
        console.log(value);
      }
      function onChange(value) {
        // console.log('checked = ', value.target.checked);
        // await  setCountry([e]);
        // console.log("country state value ",{country});
       
        console.log(value);
        // if(value.target.name=="country"){
           applyFilter('country' , value);
        // }
        // if(value.target.name=="state"){
        //   applyFilterState(value);
        // }
        // if(value.target.name=="city"){
        //   applyFilterCity(value);
        // }
         
         
       
        
            //   console.log(`checked = ${e.target.checked}`);                                
            //   var strArray = e.target.value.split(',');
            //   var queryKey=strArray[1];
            //   var queryValue=strArray[0];
            //   // console.log(strArray);
            //   // console.log(e);
            //   if(e.target.checked == true){
            //     console.log(true);
            //        if(Object.entries(router.query).length === 0){                  
            //    router.push(`/?${queryKey}=${queryValue}`, `/inventory/search?${queryKey}=${queryValue}`, { shallow: true })
            //   }
            //   else{
            //     for (const [key, value] of Object.entries(router.query)) {
            //        console.log(router.query);
            //        queryUrl  =  (queryUrl.includes(` ${key}= ${value}`))? queryUrl :  queryUrl.concat(` ${key}= ${value}`);
                  
            //       console.log("after concatination",queryUrl)
            //     }            
            //     router.push(`/?${queryKey}=${queryValue}`, `/inventory/search?${queryUrl}&${queryKey}=${queryValue}`, { shallow: true });
            // }
            //   }
            //   else{
            //     console.log(false);

            //        for (const [key, value] of Object.entries(router.query)) {
            //           console.log("old string,",queryUrl);
            //           console.log("query key,", queryKey);
            //           console.log("query value,", queryValue);
            //          queryUrl  = queryUrl.replace(`${queryKey}=${queryValue}`,' '); 
            //          console.log("new string,",queryUrl);
            //        }            
            //        router.push(`/?${queryUrl}`, `/inventory/search?${queryUrl}`, { shallow: true });
              
            //   }            
                           
           
          }
          const isChecked =(e)=>{
            console.log(`checked = ${e.target.value}`);
            // applyFilter(e.target.checked);
          }
          const applyFilterCountry = (value) => {
            if(value)
            {               
               if((value.target.checked == true) && (value.target.name == "country") && !(queryUrl.includes(`country=${value.target.value} `)) )
               {              
                   if((value.target.checked == true) && (value.target.name == "country") && (queryUrl.includes(`country=`)) )
                   {
                     console.log(queryUrl);
                    var n = queryUrl.indexOf("country=");
                    var index = n +8;
                    console.log("index",n)
                    queryUrl = [queryUrl. slice(0, index), `${value.target.value},`, queryUrl. slice(index)]. join('');
                  
                    }
                   else{
                        queryUrl = queryUrl.concat(`country=${value.target.value} `) ;
                       }
                }
                else if(value.target.checked == false){
                  
                  queryUrl = queryUrl.replace(`${value.target.value}`,' ')
                  var n = queryUrl.indexOf("country=");
                  var index = n +9;
                  console.log("on un check",queryUrl);
                     if((queryUrl.includes(`country=`)) ){
                      console.log(queryUrl);
                      queryUrl = queryUrl.replace(`country=`,' ');
                      console.log(queryUrl);
                     }
                  // console.log(queryUrl);
                }
                else if((value.target.checked == false) && (queryUrl.includes(`${value.target.value},`))){
                  queryUrl = queryUrl.replace(`country=${value.target.value},`,' ')
                  console.log("final console",value.target.value);
                }
            } 
            queryUrl = ( queryUrl.replace( /\s/g, '') ); 
            router.push(`/?${queryUrl}`, `/inventory/search?${queryUrl}`, { shallow: true })       
          }
          const applyFilterState = (value) => {
            if(value)
            {               
              if((value.target.checked == true) && (value.target.name == "state") && !(queryUrl.includes(`state=${value.target.value} `)) )
            {       
              console.log("state");       
                if((value.target.checked == true) && (value.target.name == "state") && (queryUrl.includes(`state=`)) )
                {
                     queryUrl = queryUrl.concat(`, ${value.target.value} `) ;
                 }
                else{
                     queryUrl = queryUrl.concat(`state=${value.target.value} `) ;
                    }
             }
             else if((value.target.checked == false) && (queryUrl.includes(`state=`))){
               console.log(queryUrl);
               queryUrl = queryUrl.replace(`state=`,' ')
               console.log(queryUrl);
             }
             else if((value.target.checked == false) && (queryUrl.includes(`,${value.target.value}`))){
               queryUrl = queryUrl.replace(`,${value.target.value}`,' ')
               console.log("final console",value.target.value);
             }  
            } 
           
            queryUrl = ( queryUrl.replace( /\s/g, '') ); 

                 router.push(`/?${queryUrl}`, `/inventory/search?${queryUrl}`, { shallow: true })             
          }

          const applyFilterCity = (value) => {
            if(value)
            {               
             if((value.target.checked == true) && (value.target.name == "city") && !(queryUrl.includes(`city=${value.target.value} `)) )
            {              
                if((value.target.checked == true) && (value.target.name == "city") && (queryUrl.includes(`city=`)) )
                {
                  var n = queryUrl.indexOf("city=");
                  var index = n +5;
                  console.log("index",n)
                  queryUrl = [queryUrl. slice(0, index), `${value.target.value},`, queryUrl. slice(index)]. join('');
                
                    //  queryUrl = queryUrl.concat(` ${value.target.value} `) ;
                 }
                else{
                     queryUrl = queryUrl.concat(`city=${value.target.value} `) ;
                    }
                }
                else if((value.target.checked == false) && (queryUrl.includes(`city=`))){
                  queryUrl = queryUrl.replace(`city=${value.target.value}`,' ')
                  console.log(queryUrl);
                }
                else if((value.target.checked == false) && (queryUrl.includes(`${value.target.value}`)))
                {
                  queryUrl = queryUrl.replace(`${value.target.value}`,' ')
                  console.log("final console",value.target.value);
                } 
              }
              queryUrl = ( queryUrl.replace( /\s/g, '') ); 

                 router.push(`/?${queryUrl}`, `/inventory/search?${queryUrl}`, { shallow: true })             
          }
    
  return (
    <>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
             <Panel header="Country" key="1">
             <Checkbox.Group style={{ width: '100%' }} name="country"  onChange={(onChangeCountry)}>
                <Checkbox value="USA">USA</Checkbox>
                <Checkbox  value="PAK">PAK</Checkbox>
                </Checkbox.Group>
             </Panel>               
             <Panel header="State" key="2">
             <Checkbox.Group style={{ width: '100%' }} name="state"  onChange={(onChangeState)}>
             <Checkbox onChange={(onChange)} value="CALIFORNIA">{country}</Checkbox>
             <Checkbox onChange={(onChange)} value="COLORADO">COLORADO</Checkbox>
             <Checkbox onChange={(onChange)} value="FLORIDA">FLORIDA</Checkbox>
             <Checkbox onChange={(onChange)} value="GEORGIA">GEORGIA</Checkbox>         
                <a onClick={showStateModal} className="apply-filter" >+ Show All</a>  
                </Checkbox.Group>          
             </Panel>
             <Panel header="City" key="3">
             <Checkbox.Group style={{ width: '100%' }} name="city" >
             <Checkbox onChange={(onChange)} value="ARLINGTON">ARLINGTON</Checkbox>
             <Checkbox onChange={(onChange)} value="BEDFORD">BEDFORD</Checkbox>
             <Checkbox onChange={(onChange)} value="BIG LAKE">BIG LAKE</Checkbox>
             <Checkbox onChange={(onChange)} value="BOWLING GREEN">BOWLING GREEN</Checkbox>         
                <a onClick={showStateModal} className="apply-filter" >+ Show All</a>  
                </Checkbox.Group>           
             </Panel>
            </Collapse>
            {/* state popup modal */}
            <Modal className="popup-filters" title="State"   visible={isStateModalVisible}  onCancel={handleCancelState} footer={[]} >
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
        <Modal title="City" className="popup-filters"  visible={isCityModalVisible}  onCancel={handleCancelCity} footer={[]} >
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
