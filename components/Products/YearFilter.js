// import React, { useState } from 'react';
// import {  InputNumber, Row, Col } from 'antd';
// import { Slider, RangeSlider,Input, InputGroup } from 'rsuite';

// const YearFilter = () => {
//   const [value, setValue] = React.useState([10, 50]);
//   // const [min, setMin] = React.useState(3100);
//   // const [max, setMax] = React.useState(158500);
//    return ( 
//       <>               
//           <InputNumber
//             min={0}
//             max={100}
//             value={value[0]}
//             onChange={nextValue => {
//               const [start, end] = value;
//               if (nextValue > end) {
//                 return;
//               }
//               setValue([nextValue, end]);
//             }}
//           />         
//           <InputNumber
//             min={0}
//             max={100}
//             value={value[1]}
//             onChange={nextValue => {
//               const [start, end] = value;
//               if (start > nextValue) {
//                 return;
//               }
//               setValue([start, nextValue]);
//             }}
//           />        
//         <RangeSlider
//           progress
//           style={{ marginTop: 16 }}
//           value={value}
//           onChange={value => {
//             setValue(value);
//           }}
//         />     
    
//     </>
//   );
// };

// export default YearFilter;


import { Checkbox, Divider } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const YearFilter = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
    console.log(checkedList);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
};
export default YearFilter;
