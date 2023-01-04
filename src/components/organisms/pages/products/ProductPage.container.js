import { useQuery } from "react-query";

import { ProductPageView } from "./ProductPage.view";

export const ProductPage = () => {
  const productList = useQuery("product-list", fetchProductList);
  return <ProductPageView />;
};
