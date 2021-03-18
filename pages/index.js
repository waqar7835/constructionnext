import Layout from "@components/Layout";
import HomePage from "@components/Home";
import fetch from "isomorphic-fetch";
import { baseURL } from "@config/config";
import NewHomePage from "@components/Products";

// import Header from "@components/Layout/Header";
const Index = ({header, welcome, about, equipmentHeading, feedback}) => {
  // console.log({header, welcome, about, equipmentHeading, feedback});
  return (
    <Layout header = { header } >
      {/* <HomePage welcome = { welcome } about = { about } equipmentHeading = { equipmentHeading } feedback = { feedback } /> */}
       <NewHomePage />
    </Layout>
  );
};
Index.getInitialProps = async ({ query }) => { 
  const [header, welcome, about, equipmentHeading, feedback] = await Promise.all([
    fetch(`${baseURL}/api/blocks/74?_format=hal_json`).then(r => r.json()),
    fetch(`${baseURL}/api/blocks/77?_format=hal_json`).then(r => r.json()),
    fetch(`${baseURL}/api/blocks/78?_format=hal_json`).then(r => r.json()),
    fetch(`${baseURL}/api/blocks/79?_format=hal_json`).then(r => r.json()),
    fetch(`${baseURL}/api/blocks/80?_format=hal_json`).then(r => r.json())
  ]);
  
  return {
    header: !!header ? header[0] : {},
    welcome: !!welcome ? welcome[0] : {},
    about: !!about ? about[0] : {},
    equipmentHeading: !!equipmentHeading ? equipmentHeading[0] : {},
    feedback: !!feedback ? feedback[0] : {},
   };

 };
// Index.getInitialProps = async ({ query }) => {
//   let targetURL = `${baseURL}/api/blocks/77?_format=hal_json`;
//   const result = await fetch(targetURL);
//   const data = await result.json();
//   return {
//     welcome: !!data ? data[0] : {},
//   };
// };


export default Index;
