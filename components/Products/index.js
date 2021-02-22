import Equipments from '../Common/Equipments';
import List from './List';
import Filters from './Filters';
import EmailBlock from './Email_Block';
import './Listing_Page.css'
const Index = () => {
  return (
    <>
      <div id="header-area-space"></div>
      <div className="product-listing-page">
        <div className=" bg-gray2 bg-common-style">
          <div className="container">
            <Equipments />
            <EmailBlock />
            <div className="filter-listing-block">
              <Filters />
              <List />
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Index;
