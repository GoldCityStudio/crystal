'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Country } from '@/types';

const countries: Country[] = [
  { code: 'HK', name: 'Hong Kong SAR', nameZh: '香港特別行政區', currency: 'HKD', currencySymbol: '$' },
  { code: 'US', name: 'United States', nameZh: '美國', currency: 'USD', currencySymbol: '$' },
  { code: 'TW', name: 'Taiwan', nameZh: '台灣', currency: 'TWD', currencySymbol: 'NT$' },
  { code: 'SG', name: 'Singapore', nameZh: '新加坡', currency: 'SGD', currencySymbol: 'S$' },
  { code: 'MY', name: 'Malaysia', nameZh: '馬來西亞', currency: 'MYR', currencySymbol: 'RM' },
  { code: 'GB', name: 'United Kingdom', nameZh: '英國', currency: 'GBP', currencySymbol: '£' },
  { code: 'AU', name: 'Australia', nameZh: '澳洲', currency: 'AUD', currencySymbol: 'A$' },
  { code: 'CA', name: 'Canada', nameZh: '加拿大', currency: 'CAD', currencySymbol: 'C$' },
  { code: 'JP', name: 'Japan', nameZh: '日本', currency: 'JPY', currencySymbol: '¥' },
  { code: 'KR', name: 'South Korea', nameZh: '韓國', currency: 'KRW', currencySymbol: '₩' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const navigation = [
    { name: 'SALE', nameZh: '特價', href: '/sale' },
    { name: 'Crystal Series', nameZh: '水晶系列', href: '/crystals' },
    { name: 'Jewelry', nameZh: '首飾', href: '/jewelry' },
    { name: 'Home Crystals', nameZh: '家居水晶', href: '/home-crystals' },
    { name: 'About', nameZh: '關於我們', href: '/about' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Top bar with country/language selection */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
              >
                <span>{selectedCountry.name}</span>
                <span>({selectedCountry.currencySymbol})</span>
              </button>
              
              {isCountryOpen && (
                <div className="absolute top-10 left-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-64">
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-3">Select Country</h3>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsCountryOpen(false);
                          }}
                          className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-50 rounded"
                        >
                          <span>{country.name}</span>
                          <span className="text-gray-500">{country.currencySymbol}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="text-gray-600 hover:text-gray-900"
              >
                {language === 'en' ? '繁體中文' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Crystal Store
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium"
              >
                {language === 'en' ? item.name : item.nameZh}
              </a>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <UserIcon className="h-6 w-6" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-gray-500"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'en' ? item.name : item.nameZh}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 