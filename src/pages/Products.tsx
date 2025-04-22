
import React from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

// Daily essentials categories/products in Rupees
const PRODUCTS = [
  {
    id: 1,
    name: "Tooth Brush",
    price: 40,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000&auto=format&fit=crop",
    category: "Brushes",
    badge: "sale" as "sale",
  },
  {
    id: 2,
    name: "Face Cream",
    price: 399,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=989&auto=format&fit=crop",
    category: "Cream",
    badge: "new" as "new",
  },
  {
    id: 3,
    name: "Vitamin C Serum",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=828&auto=format&fit=crop",
    category: "Serum",
    badge: "sale" as "sale",
  },
  {
    id: 4,
    name: "Coconut Oil",
    price: 199,
    image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=987&auto=format&fit=crop",
    category: "Oil",
    badge: "popular" as "popular",
  },
  {
    id: 5,
    name: "Biscuits Pack",
    price: 60,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1172&auto=format&fit=crop",
    category: "Eatables",
  },
  {
    id: 6,
    name: "Tea Pack",
    price: 160,
    image: "https://images.unsplash.com/photo-1519864600265-abb224a1fe28?q=80&w=1170&auto=format&fit=crop",
    category: "Eatables",
  },
  {
    id: 7,
    name: "Soap",
    price: 45,
    image: "https://images.unsplash.com/photo-1518673743714-89347f83291b?q=80&w=987&auto=format&fit=crop",
    category: "Soap",
  },
  {
    id: 8,
    name: "Shampoo",
    price: 180,
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
    category: "Shampoo",
  },
];

const Products: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">All Products</h1>
          <div className="flex flex-wrap items-center justify-between">
            <p className="text-gray-600">Showing all {PRODUCTS.length} results</p>
            <div className="mt-4 md:mt-0">
              <select className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 py-2 px-4">
                <option value="default">Default sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popularity">Sort by popularity</option>
                <option value="newest">Sort by newest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * (product.id % 8) }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
