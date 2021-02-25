import ImgFine from "./ImgFinance";
import FinanceIt from "./FinanceIt";
import FineForm from "./FineForm";

const Index = ({finance}) => {
  return (
    <div className="mainfiance-section">
      <div id="header-area-space"></div>
      <ImgFine />
      <FinanceIt finance = { finance } />
      <FineForm />
    </div>
  );
};

export default Index;
