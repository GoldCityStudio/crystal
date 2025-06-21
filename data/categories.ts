import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'crystals',
    name: 'Crystal Series',
    nameZh: '水晶系列',
    description: 'Discover our collection of healing crystals and spiritual stones',
    descriptionZh: '探索我們的療癒水晶和靈性石頭系列',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop',
    featured: true,
    subcategories: [
      {
        id: 'purple',
        name: 'Purple Crystals',
        nameZh: '紫色水晶',
        description: 'Amethyst, fluorite, and other purple healing stones',
        descriptionZh: '紫水晶、螢石和其他紫色療癒石',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=200&fit=crop'
      },
      {
        id: 'pink',
        name: 'Pink Crystals',
        nameZh: '粉色水晶',
        description: 'Rose quartz, pink tourmaline, and love stones',
        descriptionZh: '粉水晶、粉碧璽和愛情石',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=200&fit=crop'
      },
      {
        id: 'blue',
        name: 'Blue Crystals',
        nameZh: '藍色水晶',
        description: 'Lapis lazuli, aquamarine, and communication stones',
        descriptionZh: '青金石、海藍寶和溝通石',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
      },
      {
        id: 'yellow',
        name: 'Yellow Crystals',
        nameZh: '黃色水晶',
        description: 'Citrine, tiger eye, and abundance stones',
        descriptionZh: '黃水晶、虎眼石和豐盛石',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=200&fit=crop'
      },
      {
        id: 'black',
        name: 'Black Crystals',
        nameZh: '黑色水晶',
        description: 'Obsidian, black tourmaline, and protection stones',
        descriptionZh: '黑曜石、黑碧璽和保護石',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
      },
      {
        id: 'white',
        name: 'White Crystals',
        nameZh: '白色水晶',
        description: 'Clear quartz, moonstone, and purification stones',
        descriptionZh: '白水晶、月光石和淨化石',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
      }
    ]
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    nameZh: '首飾',
    description: 'Beautiful crystal jewelry for everyday wear',
    descriptionZh: '適合日常佩戴的美麗水晶首飾',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
    subcategories: [
      {
        id: 'bracelets',
        name: 'Bracelets',
        nameZh: '手鏈',
        description: 'Crystal bracelets for wrist healing',
        descriptionZh: '用於手腕療癒的水晶手鏈',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=200&fit=crop'
      },
      {
        id: 'necklaces',
        name: 'Necklaces',
        nameZh: '項鏈',
        description: 'Crystal necklaces for throat and heart chakra',
        descriptionZh: '用於喉輪和心輪的水晶項鏈',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=200&fit=crop'
      },
      {
        id: 'rings',
        name: 'Rings',
        nameZh: '戒指',
        description: 'Crystal rings for finger energy work',
        descriptionZh: '用於手指能量工作的水晶戒指',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=200&fit=crop'
      },
      {
        id: 'earrings',
        name: 'Earrings',
        nameZh: '耳環',
        description: 'Crystal earrings for ear chakra balance',
        descriptionZh: '用於耳輪平衡的水晶耳環',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=200&fit=crop'
      }
    ]
  },
  {
    id: 'home-crystals',
    name: 'Home Crystals',
    nameZh: '家居水晶',
    description: 'Crystal decor and home purification items',
    descriptionZh: '水晶裝飾和家居淨化用品',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    subcategories: [
      {
        id: 'spheres',
        name: 'Crystal Spheres',
        nameZh: '水晶球',
        description: 'Perfect spheres for energy amplification',
        descriptionZh: '用於能量放大的完美球體',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
      },
      {
        id: 'clusters',
        name: 'Crystal Clusters',
        nameZh: '水晶簇',
        description: 'Natural crystal clusters for room purification',
        descriptionZh: '用於房間淨化的天然水晶簇',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
      },
      {
        id: 'cleansing',
        name: 'Cleansing Tools',
        nameZh: '淨化用品',
        description: 'Tools for crystal cleansing and charging',
        descriptionZh: '用於水晶淨化和充能的工具',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
      }
    ]
  }
]; 