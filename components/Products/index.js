import Equipments from '../Home/Equipments';
import List from './List';
import Filters from './Filters';
import EmailBlock from './Email_Block';
import './Listing_Page.css'
const Index = () => {
    return (
      <div className="">
         <Equipments />
         <EmailBlock />
         <div className="filter-listing-block">
              <Filters />
              <List />
         </div>
        Products Listing
      </div>
    );
  };
  
  export default Index;
  