import { ProductItem } from "../product-item";

export const ProductList = ({ products }) => {
  if (!products) return <h3>NO PRODUCT AVAILABLE</h3>;

  return products.map(({ id, thumbnail, description, title, brand, price }) => (
    <ProductItem
      key={id}
      thumbnail={thumbnail}
      description={description}
      title={title}
      brand={brand}
      price={price}
    />
  ));
};
