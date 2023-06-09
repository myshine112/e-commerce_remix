import ProductsList from "~/pages/products/products-list";
import Layout from "~/components/layout/main";
import Cookies from "universal-cookie";
const Products = () => {
  const cookies = new Cookies();
  if (cookies.get("accessToken")) {
    return (
      <Layout>
        <ProductsList />
      </Layout>
    );
  } else {
    return <></>;
  }
};

export default Products;
