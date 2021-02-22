import Header from "./Header";
import Footer from "./Footer";
import "./style.css";
const layoutStyle = {
  margin: "auto",
  // padding: "0 15px",
  // maxWidth: "1210px",
  width: "100%",
};

const Layout = (props) => {
 
  return (
    <div>
      <div style={layoutStyle}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);
