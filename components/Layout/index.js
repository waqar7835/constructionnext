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
          <link rel="stylesheet" href={`/bootstrap.min.css`} />
          <link rel="stylesheet" href={`/carousel.min.css`} />
          <link
            rel="stylesheet"
            href={`/react-multi-carousel-styles.css`}
          />
          <link rel="stylesheet" href={`css/style.css`} />
          <link rel="stylesheet" href={`css/icofont.css`} />
          <link rel="stylesheet" href={`css/font-awesome.min.css`} />
        </Head>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);