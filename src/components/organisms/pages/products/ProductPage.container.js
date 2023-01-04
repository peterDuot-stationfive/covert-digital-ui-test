import { useQuery } from "react-query";

import { fetchProductList } from "api/queries";
import { ProductPageView } from "./ProductPage.view";

export const ProductPage = () => {
  const {
    isLoading,
    error,
    data: productList,
  } = useQuery("product-list", fetchProductList);

  return (
    <ProductPageView
      productList={productList}
      isLoading={isLoading}
      error={error}
    />
  );
};
