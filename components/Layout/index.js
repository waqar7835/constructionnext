import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from 'react'
import "./style.css";
const layoutStyle = {
  margin: "auto",
  // padding: "0 15px",
  // maxWidth: "1210px",
  width: "100%",
};

const Layout = (props) => {
  const [isRander , setIsRander] = useState(false);
  useEffect(() => {
    // if(window){}
    setIsRander(!!window);

  }, [])
  return (
    <div>
      <div style={layoutStyle}>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link rel="stylesheet" href={`/css/bootstrap.min.css`} />

          <link rel="stylesheet" href={`/css/style.css`} />
          <link rel="stylesheet" href={`/css/icofont.css`} />
          <link rel="stylesheet" href={`/css/font-awesome.min.css`} />
          <link rel="stylesheet" href={`/css/meanmenu.min.css`} />
          {/* <script 
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
                    crossorigin="anonymous"
                    />
          <script 
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
                    crossorigin="anonymous"
                    /> */}
          {!!isRander && (
            <>
              {/* <script src={`/js/jquery-2.2.4.min.js`} /> */}
              {/* <script src={`/js/jquery.magnific-popup.min.js`} /> */}
              {/* <script src={`/js/bootstrap.min.js`} /> */}
              {/* <script src={`/js/isotope.pkgd.min.js`} /> */}
              {/* <script src={`/js/jquery.countdown.min.js`} /> */}
              {/* <script src={`/js/jquery.counterup.min.js`} /> */}
              {/* <script src={`/js/jquery.equalheights.min.js`} /> */}
              {/* <script src={`/js/jquery.justifiedGallery.min.js`} /> */}
              {/* <script src={`/js/jquery.nav.js`} /> */}
              {/* <script src={`/js/jquery.scrollUp.min.js`} /> */}
              {/* <script src={`/js/modernizr-2.8.3.min.js`} />
              <script src={`/js/plugins.js`} /> */}
              {/* <script src={`/js/validator.min.js`} /> */}
              {/* <script src={`/js/vc-gallery.js`} /> */}
              {/* <script src={`/js/waypoints.min.js`} /> */}
              {/* <script src={`/js/wow.min.js`} /> */}
              {/* <script src={`/js/jquery.meanmenu.min.js`} />
              <script src={`/js/main.js`} /> */}
            </>
          )}
        </Head>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Layout);
