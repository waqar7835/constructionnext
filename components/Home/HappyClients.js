import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getClients from "@store/actions/clients";
import ReactHtmlParser from "react-html-parser";
import { baseURL } from "@config/config";

const HappyClients = ( {feedback}) => {
  
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
  useEffect(() => {
    dispatch(getClients());
  }, []);
  return (
    <div className="section-space-default bg-common-style">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2>
               {!!feedback && feedback.title}
              </h2>             
              {ReactHtmlParser(!!feedback && feedback.body)}        
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="g-feedback">
            {clients.map((val, index) => (
              <div className="feedback-review-layout1 shadow-equal2" key={index}>
                <div className="media">
                  <div className="media-left">
                    <div className="media-object">
                      <img
                        src={baseURL + val.image_uri}
                        width="80"
                        height="80"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">
                      <a>{val.title}</a>
                    </h3>
                    <div className="description"> {ReactHtmlParser(val.body)}</div>
                    <span>{val.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default HappyClients;
