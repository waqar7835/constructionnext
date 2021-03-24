import ImgFine from "./ImgFinance";
import FinanceIt from "./FinanceIt";
import FineForm from "./FineForm";
import Disclaim from "../Common/Disclaimer";

const Index = ({ finance }) => {
  return (
    <div className="mainfiance-section">
      <div id="header-area-space"></div>
      <ImgFine />
      <FinanceIt finance={finance} />
      <Disclaim />
      {/* <FineForm />    //// to remove for new changes*/}
    </div>
  );
};

export default Index;
