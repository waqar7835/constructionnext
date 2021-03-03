import Layout from "@components/Layout";
import Products from "@components/Products";
import { baseURL } from "@config/config";
const Index = ({ header, year_min, year_max, price_min, price_max }) => {
  return (
    <Layout header={header}>
      <Products
        year_min={year_min}
        year_max={year_max}
        price_min={price_min}
        price_max={price_max}
      />
    </Layout>
  );
};

Index.getInitialProps = async ({ query }) => {
  const [header, year_min, year_max, price_min, price_max] = await Promise.all([
    fetch(`${baseURL}/api/blocks/74?_format=hal_json`).then((r) => r.json()),
    fetch(`${baseURL}/api/yearmin?_format=hal_json`).then((r) => r.json()),
    fetch(`${baseURL}/api/yearmax?_format=hal_json`).then((r) => r.json()),
    fetch(`${baseURL}/api/pricemin?_format=hal_json`).then((r) => r.json()),
    fetch(`${baseURL}/api/pricemax?_format=hal_json`).then((r) => r.json()),
  ]);
  return {
    header: !!header ? header[0] : {},
    year_min: !!year_min ?parseInt(year_min[0].field_year)  : 1970,
    year_max: !!year_max ? parseInt(year_max[0].field_year)  : 2021,
    price_min: !!price_min ? parseInt(price_min[0].field_price) : 0,
    price_max: !!price_max ? parseInt(price_max[0].field_price) : 500000,
  };
};

export default Index;
