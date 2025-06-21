export interface Product {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: string;
  subcategory?: string;
  images: string[];
  tags: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  benefits: string[];
  benefitsZh: string[];
  material: string;
  size?: string;
  weight?: string;
  featured?: boolean;
  sale?: boolean;
  discountPercentage?: number;
}

export interface Category {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  image: string;
  subcategories?: Subcategory[];
  featured?: boolean;
}

export interface Subcategory {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: Address;
  preferences: UserPreferences;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface UserPreferences {
  language: 'en' | 'zh';
  currency: string;
  country: string;
  notifications: {
    email: boolean;
    sms: boolean;
  };
}

export interface Country {
  code: string;
  name: string;
  nameZh: string;
  currency: string;
  currencySymbol: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
} 