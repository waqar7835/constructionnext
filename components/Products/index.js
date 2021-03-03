import Equipments from "../Common/Equipments";
import List from "./List";
import Filters from "./Filters";
import EmailBlock from "./EmailBlock";
import EmailBlockv from "./EmailBlockv";
import "./Listing_Page.css";

const Index = ({ year_min, year_max, price_min, price_max }) => {
  return (
    <>
      <div id="header-area-space"></div>
      <div className="product-listing-page">
        <div className=" bg-common-style">
          <div className=" ">
            <Equipments />
            <div className="container">
              <EmailBlockv />
              {/* <EmailBlock /> */}
            </div>
          </div>
          <div className="container">
            <div className="filter-listing-block  ">
              <Filters
                year_min={year_min}
                year_max={year_max}
                price_min={price_min}
                price_max={price_max}
              />
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
