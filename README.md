# Crystal Jewelry Store

A modern e-commerce website for crystal jewelry and spiritual accessories, inspired by White on HK. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **E-commerce Functionality**: Product browsing, filtering, and shopping cart
- 🌍 **Multi-language Support**: English and Traditional Chinese
- 🌏 **Multi-region Support**: Country/currency selection
- 📱 **Responsive Design**: Mobile-first approach
- 🎨 **Modern UI**: Clean, beautiful design with smooth animations
- 🔍 **Product Search & Filtering**: Advanced product discovery
- ⭐ **Product Reviews**: Customer ratings and reviews
- 💎 **Crystal Categories**: Organized by crystal types and benefits

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Animations**: Framer Motion
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crystal-jewelry-store
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
crystal-jewelry-store/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── ProductCard.tsx    # Product display card
│   ├── ProductGrid.tsx    # Product grid with filters
│   ├── FeaturedCategories.tsx # Category showcase
│   └── Footer.tsx         # Site footer
├── data/                  # Static data
│   ├── products.ts        # Product data
│   └── categories.ts      # Category data
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Key Features

### Product Management
- Product categories (Crystals, Jewelry, Home Crystals)
- Product filtering by category, price, rating
- Product search functionality
- Sale and discount management

### User Experience
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation
- Multi-language support (EN/ZH)
- Country/currency selection

### E-commerce Features
- Shopping cart functionality
- Wishlist/favorites
- Product reviews and ratings
- Size guides and product information

## Customization

### Adding New Products
Edit `data/products.ts` to add new products with the following structure:
```typescript
{
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  price: number;
  category: string;
  images: string[];
  // ... other properties
}
```

### Styling
The project uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can customize:
- Color scheme in the `theme.extend.colors` section
- Typography in `theme.extend.fontFamily`
- Animations in `theme.extend.animation`

### Languages
To add more languages:
1. Update the `UserPreferences` type in `types/index.ts`
2. Add language-specific content to product data
3. Update the language switcher in `Header.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by [White on HK](https://whiteonhk.com)
- Icons from [Heroicons](https://heroicons.com)
- Images from [Unsplash](https://unsplash.com) 