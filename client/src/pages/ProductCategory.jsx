import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/greencart_assets/assets";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (cat) => cat.path.toLowerCase() === category
  );
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );
  return (
    <div className="mt-16">
      {searchCategory && (
        <>
          <div className="flex flex-col items-end w-max">
            <p className="text-2xl uppercase font-medium">
              {searchCategory.text}
            </p>
            <div className="w-16 h-0.5 bg-primary rounded-full"></div>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6 gap-3 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[60vh]">
              <p className="text-2xl md:text-3xl font-medium text-primary">
                No products found in this category
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCategory;
