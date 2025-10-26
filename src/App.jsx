import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen transition-colors duration-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8 shadow-lg text-center transform transition-transform duration-500 hover:scale-105 rounded-b-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight animate-pulse">
          Stationary Hunt
        </h1>
        <p className="text-sm mt-2 text-indigo-100 animate-fadeIn">
         
        </p>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="animate-fadeInUp">
          <ProductList />
        </div>
      </main>
    </div>
  );
}

export default App;
