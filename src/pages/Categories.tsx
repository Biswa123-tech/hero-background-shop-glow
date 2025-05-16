
import React, { useState } from "react";
import Layout from "@/components/Layout";
import CategoryCard from "@/components/CategoryCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

// Updated categories based on the new structure
const CATEGORIES = [
  {
    id: 1,
    name: "Daily Essentials",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000&auto=format&fit=crop",
    count: 8,
  },
  {
    id: 2,
    name: "Shampoo & Hair Care",
    image: "https://images.unsplash.com/photo-1597854586415-9cf5ef699899?q=80&w=987&auto=format&fit=crop",
    count: 4,
  },
  {
    id: 3,
    name: "Face Wash & Skincare",
    image: "https://images.unsplash.com/photo-1620916566886-f294219736cd?q=80&w=987&auto=format&fit=crop",
    count: 4,
  },
  {
    id: 4,
    name: "Oils & Cooking",
    image: "https://images.unsplash.com/photo-1588687650834-368975d3c3d5?q=80&w=987&auto=format&fit=crop",
    count: 3,
  },
  {
    id: 5,
    name: "Food & Beverages",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1172&auto=format&fit=crop",
    count: 9,
  },
  {
    id: 6,
    name: "Cleaning & Household",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=987&auto=format&fit=crop",
    count: 6,
  },
  {
    id: 7,
    name: "Tablets & Supplements",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=987&auto=format&fit=crop",
    count: 2,
  },
];

// Daily essentials from Indian FMCG brands in Rupees with updated categories
const PRODUCTS = [
  // Daily Essentials
  {
    id: 1,
    name: "Patanjali Dant Kanti Toothpaste",
    price: 100,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Daily Essentials",
    brand: "Patanjali",
    badge: "sale" as "sale",
    discount: 17
  },
  {
    id: 5,
    name: "Dabur Red Toothpaste",
    price: 99,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Daily Essentials",
    brand: "Dabur",
    badge: "sale" as "sale",
    discount: 18
  },
  {
    id: 25,
    name: "Colgate MaxFresh Toothbrush",
    price: 40,
    originalPrice: 50,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Daily Essentials",
    brand: "Colgate",
    discount: 20
  },
  
  // Shampoo & Hair Care
  {
    id: 2,
    name: "Patanjali Kesh Kanti Hair Oil",
    price: 130,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=987&auto=format&fit=crop",
    category: "Shampoo & Hair Care",
    brand: "Patanjali",
    discount: 13
  },
  {
    id: 4,
    name: "Dabur Amla Hair Oil",
    price: 175,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=987&auto=format&fit=crop",
    category: "Shampoo & Hair Care",
    brand: "Dabur",
    discount: 17
  },
  {
    id: 14,
    name: "Himalaya Herbal Shampoo",
    price: 210,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1597854586415-9cf5ef699899?q=80&w=987&auto=format&fit=crop",
    category: "Shampoo & Hair Care",
    brand: "Himalaya",
    discount: 16
  },
  {
    id: 20,
    name: "Mamaearth Tea Tree Shampoo",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1597854586415-9cf5ef699899?q=80&w=987&auto=format&fit=crop",
    category: "Shampoo & Hair Care",
    brand: "Mamaearth",
    discount: 13
  },
  
  // Face Wash & Skincare
  {
    id: 3,
    name: "Patanjali Aloe Vera Gel",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1620916566886-f294219736cd?q=80&w=987&auto=format&fit=crop",
    category: "Face Wash & Skincare",
    brand: "Patanjali",
    badge: "popular" as "popular",
    discount: 18
  },
  {
    id: 12,
    name: "Himalaya Neem Face Wash",
    price: 180,
    originalPrice: 215,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Face Wash & Skincare",
    brand: "Himalaya",
    badge: "sale" as "sale",
    discount: 16
  },
  {
    id: 13,
    name: "Himalaya Face Scrub",
    price: 190,
    originalPrice: 225,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Face Wash & Skincare",
    brand: "Himalaya",
    discount: 16
  },
  {
    id: 18,
    name: "Mamaearth Ubtan Face Wash",
    price: 249,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Face Wash & Skincare",
    brand: "Mamaearth",
    badge: "new" as "new",
    discount: 17
  },
  {
    id: 19,
    name: "Mamaearth Vitamin C Face Serum",
    price: 599,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Face Wash & Skincare",
    brand: "Mamaearth",
    badge: "new" as "new",
    discount: 14
  },
  
  // Oils & Cooking (note: some products appear in multiple categories)
  {
    id: 26,
    name: "Fortune Mustard Oil",
    price: 220,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1588687650834-368975d3c3d5?q=80&w=987&auto=format&fit=crop",
    category: "Oils & Cooking",
    brand: "Fortune",
    discount: 12
  },
  {
    id: 27,
    name: "Patanjali Cow Ghee",
    price: 560,
    originalPrice: 620,
    image: "https://images.unsplash.com/photo-1588687650834-368975d3c3d5?q=80&w=987&auto=format&fit=crop",
    category: "Oils & Cooking",
    brand: "Patanjali",
    discount: 10
  },
  
  // Food & Beverages
  {
    id: 6,
    name: "Dabur Honey",
    price: 220,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Dabur",
    discount: 12
  },
  {
    id: 7,
    name: "Nescafé Classic Coffee",
    price: 290,
    originalPrice: 325,
    image: "https://images.unsplash.com/photo-1550611087-ee349c7ffc98?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Nestlé",
    discount: 11
  },
  {
    id: 8,
    name: "Maggi Noodles",
    price: 60,
    originalPrice: 72,
    image: "https://images.unsplash.com/photo-1605349179255-03c8cbbafa6e?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Nestlé",
    badge: "popular" as "popular",
    discount: 17
  },
  {
    id: 9,
    name: "Nestlé KitKat",
    price: 40,
    originalPrice: 50,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Nestlé",
    discount: 20
  },
  {
    id: 10,
    name: "Parle-G Biscuits",
    price: 25,
    originalPrice: 30,
    image: "https://images.unsplash.com/photo-1583743089315-5e59e0afbcd6?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Parle",
    badge: "popular" as "popular",
    discount: 17
  },
  {
    id: 11,
    name: "Parle Monaco Biscuits",
    price: 30,
    originalPrice: 35,
    image: "https://images.unsplash.com/photo-1583743089315-5e59e0afbcd6?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Parle",
    discount: 14
  },
  {
    id: 15,
    name: "Amul Butter",
    price: 55,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Amul",
    badge: "popular" as "popular",
    discount: 8
  },
  {
    id: 16,
    name: "Amul Cheese",
    price: 110,
    originalPrice: 125,
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Amul",
    discount: 12
  },
  {
    id: 17,
    name: "Amul Ice Cream",
    price: 220,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Amul",
    discount: 12
  },
  
  // Cleaning & Household
  {
    id: 21,
    name: "Patanjali Floor Cleaner",
    price: 140,
    originalPrice: 170,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=987&auto=format&fit=crop",
    category: "Cleaning & Household",
    brand: "Patanjali",
    discount: 18
  },
  {
    id: 22,
    name: "Dabur Sanitize Surface Cleaner",
    price: 180,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=987&auto=format&fit=crop",
    category: "Cleaning & Household",
    brand: "Dabur",
    discount: 14
  },
  {
    id: 23,
    name: "Mamaearth Plant-Based Detergent",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=987&auto=format&fit=crop",
    category: "Cleaning & Household",
    brand: "Mamaearth",
    badge: "new" as "new",
    discount: 13
  },
  {
    id: 24,
    name: "Himalaya Hand Sanitizer",
    price: 99,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=987&auto=format&fit=crop",
    category: "Cleaning & Household",
    brand: "Himalaya",
    discount: 18
  },
  
  // Tablets & Supplements
  {
    id: 28,
    name: "Himalaya Ashwagandha Tablets",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=987&auto=format&fit=crop",
    category: "Tablets & Supplements",
    brand: "Himalaya",
    discount: 18
  },
  {
    id: 29,
    name: "Patanjali Multivitamin Tablets",
    price: 320,
    originalPrice: 380,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=987&auto=format&fit=crop",
    category: "Tablets & Supplements",
    brand: "Patanjali",
    discount: 16
  },
];

const CategoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory 
    ? PRODUCTS.filter(product => product.category === selectedCategory)
    : [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">All Categories</h1>
          <p className="text-gray-600">Browse our product categories to find exactly what you're looking for.</p>
        </div>

        {selectedCategory ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">{selectedCategory}</h2>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2"
              >
                Back to All Categories
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * (product.id % 8) }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (category.id % 6) }}
                onClick={() => setSelectedCategory(category.name)}
                className="cursor-pointer"
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoriesPage;
