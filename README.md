# ��️ Cloudflex Store - Frontend Technical Test

This project is a technical test for a Frontend Developer internship at Cloudflex. It's a product listing interface developed with Next.js, React and Tailwind CSS.

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility CSS framework
- **Unsplash Images** - Product images

## 📁 Project Structure

```
aubin-cloudflex/
├── app/
│   ├── components/
│   │   ├── ProductCard.tsx      # Product card component
│   │   └── ProductGrid.tsx      # Product grid
│   ├── data/
│   │   └── products.ts          # Product data
│   ├── products/
│   │   ├── page.tsx             # Product listing page
│   │   └── [id]/
│   │       └── page.tsx         # Product details page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Main layout
│   └── page.tsx                 # Home page
├── public/                      # Static assets
└── README.md                    # Documentation
```

## ✨ Features

### ✅ Main Features
- **`/products` page** - Responsive product grid
- **`/products/[id]` page** - Product details page
- **Responsive design** - Mobile-first with Tailwind CSS
- **Dark mode** - Automatic theme support
- **Smooth transitions** - Hover effects and animations

### 🎨 Reusable Components
- `ProductCard` - Product card with hover effects
- `ProductGrid` - Responsive product grid
- Navigation between pages

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
- Grid of 8 products
- Cards with image, name, price, category
- "View Details" button for each product
- Responsive design

### Product Details Page (`/products/[id]`)
- Detailed product information
- Large format image
- Complete description
- Action buttons (cart, wishlist)
- Back navigation

## 🎨 Design and UX

### Visual Effects
- **Hover effects** on product cards
- **Smooth transitions** (300ms)
- **Transform scale** on buttons
- **Shadow effects** for depth
- **Image zoom** on hover

### Accessibility
- **Focus states** on all interactive elements
- **Alt text** for all images
- **Contrast** respected for dark mode
- **Keyboard navigation** supported

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
}
```

8 products are included with optimized Unsplash images.

## 🔧 Customization

### Adding a Product
1. Modify `app/data/products.ts`
2. Add a new Product object
3. Use an Unsplash image with parameters `w=400&h=300&fit=crop`

### Modifying Style
- Use Tailwind classes in components
- Modify `app/globals.css` for custom styles
- Adjust colors in Tailwind theme

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

Developed for the Frontend Developer technical test at Cloudflex.

---

**Note**: This project demonstrates skills in React, Next.js, Tailwind CSS and TypeScript, with particular attention to UX, performance and code maintainability.
