import ImgContact from "./ImgContact";
import WhereToFind from "./WhereToFind";
import FormContainer from "./FormContainer";

const Index = ({findUs, header}) => {
  return (
    <>
      <div id="header-area-space"></div>
      <ImgContact />
      <WhereToFind  findUs= { findUs }/>
      <FormContainer header= { header } />
    </>
  );
};

export default Index;
