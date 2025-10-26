import React, { useState } from "react";
import CardDetails from "./CardDetails";

const Card = ({ customer }) => {


  const { shop, logo, contact, product } = customer;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 max-w-sm mx-auto mb-6">
  
    

   
      <h1 className="text-xl font-bold text-gray-800 text-center">{shop}</h1>
      <p className="text-gray-500 text-center mb-4">{contact}</p>

   
     <button
  onClick={() => setShowDetails(!showDetails)}
  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-lg font-semibold shadow-lg transition-all duration-300"
>
  {showDetails ? "Hide Details" : "Show Details"}
</button>


    
      {showDetails && (
        <div className="mt-4">
          <CardDetails product={product} />
        </div>
      )}
    </div>
  );
};

export default React.memo( Card);
