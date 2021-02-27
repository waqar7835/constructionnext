import Layout from "@components/Layout";
import Products from "@components/Products";
import { baseURL } from "@config/config";
const Index = ({
  header,
  city,
  state,
  country,
  condition,
  equipment,
  listing_type,
  manufacturer,
  category,
}) => {
  return (
    <Layout header={header}>
      <Products
        city={city}
        state={state}
        country={country}
        condition={condition}
        equipment={equipment}
        listing_type={listing_type}
        manufacturer={manufacturer}
        category={category}
      />
    </Layout>
  );
};

Index.getInitialProps = async ({ query }) => {
  const [
    header,
    city,
    state,
    country,
    condition,
    listing_type,
    manufacturer,
    category,
  ] = await Promise.all([
    fetch(`${baseURL}/api/blocks/74?_format=hal_json`).then((r) => r.json()),
    fetch(`${baseURL}/api/terms?_format=hal_json&vid=city`).then((r) => r.json()),
    fetch(`${baseURL}/api/terms?_format=hal_json&vid=state`).then((r) => r.json()),
    fetch(`${baseURL}/api/terms?_format=hal_json&vid=country`).then((r) => r.json()),
    fetch(`${baseURL}/api/terms?_format=hal_json&vid=condition`).then((r) => r.json()),
    fetch(`${baseURL}/api/terms?_format=hal_json&vid=listing_t`).then((r) => r.json()),
    fetch(`${baseURL}/api/terms?_format=hal_json&vid=manufacturer`).then((r) => r.json()),
    fetch(`${baseURL}/api/terms?_format=hal_json&vid=category`).then((r) => r.json()),
  ]);
  return {
    header: !!header ? header[0] : {},
    city: !!city ? city : [],
    state: !!state ? state : [],
    country: !!country ? country : [],
    condition: !!condition ? condition : [],
    listing_type: !!listing_type ? listing_type : [],
    manufacturer: !!manufacturer ? manufacturer : [],
    category: !!category ? category : [],
  };
};

export default Index;
