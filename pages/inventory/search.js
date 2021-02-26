import Layout from "@components/Layout";
import Products from "@components/Products";
import { baseURL } from "@config/config";
const Index = ({header}) => {
  return (
    <Layout header = { header }>
      <Products />
    </Layout>
  );
};

 Index.getInitialProps = async ({ query }) => {
  let targetURL = `${baseURL}/api/blocks/74?_format=hal_json`;
  const result = await fetch(targetURL);
  const data = await result.json();
  return {
    header: !!data ? data[0] : {},
  };
};

export default Index;
