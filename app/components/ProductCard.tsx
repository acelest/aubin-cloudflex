import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group h-full flex flex-col">
      <figure className="relative h-48 overflow-hidden flex-shrink-0">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        {product.isNew && (
          <div className="absolute top-2 right-2">
            <div className="badge badge-error gap-1 font-body bg-red-500 border-red-500 text-white">
              <Star className="w-3 h-3 fill-current" />
              New
            </div>
          </div>
        )}
      </figure>
      <div className="card-body flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h2 className="card-title text-lg font-display group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-1 mr-2">
            {product.name}
          </h2>
          <div className="badge badge-primary font-body flex-shrink-0">{product.category}</div>
        </div>
        <p className="text-sm text-base-content/70 line-clamp-2 mb-4 font-body flex-grow">
          {product.description}
        </p>
        <div className="card-actions justify-between items-center mt-auto">
          <div className="text-xl font-bold text-primary font-body">
            {product.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </div>
          <Link
            href={`/products/${product.id}`}
            className="btn btn-primary btn-sm font-body hover:btn-secondary transition-all duration-300"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
} 