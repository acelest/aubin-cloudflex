"use client";

import { Filter, Package } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Obtenir toutes les catégories uniques
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return ['all', ...uniqueCategories];
  }, []);

  // Filtrer les produits selon la catégorie sélectionnée
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-base-100 shadow-sm border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Package className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-base-content sm:text-4xl font-display">
              Our Products
            </h1>
            <p className="mt-3 text-lg text-base-content/70 font-body">
              Discover our selection of quality technological products
            </p>
            <div className="mt-4 flex justify-center">
              <div className="badge badge-primary badge-lg font-body">
                {filteredProducts.length} products available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-base-100 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-semibold text-base-content font-body">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn btn-sm font-body transition-all duration-300 ${
                    selectedCategory === category
                      ? 'btn-primary'
                      : 'btn-outline hover:btn-primary'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <div className="p-6 bg-base-100 rounded-lg shadow-lg">
              <Package className="w-16 h-16 text-base-content/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-base-content mb-2 font-display">
                No products found
              </h3>
              <p className="text-base-content/70 font-body">
                No products available in the selected category.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn btn-primary mt-4 font-body"
              >
                View All Products
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-base-100 border-t border-base-300 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-base-content/60 font-body">
            <p>© 2024 Cloudflex - Frontend Technical Test</p>
          </div>
        </div>
      </div>
    </div>
  );
} 