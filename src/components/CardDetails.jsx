import React from "react";

const CardDetails = ({ product }) => {
  return (
    <div className="space-y-4">
      {product.map(({ category, name, sub, rate, img }, index) => (
        <div
          key={ index}
          className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg shadow-sm"
        >
        
          <div>
            <p className="font-semibold text-gray-700">{name}</p>
            <p className="text-gray-500 text-sm">{category}</p>
            {rate && <p className="text-indigo-600 font-bold">₹{rate}</p>}
            {sub && (
              <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                Sub Available
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo( CardDetails);
