import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


const layoutStyle = {
  margin: "auto",
  padding: "0 15px",
  maxWidth: "1210px",
  width: "100%",
};

const Layout = (props) => {
  return (
    <div style={{ backgroundColor: "#ebebeb" }}>
      <div style={layoutStyle}>
        <Head>
          <link
            rel="shortcut icon"
            href="iamges/favicon.png"
          />
          <link rel="stylesheet" href={`css/bootstrap.min.css`} />
           
          <link rel="stylesheet" href={`css/style.css`} />
          <link rel="stylesheet" href={`css/icofont.css`} />
          <link rel="stylesheet" href={`css/font-awesome.min.css`} />
          <link rel="stylesheet" href={`slider/css/nivo-slider.css`} />
          <link rel="stylesheet" href={`slider/css/preview.css`}/>
          <script src="slider/js/jquery.nivo.slider.js"></script>
          <script src="slider/home.js"></script>
        </Head>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);