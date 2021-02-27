import React, { useState, useEffect } from "react";
import { Collapse, Checkbox, Modal, Form, Input, InputNumber } from "antd";

import { useRouter } from "next/router";
import { RangeSlider } from "rsuite";
import submitFilters from "@store/actions/filters";
const initYear = [1980, 2021];
const initPrice = [0, 50000];
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;
const Filters = ({
  city_trems,
  state_trems,
  country_trems,
  condition_trems,
  listing_type_trems,
  manufacturer_trems,
  category_trems,
}) => {
  const router = useRouter();
  const [indeterminateInPopup, setIndeterminateInPopup] = React.useState(true);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checked, setCheckAll] = useState(false);
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
  const [year, setYear] = useState(initYear);
  const [price, setPrice] = useState(initPrice);
  const [quickSearch, setQuickSearch] = useState();

  useEffect(() => {
   // console.log(router.query);
  }, []);
  useEffect(() => {
    console.log(router.query);
  }, [router.query]);
  const unflatten = (arr) => {
    var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;

    // First map the nodes of the array to an object -> create a hash table.
    for (var i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem.tid] = arrElem;
      mappedArr[arrElem.tid]["children"] = [];
    }

    for (var tid in mappedArr) {
      if (mappedArr.hasOwnProperty(tid)) {
        mappedElem = mappedArr[tid];
        mappedElem = {
          label: mappedElem.name,
          value: mappedElem.tid,
          ...mappedElem,
        };
        // If the element is not at the root level, add it to its parent array of children.
        if (mappedElem.pid) {
          mappedArr[mappedElem["pid"]]["children"].push(mappedElem);
        }
        // If the element is at the root level, add it to first level elements array.
        else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  };
  const grouped_category_trems = !!category_trems
    ? unflatten(category_trems)
    : [];

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

  const handleCancel = () => {
    setIsCatModalVisible(false);
  };
  const handleCancelMan = () => {
    setIsManModalVisible(false);
  };

  //  for group checkboxes of  category

  const onChangeCategoury = (list) => {
    setCategoury(list);
    applyFilter({
      categoury: list,
      city,
      country,
      state,
      manufacturer,
      listingType,
      condition,
      year,
      price,
      quickSearch,
    });
  };

  function submitHandler(e) {
    e.preventDefault();
    applyFilter({
      quickSearch,
      city,
      state,
      country,
      categoury,
      manufacturer,
      listingType,
      condition,
      year,
      price,
    });
  }
  function onChangeCondition(value) {
    setCondition(value);
    applyFilter({
      condition: value,
      city,
      state,
      categoury,
      country,
      manufacturer,
      listingType,
      year,
      price,
      quickSearch,
    });
  }
  function onChangeListingType(value) {
    setListingType(value);
    applyFilter({
      listingType: value,
      city,
      state,
      categoury,
      country,
      manufacturer,
      condition,
      year,
      price,
      quickSearch,
    });
  }
  function onChangeManufacturer(value) {
    setManufacturer(value);
    applyFilter({
      manufacturer: value,
      city,
      state,
      categoury,
      country,
      listingType,
      condition,
      year,
      price,
      quickSearch,
    });
  }
  function onChangeCountry(value) {
    setCountry(value);
    applyFilter({
      country: value,
      city,
      state,
      categoury,
      manufacturer,
      listingType,
      condition,
      year,
      price,
      quickSearch,
    });
  }
  function onChangeState(value) {
    setState(value);
    applyFilter({
      state: value,
      city,
      country,
      categoury,
      manufacturer,
      listingType,
      condition,
      year,
      price,
      quickSearch,
    });
  }
  function onChangeCity(value) {
    setCity(value);
    applyFilter({
      city: value,
      state,
      country,
      categoury,
      manufacturer,
      listingType,
      condition,
      year,
      price,
      quickSearch,
    });
  }
  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }
  const applyFilter = (params) => {
    const { equipment } = router.query;
    let str = "";
    if (!!equipment) {
      str = `?equipment=${equipment}`;
    }

    if (!isEmpty(params.country)) {
      params.country.map((item) => {
        str += `&country[]=${item}`;
      });
    }
    if (!isEmpty(params.city)) {
      params.city.map((item) => {
        str += `&city[]=${item}`;
      });
    }
    if (!isEmpty(params.state)) {
      params.state.map((item) => {
        str += `&state[]=${item}`;
      });
    }
    if (!isEmpty(params.categoury)) {
      params.categoury.map((item) => {
        str += `&categoury[]=${item}`;
      });
    }
    if (!isEmpty(params.manufacturer)) {
      params.manufacturer.map((item) => {
        str += `&manufacturer[]=${item}`;
      });
    }
    if (!isEmpty(params.listingType)) {
      params.listingType.map((item) => {
        str += `&listing_type[]=${item}`;
      });
    }
    if (!isEmpty(params.condition)) {
      params.condition.map((item) => {
        str += `&condition[]=${item}`;
      });
    }
    if (!isEmpty(params.year)) {
      if (!arraysEqual(initYear, params.year)) {
        const [year_min, year_max] = params.year;
        str += `&year_min=${year_min}&year_max=${year_max}`;
      }
    }
    if (!isEmpty(params.price)) {
      if (!arraysEqual(initPrice, params.price)) {
        const [price_min, price_max] = params.price;
        str += `&price_min=${price_min}&price_max=${price_max}`;
      }
    }
    // equipment
    if (!isEmpty(params.quickSearch)) {
      if (!!params.quickSearch) {
        str += "&keywords=" + params.quickSearch;
      }
    }
    str = setCharAt(str, 0, "?");
    submitFilters({ str });
    router.push(`/${str}`, `/inventory/search${str}`, { shallow: true });
  };
  const isEmpty = (array) => {
    return Array.isArray(array) && (array.length == 0 || array.every(isEmpty));
  };
  const arraysEqual = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };
  return (
    <div className="filters-block left-side-filters col-md-3 col-xs-12">
      <form className="views-exposed-form left-side-filterseach">
        <Form.Item label="Quick Search">
          <Input
            className="form-control top-input"
            placeholder="Enter your postal code"
            value={quickSearch}
            onChange={(e) => {
              setQuickSearch(e.target.value);
            }}
          />
          <button className="apply-filter btn-str-up2" onClick={submitHandler}>
            <i className="icofont icofont-search"></i>
          </button>
        </Form.Item>

        <Collapse defaultActiveKey={["5"]}>
          <Panel header="Listing Type" key="5">
            <Checkbox.Group
              style={{ width: "100%" }}
              name="listingType"
              onChange={onChangeListingType}
            >
              {listing_type_trems.map((item, key) => (
                <Checkbox key={key} value={item.tid}>
                  {item.name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Panel>
          <Panel header="Condition" key="6">
            <Checkbox.Group
              style={{ width: "100%" }}
              name="condition"
              onChange={onChangeCondition}
            >
              {condition_trems.map((item, key) => (
                <Checkbox key={key} value={item.tid}>
                  {item.name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Panel>
        </Collapse>

        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Category" key="1">
            {grouped_category_trems.slice(0, 2).map((item, key) => (
              <div key={key}>
                <Checkbox
                  value={item.value}
                  indeterminate={indeterminate}
                  onChange={(e) => {
                  }}
                  checked={checked}
                >
                  {item.label}
                </Checkbox>
                <CheckboxGroup
                  options={item.children}
                  onChange={(list) => {
                    setCheckAll(item.children.length == list.length);
                  }}
                />
              </div>
            ))}

            <a onClick={showCatModal} className="apply-filter">
              + Show All
            </a>
          </Panel>
          <Panel header="Manufacturer" key="2">
            <Checkbox.Group
              style={{ width: "100%" }}
              name="manufacturer"
              onChange={onChangeManufacturer}
            >
              <Form.Item label="Popular">
                {manufacturer_trems.slice(0, 4).map((item, key) => (
                  <Checkbox key={key} value={item.tid}>
                    {item.name}
                  </Checkbox>
                ))}
              </Form.Item>
            </Checkbox.Group>
            <a onClick={showManModal} className="apply-filter">
              + Show All
            </a>
          </Panel>
          <Panel header="Year" key="4" className="number-ranges">
         
            <InputNumber
              min={initYear[0]}
              max={initYear[1]}
              value={year[0]}
              disabled={true}
              onChange={(nextValue) => {
                const [start, end] = year;
                if (nextValue > end) {
                  return;
                }
                setYear([nextValue, end]);
                applyFilter({
                  year: [start, end],
                  city,
                  state,
                  categoury,
                  country,
                  manufacturer,
                  listingType,
                  condition,
                  price,
                  quickSearch,
                });
              }}
            />
            <InputNumber
              min={initYear[0]}
              max={initYear[1]}
              value={year[1]}
              disabled={true}
              onChange={(nextValue) => {
                const [start, end] = year;
                if (start > nextValue) {
                  return;
                }
                setYear([start, nextValue]);
                applyFilter({
                  year: [start, nextValue],
                  city,
                  state,
                  categoury,
                  country,
                  manufacturer,
                  listingType,
                  condition,
                  price,
                  quickSearch,
                });
              }}
            />
            <RangeSlider
              progress
              style={{ marginTop: 16 }}
              onChange={(value) => {
                setYear(value);
              }}
              onMouseUp={() => {
                applyFilter({
                  year: year,
                  city,
                  state,
                  categoury,
                  country,
                  manufacturer,
                  listingType,
                  condition,
                  price,
                  quickSearch,
                });
              }}
            />
          </Panel>
          <Panel header="Price" key="7" className="number-ranges">
            <InputNumber
              min={initPrice[0]}
              max={initPrice[1]}
              value={price[0]}
              disabled={true}
              onChange={(nextValue) => {
                const [start, end] = price;
                if (nextValue > end) {
                  return;
                }
                setPrice([nextValue, end]);
                applyFilter({
                  price: [nextValue, end],
                  city,
                  state,
                  categoury,
                  country,
                  manufacturer,
                  listingType,
                  condition,
                  year,
                  quickSearch,
                });
              }}
            />
            <InputNumber
              min={initPrice[0]}
              max={initPrice[1]}
              value={price[1]}
              disabled={true}
              onChange={(nextValue) => {
                const [start, end] = price;
                if (start > nextValue) {
                  return;
                }
                setPrice([start, nextValue]);
                applyFilter({
                  price: [start, nextValue],
                  city,
                  state,
                  categoury,
                  country,
                  manufacturer,
                  listingType,
                  condition,
                  year,
                  quickSearch,
                });
              }}
            />
            <RangeSlider
              progress
              style={{ marginTop: 16 }}
              value={price}
              onChange={(value) => {
                setPrice(value);
              }}
              onMouseUp={() => {
                applyFilter({
                  price: price,
                  city,
                  state,
                  categoury,
                  country,
                  manufacturer,
                  listingType,
                  condition,
                  year,
                  quickSearch,
                });
              }}
            />
          </Panel>
        </Collapse>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Country" key="1">
            <Checkbox.Group
              style={{ width: "100%" }}
              name="country"
              onChange={onChangeCountry}
            >
              {country_trems.slice(0, 4).map((item, key) => (
                <Checkbox key={key} value={item.tid}>
                  {item.name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Panel>
          <Panel header="State" key="2">
            <Checkbox.Group
              style={{ width: "100%" }}
              name="state"
              onChange={onChangeState}
            >
              {state_trems.slice(0, 4).map((item, key) => (
                <Checkbox key={key} value={item.tid}>
                  {item.name}
                </Checkbox>
              ))}
              <a onClick={showStateModal} className="apply-filter">
                + Show All
              </a>
            </Checkbox.Group>
          </Panel>
          <Panel header="City" key="3">
            <Checkbox.Group
              style={{ width: "100%" }}
              name="city"
              onChange={onChangeCity}
            >
              {city_trems.slice(0, 4).map((item, key) => (
                <Checkbox key={key} value={item.tid}>
                  {item.name}
                </Checkbox>
              ))}
              <a onClick={showStateModal} className="apply-filter">
                + Show All
              </a>
            </Checkbox.Group>
          </Panel>
        </Collapse>
        {/* state popup modal */}
        <Modal
          className="popup-filters"
          title="State"
          visible={isStateModalVisible}
          onCancel={handleCancelState}
          footer={[]}
        >
          {/* <Input placeholder="Filter" /> */}
          <Checkbox.Group
            style={{ width: "100%" }}
            name="state"
            onChange={onChangeState}
          >
            {state_trems.map((item, key) => (
              <Checkbox key={key} value={item.tid}>
                {item.name}
              </Checkbox>
            ))}
          </Checkbox.Group>
          <a className="apply-filter">Apply Filter</a>
        </Modal>

        {/* Cities popup modal */}
        <Modal
          title="City"
          className="popup-filters"
          visible={isCityModalVisible}
          onCancel={handleCancelCity}
          footer={[]}
        >
          {/* <Input placeholder="Filter" /> */}
          <Checkbox.Group
            style={{ width: "100%" }}
            name="city"
            onChange={onChangeCity}
          >
            {city_trems.map((item, key) => (
              <Checkbox key={key} value={item.tid}>
                {item.name}
              </Checkbox>
            ))}
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
        {grouped_category_trems.map((item, key) => (
          <div key={key} className="antd-groupcheckbox-cus">
            <Checkbox
              indeterminate={indeterminateInPopup}
              onChange={() => {}}
              checked={checked}
            >
              {item.label}
            </Checkbox>
            <CheckboxGroup
              options={item.children}
              onChange={(list) => {
                setCheckAll(item.children.length == list.length);
              }}
            />
           
          </div>
        ))}
         <a className="apply-filter">Apply Filter</a>
      </Modal>

      {/* Manufacturer Modal */}
      <Modal
        title="Manufacturer"
        visible={isManModalVisible}
        onCancel={handleCancelMan}
        footer={[]}
        className="popup-filters"
      >
        <Checkbox.Group
          style={{ width: "100%" }}
          name="manufacturer"
          onChange={onChangeManufacturer}
        >
          <Form.Item label="Popular">
            {manufacturer_trems.map((item, key) => (
              <Checkbox key={key} value={item.tid}>
                {item.name}
              </Checkbox>
            ))}
          </Form.Item>
        </Checkbox.Group>
        <a className="apply-filter">Apply Filter</a>
      </Modal>
    </div>
  );
};

export default Filters;
