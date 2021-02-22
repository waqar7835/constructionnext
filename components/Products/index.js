<<<<<<< HEAD
import Equipments from '@components/Common/Equipments';
=======
import Equipments from '../Common/Equipments';
>>>>>>> e62a77841f0bee7ed99849e29138658cca30076c
import List from './List';
import Filters from './Filters';
import EmailBlock from './Email_Block';
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
  