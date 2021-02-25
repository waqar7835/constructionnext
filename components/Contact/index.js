import ImgContact from "./ImgContact";
import WhereToFind from "./WhereToFind";
import Form from "./Form";

const Index = ({findUs, header}) => {
  return (
    <>
      <div id="header-area-space"></div>
      <ImgContact />
      <WhereToFind  findUs= { findUs }/>
      <Form header= { header } />
    </>
  );
};

export default Index;
