import { Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="p-6 bg-base-100 rounded-lg shadow-lg">
          <div className="w-16 h-16 bg-base-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">📦</span>
          </div>
          <h3 className="text-xl font-semibold text-base-content mb-2 font-display">
            No products found
          </h3>
          <p className="text-base-content/70 font-body">
            No products available in the selected category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in h-full"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'both'
          }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
} 