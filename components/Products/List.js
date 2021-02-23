import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input, Menu } from "antd";
const { TextArea } = Input;
import VideoChatModal from "./VideoChatModal";
import EmailSellerModal from "./EmailSellerModal";

import { useDispatch, useSelector } from "react-redux";
import getProductsData from "@store/actions/products";
import { baseURL } from "@config/config";

const List = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products.products);
  console.log("productsData : ", productsData);
  useEffect(() => {
    dispatch(getProductsData());
  }, []);
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
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
  return (
    <div className="listing-content col-md-9 col-xs-12">
      {productsData.map((product, index) => (
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
              <div className="invent-cus-created">
                updated: Mon, 02/15/2021 - 15:53
              </div>
              <div className="invent-cus-body">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an
                </p>
              </div>
            </div>

            <div className="invent-pro-cus-mid">
              <div className="invent-cus-title">{product.title}</div>
              <div className="invent-cus-des">{product.field_description}</div>
              <div className="invent-cus-price">
                <span>Price:</span>{ product.field_price }
              </div>
              <div className="invent-cus-purchas-cus">
                <span>                 
                  <i class="fa fa-money" aria-hidden="true"></i>
                </span>
                <a href="#"> </a>
              </div>
              <div className="invent-cus-machloc">
                <span>Machine Location:</span> { product.field_machine_location }
              </div>
              <div className="invent-cus-rhrs">
                <span>Hours:</span> {product.field_hours}
              </div>
              <div className="invent-cus-snum">
                <span>Serial Numbers:</span> {product.field_serial_numbers}
              </div>
              <div className="invent-cus-cond">
                <span>Condition:</span> {product.field_condition}
              </div>
              <div className="invent-cus-stnum">
                <span>Stock Number:</span> {product.field_stock_number}
              </div>
              <div className="invent-cus-bucket">
                <span>Bucket:</span> {product.field_bucket}
              </div>
              <div className="invent-cus-ac">
                <span>A/C:</span> {product.field_a_c}
              </div>
              <div className="invent-cus-heater">
                <span>Heater:</span> {product.field_heater}
              </div>
              <div className="invent-cus-rnum-fend">
                <span>Number of Fanders:</span> {product.field_fenders}
              </div>
              <div className="invent-cus-buc-cap">
                <span>Bucket Capacity</span> {product.field_bucket_capacity}
              </div>
            </div>
            <div className="invent-pro-cus-rt">
              <div className="manf-detail">
                <div className="lister-dealer-info">
                  <p>
                    <a href="#">Lorem Ipsum has</a>
                  </p>
                  <p>Lorem Ipsum has has t</p>
                  <p>
                    <span>Phone:</span> 7483804
                  </p>
                </div>
                <div className="products-info-btns">
                  <Link href={`/inventory/${product.title.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()}/${product.nid}`}>
                    <a>View Details</a>
                  </Link>
                  {/* <a href="/inventory/listing/skid-steers-2"></a> */}
                  <EmailSellerModal />
                  <VideoChatModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
