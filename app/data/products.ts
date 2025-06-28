export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Gaming Laptop Pro",
    price: 1299.99,
    description: "High-performance laptop for gaming and creative work",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    category: "Electronics",
    isNew: true
  },
  {
    id: 2,
    name: "Ultra Smartphone",
    price: 899.99,
    description: "Latest smartphone with professional camera capabilities",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Premium Audio Headphones",
    price: 299.99,
    description: "Wireless headphones with active noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Audio"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    description: "Smart watch with activity tracking and notifications",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    category: "Accessories",
    isNew: true
  },
  {
    id: 5,
    name: "Pro Tablet",
    price: 649.99,
    description: "Professional tablet for creation and productivity",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    category: "Electronics"
  },
  {
    id: 6,
    name: "DSLR Camera",
    price: 799.99,
    description: "Digital SLR camera for professional photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
    category: "Photography"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 149.99,
    description: "Portable speaker with surround sound and water resistance",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    category: "Audio"
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 89.99,
    description: "Gaming keyboard with mechanical switches and RGB backlight",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    category: "Accessories"
  },
  {
    id: 9,
    name: "Wireless Gaming Mouse",
    price: 79.99,
    description: "High-precision wireless gaming mouse with customizable buttons",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    category: "Accessories"
  },
  {
    id: 10,
    name: "Studio Microphone",
    price: 199.99,
    description: "Professional USB condenser microphone for streaming and recording",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=400&h=300&fit=crop",
    category: "Audio"
  },
  {
    id: 11,
    name: "Action Camera",
    price: 299.99,
    description: "4K action camera for extreme sports and adventures",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    category: "Photography"
  },
  {
    id: 12,
    name: "Smart Home Hub",
    price: 129.99,
    description: "Central hub for controlling all your smart home devices",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "Electronics"
  }
]; 