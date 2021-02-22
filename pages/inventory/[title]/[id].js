import Head from "next/head";
import fetch from "isomorphic-fetch";
import Layout from "@components/Layout";
import { baseURL } from "@config/config";
import SingleProduct from "@components/Products/SingleProduct/Main";

const Index = ({ content }) => {
  return (
    <Layout>
       <Head>
          {content && (
            <>
              <title>{`${content.title}`}</title>
              <meta
                property="og:title"
                content={`${content.title}`}
              />
              <meta property="og:site_name" content="Qatar Living" />
              <meta property="og:type" content="website" />
              <meta
                property="og:title"
                content={`${content.title}`}
              />
            </>
          )}
        </Head>
      <SingleProduct content = { content }/>
    </Layout>
  );
};
Index.getInitialProps = async ({ query }) => {
  let targetURL = `${baseURL}/api/product-detail/${query.id}?_format=hal_json`;
  const result = await fetch(targetURL);
  const data = await result.json();
  return {
    content: !!data ? data[0] : {},
  };
};

export default Index;
