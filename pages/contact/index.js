import Layout from "@components/Layout";
import Contact from "@components/Contact";
import { baseURL } from "@config/config";
const Index = ({header, findUs}) => {
  return (
    <Layout header = { header }>
      <Contact findUs = { findUs } header = { header }/>
    </Layout>
  );
};
Index.getInitialProps = async ({ query }) => { 
  const [header, findUs] = await Promise.all([
    fetch(`${baseURL}/api/blocks/74?_format=hal_json`).then(r => r.json()),
    fetch(`${baseURL}/api/blocks/82?_format=hal_json`).then(r => r.json())   
  ]);
  
  return {
    header: !!header ? header[0] : {},
    findUs: !!findUs ? findUs[0] : {}   
   };

 };

export default Index;
