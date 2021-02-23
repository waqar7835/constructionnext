import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
const YearFilter = () => {
  const [min, setMin] = React.useState(3100);
  const [max, setMax] = React.useState(158500);
  const onChangeMin = value => {
    setMin(value);
    console.log(value);
  };
  const onChangeMax = value => {
    setMax(value);
    console.log(value);
  };
  const onChangeSlider = value => {
    const [newMin , newMax] = value;
    setMax(newMax)
    setMin(newMin)
    console.log(newMax);
    console.log(newMin);
    console.log(value);
  };
  const y1 = 5;
  const y2 = 90;
  return (
    <>
      <InputNumber
        style={{ margin: '0 16px' }}
        value={min}
        onChange={onChangeMin}
        step={800}
      />
      <InputNumber
        style={{ margin: '0 16px' }}
        value={max}
        onChange={onChangeMax}
        step={800}
      />
      <Slider
        range
        min={min}
        max={max}
        onChange={onChangeSlider}
        value={[min, max]}
        step={800}
      />

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
