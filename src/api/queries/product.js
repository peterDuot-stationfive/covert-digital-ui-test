export const fetchProductList = () =>
  fetch("https://dummyjson.com/products").then((res) => res.json());
