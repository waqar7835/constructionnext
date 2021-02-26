import React, { useState } from 'react';
import { Collapse, Checkbox, Modal, Form, Input, Divider } from 'antd';
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
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
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
  const toggleChecked = () => {
    setChecked(!checked);

  };
  function onChangeCountry(value) {
    setCountry([value]);
    applyFilter({ country: value, city, state })
  }
  function onChangeState(value) {
    setState([value]);
    applyFilter({ state: value, city, country })
  }
  function onChangeCity(value) {
    setCity([value]);
    applyFilter({ city: value, state, country });
  }
  const applyFilter = (params) => {

    console.log(params);
    let str = '';
    if (!!params.country.length) {
      str += "&country=" + params.country.join(',');
    }
    if (!!params.city.length) {
      str += "&city=" + params.city.join(',');
    }
    if (!!params.state.length) {
      str += "&state=" + params.state.join(',');
    }
    console.log(str)
    //router.push(`/?${str}`, `/inventory/search?${str}`, { shallow: true }) 
  }



  return (
    <>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Country" key="1">
          <Checkbox.Group style={{ width: '100%' }} name="country" onChange={(onChangeCountry)} >
            <Checkbox value="USA">USA</Checkbox>
            <Checkbox value="PAK">PAK</Checkbox>
          </Checkbox.Group>
        </Panel>
        <Panel header="State" key="2">
          <Checkbox.Group style={{ width: '100%' }} name="state" onChange={(onChangeState)}>
            <Checkbox value="COLORADO">COLORADO</Checkbox>
            <Checkbox value="FLORIDA">FLORIDA</Checkbox>
            <Checkbox value="GEORGIA">GEORGIA</Checkbox>
            <a onClick={showStateModal} className="apply-filter" >+ Show All</a>
          </Checkbox.Group>
        </Panel>
        <Panel header="City" key="3">
          <Checkbox.Group style={{ width: '100%' }} name="city" onChange={(onChangeCity)} >
            <Checkbox value="ARLINGTON">ARLINGTON</Checkbox>
            <Checkbox value="BEDFORD">BEDFORD</Checkbox>
            <Checkbox value="BIG LAKE">BIG LAKE</Checkbox>
            <Checkbox value="BOWLING GREEN">BOWLING GREEN</Checkbox>
            <a onClick={showStateModal} className="apply-filter" >+ Show All</a>
          </Checkbox.Group>
        </Panel>
      </Collapse>
      {/* state popup modal */}
      <Modal className="popup-filters" title="State" visible={isStateModalVisible} onCancel={handleCancelState} footer={[]} >
        <Input placeholder="Filter" />
        <Checkbox >CALIFORNIA</Checkbox>
        <Checkbox >COLORADO</Checkbox>
        <Checkbox >FLORIDA</Checkbox>
        <Checkbox >GEORGIA</Checkbox>
        <Checkbox >KENTUCKY</Checkbox>
        <Checkbox >LOUISIANA</Checkbox>
        <Checkbox >MASSACHUSETTS</Checkbox>
        <Checkbox >MINNESOTA</Checkbox>
        <a className="apply-filter">Apply Filter</a>
      </Modal>

      {/* Cities popup modal */}
      <Modal title="City" className="popup-filters" visible={isCityModalVisible} onCancel={handleCancelCity} footer={[]} >
        <Input placeholder="Filter" />
        <Checkbox >ARLINGTON</Checkbox>
        <Checkbox >BEDFORD</Checkbox>
        <Checkbox >BIG LAKE</Checkbox>
        <Checkbox >BOWLING GREEN</Checkbox>
        <Checkbox >BYRON</Checkbox>
        <Checkbox >CERRITOS</Checkbox>
        <Checkbox >CHARLOTTE</Checkbox>
        <Checkbox >CHEHALIS</Checkbox>
        <a className="apply-filter">Apply Filter</a>
      </Modal>


    </>
  );
};

export default CountryStateCity;
