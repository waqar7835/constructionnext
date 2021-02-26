import React, { useState } from "react";
import { Collapse, Checkbox, Modal, Form, Input, Divider,InputNumber } from "antd";
import YearFilter from "./YearFilter";
import PriceFilter from "./PriceFilter";
import { useRouter } from 'next/router';
import CountryStateCity from "./CountryStateCity";
import { Slider, RangeSlider, InputGroup } from 'rsuite';
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;


const CategouryOptions1 = ["Log Trailers"];
const CategouryOptions2 = ["Conventional Day Cab Trucks", "Dump Trucks"];
const Filters = () => {
  const router = useRouter()
  const [categoryindet2, setCategoryIndet2] = React.useState(true);
  const [categoryindet, setCategoryIndet] = React.useState(true);
  const [checkAllcategoury2, setCheckAllCategoury2] = React.useState(false);
  const [checkAllcategoury, setCheckAllCategoury] = React.useState(false);
  const [catCheckedList, setCatCheckedList] = React.useState([]);
  const [catCheckedList2, setCatCheckedList2] = React.useState([]);



  const [isCatModalVisible, setIsCatModalVisible] = useState(false);
  const [isManModalVisible, setIsManModalVisible] = useState(false);
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);
  const [isStateModalVisible, setIsStateModalVisible] = useState(false);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [categoury, setCategoury] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  const [listingType, setListingType] = useState([]);
  const [condition, setCondition] = useState([]);
  const [year, setYear] = React.useState([10,20]);
  const [price, setPrice] = React.useState([10,20]);
  const [quickSearch, setQuickSearch] = React.useState();
  const [checked, setChecked] = useState(false);


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
  const handleCancel = () => {
    setIsCatModalVisible(false);
  };
  const handleCancelMan = () => {
    setIsManModalVisible(false);
  };
 
  //  for group checkboxes of  category 

  const onChangeCategoury = (list) => {
    setCatCheckedList(list);
    setCategoryIndet(!!list.length && list.length < CategouryOptions1.length);
    setCheckAllCategoury(list.length === CategouryOptions1.length);
    setCategoury([list]);
    applyFilter({ categoury: list, city, country, state, manufacturer, listingType, condition, year, price, quickSearch })

  };  
  const onChangeCategoury2 = (list) => {
    setCatCheckedList2(list);
    setCategoryIndet2(!!list.length && list.length < CategouryOptions2.length);
    setCheckAllCategoury2(list.length === CategouryOptions2.length);
    setCategoury([list]);
    applyFilter({ categoury: list, city, country, state, manufacturer, listingType, condition, year, price, quickSearch })

  };
  const onCheckAllCategoury = (e) => {
    setCatCheckedList(e.target.checked ? CategouryOptions1 : []);

    setCategoryIndet(false);
    setCheckAllCategoury(e.target.checked);
  };
  const onCheckAllCategoury2 = (e) => {
    setCatCheckedList2(e.target.checked ? CategouryOptions2 : []);
    setCategoryIndet2(false);
    setCheckAllCategoury2(e.target.checked);
  };
  function callback(key) {
    console.log(key);
  }


  //  for sending parameters to url
  // function onChangeYear(value) {
  //   setYear([value]);
   
  // }
  function onChangeCondition(value) {
    setCondition([value]);
    applyFilter({ condition: value, city, state, categoury, country,manufacturer, listingType, year, price, quickSearch })
  }
  function onChangeListingType(value) {
    setListingType([value]);  
    applyFilter({ listingType: value, city, state, categoury, country,manufacturer,condition, year, price, quickSearch })
  }
  function onChangeManufacturer(value) {
    setManufacturer([value]);
    applyFilter({ manufacturer: value, city, state, categoury, country,listingType, condition, year, price, quickSearch })
  }
  function onChangeCountry(value) {
    setCountry([value]);
    applyFilter({ country: value, city, state, categoury, manufacturer,listingType, condition, year, price, quickSearch })
  }
  function onChangeState(value) {
    setState([value]);
    applyFilter({ state: value, city, country,categoury, manufacturer,listingType, condition, year, price, quickSearch })
  }
  function onChangeCity(value) {
    setCity([value]);
    applyFilter({ city: value, state, country,categoury, manufacturer,listingType, condition, year, price, quickSearch });
  }
  function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
  const applyFilter = (params) => {

    // console.log(params);
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
    if (!!params.categoury.length) {
      str += "&categoury=" + params.categoury.join(',');
    }
    if (!!params.manufacturer.length) {
      str += "&manufacturer=" + params.manufacturer.join(',');
    }
    if (!!params.listingType.length) { 
      str += "&listingType=" + params.listingType.join(',');     
    }
    if (!!params.condition.length) {
      str += "&condition=" + params.condition.join(',');
    }
    if (!!params.year.length) {
      str += "&year=" + params.year.join(',');
    }
    if (!!params.price.length) {
      str += "&price=" + params.price.join(',');
    }
    if (!!params.quickSearch) {
      str += "&quickSearch=" + params.quickSearch;
    }
    str = setCharAt(str,0,'?');
    
    router.push(`/${str}`, `/inventory/search${str}`, { shallow: true }) 
  }

  return (
    <div className="filters-block left-side-filters col-md-3 col-xs-12">
      <form className="views-exposed-form">
      <Form.Item label="Quick Search">
            <Input
              className="form-control top-input"
              placeholder="Enter your postal code"
              value={quickSearch}
              onChange={(e) =>{ 
                setQuickSearch(e.target.value);
                applyFilter({ quickSearch: e.target.value, city, state, country,categoury, manufacturer,listingType, condition, year, price });
}}
            />
          </Form.Item>

        <Collapse defaultActiveKey={["5"]} onChange={callback}>
          <Panel header="Listing Type" key="5">
          <Checkbox.Group style={{ width: '100%' }} name="listingType" onChange={(onChangeListingType)}>          
              <Checkbox value="forsale">For Sale</Checkbox>            
          </Checkbox.Group>
          
          </Panel>
          <Panel header="Condition" key="6">
          <Checkbox.Group style={{ width: '100%' }} name="condition" onChange={(onChangeCondition)}>          
              <Checkbox value="used">Used</Checkbox>            
          </Checkbox.Group>
          </Panel>
        </Collapse>

        <Collapse defaultActiveKey={["1"]} onChange={callback}>
          <Panel header="Category" key="1">
            <Checkbox
              indeterminate={categoryindet}
              onChange={onCheckAllCategoury}
              checked={checkAllcategoury}
            >
              Semi-Trailers
            </Checkbox>
            <CheckboxGroup options={CategouryOptions1} value={catCheckedList} onChange={onChangeCategoury} />
            <Checkbox
              indeterminate={categoryindet2}
              onChange={onCheckAllCategoury2}
              checked={checkAllcategoury2}
            >
              Heavy Duty Trucks
            </Checkbox>
            <CheckboxGroup options={CategouryOptions2} value={catCheckedList2} onChange={onChangeCategoury2} />
            <a onClick={showCatModal} className="apply-filter">
              + Show All
            </a>
          </Panel>
          <Panel header="Manufacturer" key="2">
          <Checkbox.Group style={{ width: '100%' }} name="manufacturer" onChange={(onChangeManufacturer)}>
            <Form.Item label="Popular">
              <Checkbox value="BOBCAT">BOBCAT</Checkbox>
              <Checkbox value="DOOSAN">DOOSAN</Checkbox>
              <Checkbox value="KUBOTA">KUBOTA</Checkbox>
              <Checkbox value="FREIGHTLINER">FREIGHTLINER</Checkbox>
              <Checkbox value="VIKING">VIKING</Checkbox>
            </Form.Item>
            </Checkbox.Group>
            <a onClick={showManModal} className="apply-filter">
              + Show All
            </a>
          </Panel>
          <Panel header="Year" key="4">
          <InputNumber
            min={0}
            max={100}
            value={year[0]}
            onChange={nextValue => {
              const [start, end] = year;
              if (nextValue > end) {
                return;
              }
              setYear([nextValue, end]);
              applyFilter({ year: end, city, state, categoury, country,manufacturer, listingType, condition, price, quickSearch });
              console.log("input end", nextValue);
            }}
          />         
          <InputNumber
            min={0}
            max={100}
            value={year[1]}
            onChange={nextValue => {
              const [start, end] = year;
              if (start > nextValue) {
                return;
              }
              setYear([start, nextValue]);
              applyFilter({ year: start, city, state, categoury, country,manufacturer, listingType, condition, price, quickSearch });
  console.log("input start", nextValue);

            }}
          />        
        <RangeSlider
          progress
          style={{ marginTop: 16 }}
          value={year}
          onChange={value => {
            setYear(value);
            applyFilter({ year: value, city, state, categoury, country,manufacturer, listingType, condition, price, quickSearch });
  
          }}
        />     
          </Panel>
          <Panel header="Price" key="7">
          <InputNumber
            min={0}
            max={100}
            value={price[0]}
            onChange={nextValue => {
              const [start, end] = price;
              if (nextValue > end) {
                return;
              }
              setPrice([nextValue, end]);
              applyFilter({ price: start, city, state, categoury, country,manufacturer, listingType, condition, year, quickSearch });

            }}
          />         
          <InputNumber
            min={0}
            max={100}
            value={price[1]}
            onChange={nextValue => {
              const [start, end] = price;
              if (start > nextValue) {
                return;
              }
              setPrice([start, nextValue]);
              applyFilter({ price: end, city, state, categoury, country,manufacturer, listingType, condition, year, quickSearch });

            }}
          />        
        <RangeSlider
          progress
          style={{ marginTop: 16 }}
          value={price}
          onChange={value => {
            setPrice(value);
            applyFilter({ price: value, city, state, categoury, country,manufacturer, listingType, condition, year, quickSearch });

          }}
        />     
          </Panel>
        </Collapse>
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
        <Checkbox.Group style={{ width: '100%' }} name="state" onChange={(onChangeState)}>
            <Checkbox value="COLORADO">COLORADO</Checkbox>
            <Checkbox value="FLORIDA">FLORIDA</Checkbox>
            <Checkbox value="GEORGIA">GEORGIA</Checkbox>           
          </Checkbox.Group>
        <a className="apply-filter">Apply Filter</a>
      </Modal>

      {/* Cities popup modal */}
      <Modal title="City" className="popup-filters" visible={isCityModalVisible} onCancel={handleCancelCity} footer={[]} >
        <Input placeholder="Filter" />
        <Checkbox.Group style={{ width: '100%' }} name="city" onChange={(onChangeCity)} >
            <Checkbox value="ARLINGTON">ARLINGTON</Checkbox>
            <Checkbox value="BEDFORD">BEDFORD</Checkbox>
            <Checkbox value="BIG LAKE">BIG LAKE</Checkbox>
            <Checkbox value="BOWLING GREEN">BOWLING GREEN</Checkbox>           
          </Checkbox.Group>
        <a className="apply-filter">Apply Filter</a>
      </Modal>
      </form>
      {/* Category Modal */}
      <Modal
        title="Categories"
        visible={isCatModalVisible}
        onCancel={handleCancel}
        footer={[]}
        className="popup-filters"
      >
         <Checkbox
              indeterminate={categoryindet}
              onChange={onCheckAllCategoury}
              checked={checkAllcategoury}
            >
              Semi-Trailers
            </Checkbox>
            <CheckboxGroup options={CategouryOptions1} value={catCheckedList} onChange={onChangeCategoury} />
            <Checkbox
              indeterminate={categoryindet2}
              onChange={onCheckAllCategoury2}
              checked={checkAllcategoury2}
            >
              Heavy Duty Trucks
            </Checkbox>
            <CheckboxGroup options={CategouryOptions2} value={catCheckedList2} onChange={onChangeCategoury2} />
      </Modal>

      {/* Manufacturer Modal */}
      <Modal
        title="Manufacturer"
        visible={isManModalVisible}
        onCancel={handleCancelMan}
        footer={[]}
        className="popup-filters"
      >
        <Checkbox.Group style={{ width: '100%' }} name="manufacturer" onChange={(onChangeManufacturer)}>
            <Form.Item label="Popular">
              <Checkbox value="BOBCAT">BOBCAT</Checkbox>
              <Checkbox value="DOOSAN">DOOSAN</Checkbox>
              <Checkbox value="KUBOTA">KUBOTA</Checkbox>
              <Checkbox value="FREIGHTLINER">FREIGHTLINER</Checkbox>
              <Checkbox value="VIKING">VIKING</Checkbox>
            </Form.Item>
            </Checkbox.Group>
        <a className="apply-filter">Apply Filter</a>
      </Modal>
    </div>
  );
};

export default Filters;
