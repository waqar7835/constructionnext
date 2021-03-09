import React, { useEffect } from "react";
import Link from "next/link";
import { Menu } from "antd";
import VideoChatModalv from "./VideoChatModelv";
import EmailSellerModalv from "./EmailSellerModalv";
import { SET_LOADER } from "store/actions/type";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import getProductsData from "@store/actions/products";
import { baseURL } from "@config/config";
import { Pagination } from "antd";
import scrollToHeader from "@store/actions/scroll";

const List = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products.products);
  let array = [];
  // useEffect(() => {
  //   dispatch(getProductsData());
  // }, []);
  useEffect(() => {
    let req = router.asPath.split("?")[1] ? router.asPath.split("?")[1] : "";
  //  console.log(req);
    dispatch({
      type: SET_LOADER,
      payload: true,
    });
    dispatch(getProductsData(req));
  }, [router.query]);
  // console.log("prod->", productsData);
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Apple
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Android
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Other
        </a>
      </Menu.Item>
    </Menu>
  );
  const timemenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          8am-12pm
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          12pm-3pm
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          3pm-6pm
        </a>
      </Menu.Item>
    </Menu>
  );
  const daymenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Monday-Februry 22
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Tuesday-Februry 23
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Wednessday-Februry 24
        </a>
      </Menu.Item>
    </Menu>
  );
  // const gettitle = () => {
  //   let current = 0;
  //   let per_page = 0;
  //   let total = 0;
  //   if (!!productsData.pager) {
  //     const {
  //       current_page = 0,
  //       items_per_page = 0,
  //       total_items = 0,
  //     } = productsData.pager;
  //     current = parseInt(current_page);
  //     per_page = parseInt(items_per_page);
  //     total = parseInt(total_items);
  //   }

  //   return (
  //     <>
  //       <span className="list-title-text">Equipment For Sale </span>
  //       <span className="list-listings-count">
  //         {current * per_page + 1} -{" "}
  //         {(current + 1) * per_page > total
  //           ? total
  //           : (current + 1) * per_page}{" "}
  //         of {total} Listings
  //       </span>
  //     </>
  //   );
  // };

  return (
    <div
      id="listing-content-results"
      className="listing-content col-md-9 col-xs-12"
    >
      {/* <div className="views-header">
        <h3 className="list-title">{gettitle()}</h3>
      </div> */}

      <div className="views-row-main">
        {!!productsData.rows &&
          productsData.rows.map((product, index) => (
            <div key={index} className="views-row">
              <div className="invent-pro-cus">
                <div className="invent-pro-cus-lft">
                  <div className="invent-cus-img">
                    <img
                      src={baseURL + product.field_image}
                      width="1064"
                      height="768"
                      alt={product.title}
                      loading="lazy"
                      typeof="Image"
                    />
                  </div>
                  {/* <div className="invent-cus-created">
                    updated: Mon, 02/15/2021 - 15:53
                  </div>
                  <div className="invent-cus-body">
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an
                    </p>
                  </div> */}
                </div>

                <div className="invent-pro-cus-mid">
                  <div className="invent-cus-title">{product.title}</div>
                  <div className="invent-cus-des">
                    {product.field_description}
                  </div>
                  <div className="invent-cus-price eqinfo">
                    <span className="eq-label">Price:</span>
                    <span className="eq-info">${product.field_price}</span>
                  </div>
                  <div className="invent-cus-purchas-cus eqinfo">
                    <span>
                      <i className="fa fa-money" aria-hidden="true"></i>
                    </span>
                    <a href="#"> </a>
                  </div>
                  <div className="invent-cus-machloc bold eqinfo">
                    <span className="eq-label">Machine Location:</span>{" "}
                    <span className="eq-info"> {product.field_machine_location}</span>
                  </div>
                  <div className="invent-cus-rhrs bold eqinfo">
                    <span className="eq-label">Hours:</span> 
                    <span className="eq-info">{product.field_hours}</span>
                  </div>
                  <div className="invent-cus-snum bold eqinfo">
                    <span className="eq-label">Serial Numbers:</span> 
                    <span className="eq-info">{product.field_serial_numbers}</span>
                  </div>
                  <div className="invent-cus-cond bold eqinfo">
                    <span className="eq-label">Condition:</span> 
                    <span className="eq-info">{product.field_condition}</span>
                  </div>
                  <div className="invent-cus-cond bold eqinfo">
                    <span className="eq-label">ListingType:</span> 
                    <span className="eq-info">{product.field_listing_type}</span>
                  </div>
                  <div className="invent-cus-manuf bold eqinfo">
                    <span className="eq-label">Manufacturer:</span>
                    <span className="eq-info">{product.field_category}</span> 
                  </div>
                  <div className="invent-cus-eq-cat bold eqinfo">
                    <span className="eq-label">Category:</span>
                    <span className="eq-info">{product.field_equipment_category}</span> 
                  </div>
                  <div className="invent-cus-slc-cat bold eqinfo">
                    <span className="eq-label">Equipment:</span>
                    <span className="eq-info">{product.field_select_equipment}</span> 
                  </div>
                  <div className="invent-cus-city bold eqinfo">
                    <span className="eq-label">city:</span>
                    
                     <span className="eq-info">{product.field_city}</span>
                    
                  </div>
                  <div className="invent-cus-city bold eqinfo">
                    <span className="eq-label">state:</span>
                    
                     <span className="eq-info">{product.field_state}</span>
                    
                  </div>
                  {/* <div className="invent-cus-stnum bold">
                    <span>Stock Number:</span> {product.field_stock_number}
                  </div> */}
                  {/* <div className="invent-cus-bucket bold">
                    <span>Bucket:</span> {product.field_bucket}
                  </div> */}
                  {/* <div className="invent-cus-ac bold">
                    <span>A/C:</span> {product.field_a_c}
                  </div>
                  <div className="invent-cus-heater bold">
                    <span>Heater:</span> {product.field_heater}
                  </div>
                  <div className="invent-cus-rnum-fend bold">
                    <span>Number of Fanders:</span> {product.field_fenders}
                  </div>
                  <div className="invent-cus-buc-cap bold">
                    <span>Bucket Capacity</span> {product.field_bucket_capacity}
                  </div> */}
                </div>
                <div className="invent-pro-cus-rt">
                  <div className="manf-detail">
                  <div className="lister-dealer-info">
                     <h6>Contact Information</h6>
                      <p>
                        <a href="#">Lam Supply LLC</a>
                      </p>
                      <p>{product.field_machine_location} </p>
                      <p>
                        <span>Phone:</span>  +1 408-610-7177
                      </p>
                      <p><span>Contact:</span> Tinh Lam</p>
                    </div>
                    <div className="products-info-btns">
                      <Link
                        href={`/inventory/${product.title
                          .replace(/[^a-z0-9_]+/gi, "-")
                          .replace(/^-|-$/g, "")
                          .toLowerCase()}/${product.nid}`}
                      >
                        <a>
                          <i className="fa fa-search" aria-hidden="true"></i>{" "}
                          View Details
                        </a>
                      </Link>
                      {/* <a href="/inventory/listing/skid-steers-2"></a> */}
                      {/* <EmailSellerModal /> */}
                      <EmailSellerModalv />
                      <VideoChatModalv />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="view-footer">
        {!!productsData.pager && (
          <Pagination
            current={parseInt(productsData.pager.current_page) + 1}
            total={parseInt(productsData.pager.total_items)}
            pageSize={parseInt(productsData.pager.items_per_page)}
            onChange={(value) => {
              const basePath = router.asPath.split("?")[0] || Router.asPath;
              let query = { ...router.query, page: value - 1 };
              const url = { pathname: router.pathname, query };
              const urlAs = { pathname: basePath, query };
              dispatch(scrollToHeader());
              router.push(url, urlAs, {
                shallow: true,
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default List;
