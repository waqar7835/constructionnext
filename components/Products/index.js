import Equipments from '../Common/Equipments';
import List from './List';
import Filters from './Filters';
import EmailBlock from './EmailBlock';
import './Listing_Page.css'
const Index = () => {
    return (
      <div className="container">
         <Equipments />
         <EmailBlock />
         <div className="filter-listing-block">
              <Filters />
              <List />
         </div>
       
      </div>
    );
  };
  
  export default Index;
  