import React, { useState } from 'react';
import {  InputNumber, Row, Col } from 'antd';
import { Slider, RangeSlider,Input, InputGroup } from 'rsuite';

const PriceFilter = () => {
  const [value, setValue] = React.useState([10, 50]);
  // const [min, setMin] = React.useState(3100);
  // const [max, setMax] = React.useState(158500);
   return ( 
      <>               
          <InputNumber
            min={0}
            max={100}
            value={value[0]}
            onChange={nextValue => {
              const [start, end] = value;
              if (nextValue > end) {
                return;
              }
              setValue([nextValue, end]);
            }}
          />         
          <InputNumber
            min={0}
            max={100}
            value={value[1]}
            onChange={nextValue => {
              const [start, end] = value;
              if (start > nextValue) {
                return;
              }
              setValue([start, nextValue]);
            }}
          />        
        <RangeSlider
          progress
          style={{ marginTop: 16 }}
          value={value}
          onChange={value => {
            setValue(value);
          }}
        />     
    
    </>
  );
};

export default PriceFilter;
