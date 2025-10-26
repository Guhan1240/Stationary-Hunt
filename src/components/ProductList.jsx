import React from "react";
import dailyCollections from "../data/dailyCollectionsData";
import Card from "./Card";

const ProductList = () => {
  const [value, setValue] = React.useState("");

  const filteredProducts = dailyCollections.filter(
    (shop) =>
      shop.shop.toLowerCase().includes(value.toLowerCase()) ||
      shop.product.some((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      )
  );

  const dataToRender = filteredProducts;

  const fullySortedData = [...dataToRender]
    .sort((a, b) => {
      const maxLevelA = Math.max(...a.product.map((p) => p.level ?? -1));
      const maxLevelB = Math.max(...b.product.map((p) => p.level ?? -1));
      return maxLevelB - maxLevelA; 
    })
    .map((shop) => ({
      ...shop,
      product: [...shop.product].sort((a, b) => {
        if (a.level === null) return 1;
        if (b.level === null) return -1;
        return b.level - a.level; 
      }),
    }));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
      
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <input
          value={value}
          type="text"
          placeholder="Type to search..."
          onChange={(e) => setValue(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
        />
        <button className="px-6 py-2 bg-purple-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200">
          Search
        </button>
      </div>

      <p className="text-center text-gray-500 mb-6"></p>

      {value
        ? fullySortedData.map((shop) => <Card key={shop.id} customer={shop} />)
        : dailyCollections.map((customer) => (
            <Card key={customer.id} customer={customer} />
          ))}
    </div>
  );
};

export default ProductList;
