import Layout from "@components/Layout";
import Finance from "@components/Finance";
import { baseURL } from "@config/config";

const Index = ({header, finance}) => {
  return (
    <Layout header = {header} >
      <Finance finance = { finance } />
    </Layout>
  );
};
Index.getInitialProps = async ({ query }) => { 
  const [header, finance] = await Promise.all([
    fetch(`${baseURL}/api/blocks/74?_format=hal_json`).then(r => r.json()),
    fetch(`${baseURL}/api/blocks/81?_format=hal_json`).then(r => r.json())   
  ]);
  
  return {
    header: !!header ? header[0] : {},
    finance: !!finance ? finance[0] : {}   
   };

 };

export default Index;
