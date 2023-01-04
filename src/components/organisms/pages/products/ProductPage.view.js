import { Spinner } from "components/atoms/icons";
import { ProductList } from "components/molecules/product-list";

export const ProductPageView = ({ productList, isLoading, error }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Product List
        </h2>

        <div className="min-h-screen mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 relative">
          {isLoading ? (
            <div className="absolute top-16">
              <Spinner width={"33px"} height={"33px"} />
            </div>
          ) : (
            <ProductList products={productList.products} />
          )}
        </div>
      </div>
    </div>
  );
};
