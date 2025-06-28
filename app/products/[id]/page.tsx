"use client";

import { ArrowLeft, CheckCircle, Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  const { addToCart } = useCart();
  
  // Déballer les params avec React.use()
  const { id } = use(params);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product);
    
    // Animation de feedback
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  const handleAddToWishlist = () => {
    setIsAddingToWishlist(true);
    
    // Animation de feedback
    setTimeout(() => {
      setIsAddingToWishlist(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="bg-base-100 shadow-sm border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/products"
            className="btn btn-ghost btn-sm font-body"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative h-96 lg:h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Details Section */}
              <div className="p-8">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="badge badge-primary font-body">
                    {product.category}
                  </div>
                  {product.isNew && (
                    <div className="badge badge-error gap-1 font-body bg-red-500 border-red-500 text-white">
                      <Star className="w-3 h-3 fill-current" />
                      New
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <h1 className="text-3xl font-bold text-base-content mb-4 font-display">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary font-body">
                    {product.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    })}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-base-content mb-2 font-display">
                    Description
                  </h3>
                  <p className="text-base-content/70 leading-relaxed font-body">
                    {product.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className={`btn btn-primary btn-lg flex-1 font-body ${isAddingToCart ? 'btn-success' : ''}`}
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {isAddingToCart ? 'Added to Cart!' : 'Add to Cart'}
                  </button>
                  <button 
                    className={`btn btn-outline btn-lg flex-1 font-body ${isAddingToWishlist ? 'btn-success' : ''}`}
                    onClick={handleAddToWishlist}
                    disabled={isAddingToWishlist}
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    {isAddingToWishlist ? 'Added to Wishlist!' : 'Add to Wishlist'}
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-base-300">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-base-content/60 font-body">Reference:</span>
                      <p className="font-medium text-base-content font-body">#{product.id.toString().padStart(4, '0')}</p>
                    </div>
                    <div>
                      <span className="text-base-content/60 font-body">Availability:</span>
                      <p className="font-medium text-success flex items-center gap-1 font-body">
                        <CheckCircle className="w-4 h-4" />
                        In Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 