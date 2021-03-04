import React, { useState, useEffect } from "react";
import { Collapse, Checkbox, Modal, Form, Input, InputNumber } from "antd";

import { useRouter } from "next/router";
import { RangeSlider } from "rsuite";
import submitFilters from "@store/actions/filters";
import { useDispatch, useSelector } from "react-redux";
import getCityCount from "@store/actions/filters/city";
import getConditionCount from "@store/actions/filters/condition";
import getCountryCount from "@store/actions/filters/country";
import getListingTypeCount from "@store/actions/filters/listingtype";
import getManufacturerCount from "@store/actions/filters/manufacturer";
import getStateCount from "@store/actions/filters/statecount";
import getCategoryCount from "@store/actions/filters/category";
import getMinYear from "@store/actions/filters/minyear";
import getMaxYear from "@store/actions/filters/maxyear";
import getMinPrice from "@store/actions/filters/minprice";
import getMaxPrice from "@store/actions/filters/maxprice";

import e from "cors";
const { Panel } = Collapse;
const CheckboxGroup = Checkbox.Group;
const Filters = () => {
  const dispatch = useDispatch();
  const cityCount = useSelector((state) => state.city.city);

  const conditionCount = useSelector((state) => state.condition.condition);
  const countryCount = useSelector((state) => state.country.country);
  const listingTypeCount = useSelector(
    (state) => state.listingtype.listingtype
  );
  const manufacturerCount = useSelector(
    (state) => state.manufacturer.manufacturer
  );
  const stateCount = useSelector((state) => state.statecount.statecount);
  const categoryCount = useSelector((state) => state.category.category);

  const minyear1 = useSelector((state) => state.minyear.minyear);
  const maxyear1 = useSelector((state) => state.maxyear.maxyear);
  const minprice1 = useSelector((state) => state.minprice.minprice);
  const maxprice1 = useSelector((state) => state.maxprice.maxprice);

  const minyear = parseInt(minyear1);
  const maxyear = parseInt(maxyear1);
  const minprice = parseInt(minprice1);
  const maxprice = parseInt(maxprice1);

  
  useEffect(() => {
    dispatch(getCityCount());
    dispatch(getConditionCount());
    dispatch(getCountryCount());
    dispatch(getListingTypeCount());
    dispatch(getManufacturerCount());
    dispatch(getStateCount());
    dispatch(getCategoryCount());
    dispatch(getMinYear());
    dispatch(getMaxYear());
    dispatch(getMinPrice());
    dispatch(getMaxPrice());
  }, []);

  const router = useRouter();
  const [indeterminateInPopup, setIndeterminateInPopup] = React.useState(true);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checked, setCheckAll] = useState([]);
  const [checkedParentIds, setCheckedParentIds] = useState([]);
  const [checkedChildIds, setCheckedChildIds] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
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
  const [year, setYear] = useState([minyear, maxyear]);
  const [price, setPrice] = useState([minprice, maxprice]);
  const [quickSearch, setQuickSearch] = useState();
  const [grouped_category_trems, setGroupedCategoryTrems] = useState([]);

  useEffect(() => {
    if (router.query) {
      setPrice([
        router.query.price_min || minprice,
        router.query.price_max || maxprice,
      ]);
      setYear([
        router.query.year_min || minyear,
        router.query.year_max || maxyear,
      ]);
    }
    if (router.query.categoury) {
    }
  }, [router.query]);
  useEffect(() => {
    let req = router.asPath.split("?")[1] ? router.asPath.split("?")[1] : "";
    dispatch(getCityCount(req));
    dispatch(getConditionCount(req));
    dispatch(getCountryCount(req));
    dispatch(getListingTypeCount(req));
    dispatch(getManufacturerCount(req));
    dispatch(getStateCount(req));
    dispatch(getCategoryCount(req));
    dispatch(getMinYear(req));
    dispatch(getMaxYear(req));
    dispatch(getMinPrice(req));
    dispatch(getMaxPrice(req));
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
          label: `${mappedElem.name} (${mappedElem.count})`,
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
  useEffect(() => {
    if (!!categoryCount && !!categoryCount.length) {
      setGroupedCategoryTrems(unflatten(categoryCount));
    } else {
      setGroupedCategoryTrems([]);
    }
  }, [categoryCount]);
  useEffect(() => {
    const urlCategoryIds = Array.isArray(router.query["categoury[]"])
      ? router.query["categoury[]"]
      : [router.query["categoury[]"]];
    if (
      urlCategoryIds.length &&
      grouped_category_trems.length &&
      !Object.keys(checkedIds).length
    ) {
      urlCategoryIds.forEach((urlId) => {
        let itemFound;
        grouped_category_trems.forEach((category) => {
          itemFound = category.children.find((x) => x.tid == urlId);
          if (itemFound) {
            let childIds = category.children.map((child) => child.tid);

            var filtered = childIds.filter(function (e) {
              return this.indexOf(e) > -1;
            }, urlCategoryIds);
            setCheckedIds((prev) => {
              const updatedCats = {
                ...prev,
                [category.tid]: filtered,
              };
              return updatedCats;
            });
          }
        });
      });
    }
  }, []);

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
  const showCityModal = () => {
    setIsCityModalVisible(true);
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

  const onClickApplyCatFilter = () => {
    let ids = [];
    Object.keys(checkedIds).forEach((key) => ids.push(...checkedIds[key]));
    // if (
    //   Object.keys(checkedIds) &&
    //   updatedCats[item.tid] &&
    //   updatedCats[item.tid].length == item.children.length
    // ) {
    //   ids.push(...Object.keys(updatedCats));
    // }
    setIsCatModalVisible(false);
    onChangeCategoury(ids);
    // applyFilter({
    //   categoury: list,
    //   city,
    //   country,
    //   state,
    //   manufacturer,
    //   listingType,
    //   condition,
    //   year,
    //   price,
    //   quickSearch,
    // });
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
      if (!arraysEqual([minyear, maxyear], params.year)) {
        const [year_min, year_max] = params.year;
        str += `&year_min=${year_min}&year_max=${year_max}`;
      }
    }
    if (!isEmpty(params.price)) {
      if (!arraysEqual([minprice, maxprice], params.price)) {
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
    // router.push(`/${str}`, `/inventory/search${str}`, { shallow: true });
    router.push(`/inventory/search${str}`, `/inventory/search${str}`, {
      shallow: true,
    });
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
            placeholder="Enter your search keyword"
            value={quickSearch}
            onChange={(e) => {
              setQuickSearch(e.target.value);
            }}
          />
          <button className="apply-filter btn-str-up2" onClick={submitHandler}>
            <i className="icofont icofont-search"></i>
          </button>
        </Form.Item>
        {(!!listingTypeCount.length || !!conditionCount.length) && (
          <Collapse
            defaultActiveKey={!!listingTypeCount.length ? ["5"] : ["6"]}
          >
            {!!listingTypeCount.length && (
              <Panel header="Listing Type" key="5">
                <Checkbox.Group
                  style={{ width: "100%" }}
                  name="listingType"
                  onChange={onChangeListingType}
                >
                  {listingTypeCount.map((item, key) => (
                    <Checkbox key={key} value={item.value}>
                      {`${item.label} ${item.count}`}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </Panel>
            )}
            {!!conditionCount.length && (
              <Panel header="Condition" key="6">
                <Checkbox.Group
                  style={{ width: "100%" }}
                  name="condition"
                  onChange={onChangeCondition}
                >
                  {conditionCount.map((item, key) => (
                    <Checkbox key={key} value={item.value}>
                      {`${item.label} ${item.count}`}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </Panel>
            )}
          </Collapse>
        )}
        <Collapse defaultActiveKey={["1"]}>
          {!!grouped_category_trems.length && (
            <Panel header="Category" key="1">
              {grouped_category_trems.slice(0, 2).map((item, key) => {
                let count = 0 ;
                {item.children.map((intc,key) =>{
                    let int = parseInt(intc.count);
                    count = count + int;
                    return{
                      count
                    }
                 })}
               
               return (<div key={key}>
                  <Checkbox
                    value={item.value}
                    indeterminate={indeterminate}
                    onChange={(e) => {
                      if (e.target.checked) {
                        const parentId = item.tid;
                        const childIds = item.children.map(
                          (child) => child.tid
                        );
                        setCheckedIds((prev) => {
                          const updatedCats = { ...prev, [parentId]: childIds };
                          let ids = [];
                          Object.keys(updatedCats).forEach((key) =>
                            ids.push(...updatedCats[key])
                          );
                          ids.push(...Object.keys(updatedCats));
                          onChangeCategoury(ids);
                          return updatedCats;
                        });
                      } else {
                        const updatedCats = Object.keys(checkedIds)
                          .filter((key) => key !== item.tid)
                          .reduce(
                            (res, key) => ((res[key] = checkedIds[key]), res),
                            {}
                          );
                        let ids = [];
                        Object.keys(updatedCats).forEach((key) =>
                          ids.push(...updatedCats[key])
                        );
                        ids.push(...Object.keys(updatedCats));
                        onChangeCategoury(ids);
                        setCheckedIds(updatedCats);
                      }
                    }}
                    checked={
                      Object.keys(checkedIds) &&
                      checkedIds[item.tid] &&
                      checkedIds[item.tid].length == item.children.length
                    }
                  >
                     {`${item.name} (${count})`}
                  </Checkbox>
                  <CheckboxGroup
                    value={checkedIds[item.tid]}
                    options={item.children}
                    onChange={(list) => {
                      let parentId = item.tid;
                      setCheckedIds((prev) => {
                        const updatedCats = { ...prev, [parentId]: list };
                        let ids = [];
                        Object.keys(updatedCats).forEach((key) =>
                          ids.push(...updatedCats[key])
                        );
                        if (
                          Object.keys(updatedCats) &&
                          updatedCats[item.tid] &&
                          updatedCats[item.tid].length == item.children.length
                        ) {
                          ids.push(...Object.keys(updatedCats));
                        }
                        onChangeCategoury(ids);
                        return updatedCats;
                      });
                    }}
                  />
                </div>)
})}

              <a onClick={showCatModal} className="apply-filter">
                + Show All
              </a>
            </Panel>
          )}
          {!!manufacturerCount.length && (
            <Panel header="Manufacturer" key="2">
              <Checkbox.Group
                style={{ width: "100%" }}
                name="manufacturer"
                onChange={onChangeManufacturer}
              >
                <Form.Item label="Popular">
                  {manufacturerCount.slice(0, 4).map((item, key) => (
                    <Checkbox key={key} value={item.value}>
                      {`${item.label} ${item.count}`}
                    </Checkbox>
                  ))}
                </Form.Item>
              </Checkbox.Group>
              <a onClick={showManModal} className="apply-filter">
                + Show All
              </a>
            </Panel>
          )}
          <Panel header="Year" key="4" className="number-ranges">
            <InputNumber
              min={minyear}
              max={maxyear}
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
              min={minyear}
              max={maxyear}
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
              min={minyear}
              max={maxyear}
              style={{ marginTop: 16 }}
              value={year}
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
              min={minprice}
              max={maxprice}
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
              min={minprice}
              max={maxprice}
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
              min={minprice}
              max={maxprice}
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
        {(!!countryCount.length ||
          !!stateCount.length ||
          !!cityCount.length) && (
          <Collapse
            defaultActiveKey={
              !!countryCount.length
                ? ["1"]
                : !!stateCount.length
                ? ["2"]
                : ["3"]
            }
          >
            {!!countryCount.length && (
              <Panel header="Country" key="1">
                <Checkbox.Group
                  style={{ width: "100%" }}
                  name="country"
                  onChange={onChangeCountry}
                >
                  {countryCount.slice(0, 4).map((item, key) => (
                    <Checkbox key={key} value={item.value}>
                      {`${item.label} ${item.count}`}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </Panel>
            )}
            {!!stateCount.length && (
              <Panel header="State" key="2">
                <Checkbox.Group
                  style={{ width: "100%" }}
                  name="state"
                  onChange={onChangeState}
                >
                  {stateCount.slice(0, 4).map((item, key) => (
                    <Checkbox key={key} value={item.value}>
                      {`${item.label} ${item.count}`}
                    </Checkbox>
                  ))}
                  <a onClick={showStateModal} className="apply-filter">
                    + Show All
                  </a>
                </Checkbox.Group>
              </Panel>
            )}
            {!!cityCount.length && (
              <Panel header="City" key="3">
                <Checkbox.Group
                  style={{ width: "100%" }}
                  name="city"
                  onChange={onChangeCity}
                >
                  {cityCount.slice(0, 4).map((item, key) => (
                    <Checkbox key={key} value={item.value}>
                      {`${item.label} ${item.count}`}
                    </Checkbox>
                  ))}
                  <a onClick={showCityModal} className="apply-filter">
                    + Show All
                  </a>
                </Checkbox.Group>
              </Panel>
            )}
          </Collapse>
        )}
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
            {stateCount.map((item, key) => (
              <Checkbox key={key} value={item.value}>
                {`${item.label} ${item.count}`}
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
            {cityCount.map((item, key) => (
              <Checkbox key={key} value={item.value}>
                {`${item.label} ${item.count}`}
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
        {grouped_category_trems.map((item, key) => {
           let count = 0 ;
           {item.children.map((intc,key) =>{
               let int = parseInt(intc.count);
               count = count + int;
               return{
                 count
               }
            })}            
         return( 
           <div key={key} className="antd-groupcheckbox-cus">
            <Checkbox
              indeterminate={indeterminateInPopup}
              onChange={(e) => {
                if (e.target.checked) {
                  const parentId = item.tid;
                  const childIds = item.children.map((child) => child.tid);
                  if (Object.keys(checkedIds).length) {
                    setCheckedIds((prev) => {
                      return { ...prev, [parentId]: childIds };
                    });
                  } else {
                    setCheckedIds({ [parentId]: childIds });
                  }
                } else {
                  setCheckedIds(
                    Object.keys(checkedIds)
                      .filter((key) => key !== item.tid)
                      .reduce(
                        (res, key) => ((res[key] = checkedIds[key]), res),
                        {}
                      )
                  );
                }
              }}
              checked={
                Object.keys(checkedIds) &&
                checkedIds[item.tid] &&
                checkedIds[item.tid].length == item.children.length
              }
            >
              {item.label}
            </Checkbox>
            <CheckboxGroup
              value={checkedIds[item.tid]}
              options={item.children}
              onChange={(list) => {
                let parentId = item.tid;
                if (Object.keys(checkedIds).length) {
                  setCheckedIds((prev) => {
                    return { ...prev, [parentId]: list };
                  });
                } else {
                  setCheckedIds({ [parentId]: list });
                }
              }}
            />
          </div>
          )})}
        <a onClick={onClickApplyCatFilter} className="apply-filter">
          Apply Filter
        </a>
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
            {manufacturerCount.map((item, key) => (
              <Checkbox key={key} value={item.value}>
                {`${item.label} ${item.count}`}
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
