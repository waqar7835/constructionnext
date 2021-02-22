import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
const YearFilter = () => {
    const [state, setState2] =  React.useState(5);
    const onChange = value => {
        setState2(value);
        console.log("working");
      };
    return (
      <>
       <InputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={state}
            onChange={onChange}
          />
        <Slider range defaultValue={[{state}, 50]}  />
     
        {/* <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof {state} === 'number' ? {state} : 0}
          /> */}
      </>
    );
  };
  
  export default YearFilter;
  