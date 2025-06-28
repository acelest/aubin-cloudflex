# 🛍️ Cloudflex Store - Frontend Technical Test

Interface de listing de produits développée avec Next.js, React et Tailwind CSS pour le test technique Frontend Developer chez Cloudflex.

## 🚀 Technologies

- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **DaisyUI** - Composants UI
- **Geist Font** - Police moderne
- **Lucide React** - Icônes

## 📁 Project Structure

```
aubin-cloudflex/
├── app/
│   ├── components/
│   │   ├── ProductCard.tsx      # Product card component
│   │   ├── ProductGrid.tsx      # Product grid
│   │   ├── Navbar.tsx           # Navigation with cart
│   │   └── CartIcon.tsx         # Cart icon
│   ├── context/
│   │   └── CartContext.tsx      # Global cart management
│   ├── data/
│   │   └── products.ts          # Product data
│   ├── products/
│   │   ├── page.tsx             # Product listing page with filters
│   │   └── [id]/
│   │       └── page.tsx         # Product details page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Main layout
│   └── page.tsx                 # Home page
├── public/                      # Static assets
└── README.md                    # Documentation
```

## ✨ Features

### 🛒 Shopping System
- **Context API** for global cart management
- **Add/Remove** products
- **Real-time counter** in the navbar
- **Persistence** of data

### 🏷️ "New" Badges
- **Red badges** for new products
- **Conditional display** based on the `isNew` property
- **Star icons** for better visibility

### 🔍 Filter System
- **Category filtering** (Audio, Electronics, Accessories, Photography)
- **Intuitive interface** with filter buttons
- **Dynamic product counter**
- **Transition animations**

### 🎨 Enhanced Design
- **Uniform cards** with fixed heights
- **Advanced hover effects** on images
- **Clickable images** to access details
- **Fade-in animations** for cards
- **Geist Font** modern and elegant

### 📱 Responsive Design
- **Mobile** : 1 column
- **Tablet** : 2 columns  
- **Desktop** : 3-4 columns
- **Large Desktop** : 4 columns

## 🛠️ Installation and Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the project
git clone <repository-url>
cd aubin-cloudflex

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Code linting
```

## 🎯 Available Pages

### Home Page (`/`)
- Project presentation
- Link to products page
- Technologies used

### Products Page (`/products`)
- **Grid of 12 products** with filtering
- **Uniform cards** with hover effects
- **Category filtering**
- **"New" badges** for new products

### Product Details Page (`/products/[id]`)
- Detailed product information
- Large format image
- Complete description
- Action buttons (cart, wishlist)
- Back navigation

## 🎨 Design and UX

### Visual Effects
- **Hover effects** on product cards
- **Zoom on hover**
- **Smooth transitions**
- **Uniform cards** with fixed heights
- **Colored badges** for categories

### Accessibility
- **Keyboard navigation** supported
- **Contrast** optimized
- **Alt text** for images
- **Focus states** visible

### Performance
- **Optimized images** with Next.js Image
- **Automatic lazy loading**
- **Code splitting** with App Router
- **TypeScript** for code safety

## 📊 Data

Products are stored in `app/data/products.ts` with the following structure:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  isNew?: boolean;
}
```

12 products are included with optimized Unsplash images.

## 🚀 Deployment

The project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- Any other platform supporting Node.js

## 📝 Technical Notes

### Implemented Best Practices
- **Modular components** and reusable
- **TypeScript** for type safety
- **Mobile-first responsive design**
- **Performance optimized** with Next.js
- **Clean and well-structured code**

### Possible Improvements
- Add filtering system
- Pagination for many products
- Search functionality
- Functional shopping cart
- Unit tests

## 👨‍💻 Author

**Aubin Djou** - Frontend Developer

### Contact
- **Portfolio** : [acelestdev.me](https://acelestdev.me)
- **Site** : [acelest.dev](https://acelest.dev)
- **Twitter** : [@acelestdev](https://twitter.com/acelestdev)
- **LinkedIn** : [in/ledeveloppeuraubindjou](https://linkedin.com/in/ledeveloppeuraubindjou)
- **Email** : aubingta@icloud.com
- **Telegram** : [t.me/acelestdev](https://t.me/acelestdev)

---

**Note**: This project demonstrates skills in React, Next.js, Tailwind CSS and TypeScript, with particular attention to UX, performance and code maintainability.
