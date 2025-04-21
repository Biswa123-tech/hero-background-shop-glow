
import React from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

// Using the same product data as in FeaturedProducts
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    badge: "sale" as "sale",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=989&auto=format&fit=crop",
    category: "Electronics",
    badge: "new" as "new",
  },
  {
    id: 3,
    name: "Backpack",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=828&auto=format&fit=crop",
    category: "Accessories",
    badge: "sale" as "sale",
  },
  {
    id: 4,
    name: "Water Bottle",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=987&auto=format&fit=crop",
    category: "Kitchen",
    badge: "popular" as "popular",
  },
  {
    id: 5,
    name: "Plant Pot",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1172&auto=format&fit=crop",
    category: "Home Decor",
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1170&auto=format&fit=crop",
    category: "Home Decor",
  },
  {
    id: 7,
    name: "Notebook Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=987&auto=format&fit=crop",
    category: "Stationery",
  },
  {
    id: 8,
    name: "Coffee Mug",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?q=80&w=1170&auto=format&fit=crop",
    category: "Kitchen",
  },
  // Additional products for Products page
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 59.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1064&auto=format&fit=crop",
    category: "Electronics",
    badge: "sale" as "sale",
  },
  {
    id: 10,
    name: "Yoga Mat",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=1170&auto=format&fit=crop",
    category: "Fitness",
    badge: "new" as "new",
  },
  {
    id: 11,
    name: "Scented Candle",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1603006905393-c8ada0ebd2d3?q=80&w=1041&auto=format&fit=crop",
    category: "Home Decor",
  },
  {
    id: 12,
    name: "Wall Clock",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1587302186428-d82e1d4e4e67?q=80&w=880&auto=format&fit=crop",
    category: "Home Decor",
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
