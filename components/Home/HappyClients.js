import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getClients from "@store/actions/clients";
import ReactHtmlParser from "react-html-parser";
import { baseURL } from "@config/config";

const HappyClients = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
  useEffect(() => {
    dispatch(getClients());
  }, []);
  return (
    <div>
      {clients.map((val, index) => (
        <div class="feedback-review-layout1 shadow-equal2" key={index}>
          <div class="media">
            <div class="media-left">
              <div class="media-object">
                <img
                  src={baseURL + val.image_uri}
                  width="80"
                  height="80"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div class="media-body">
              <h3 class="media-heading">
                <a>{val.title}</a>
              </h3>
              <div class="description"> {ReactHtmlParser(val.body)}</div>
              <span>{val.designation}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HappyClients;
