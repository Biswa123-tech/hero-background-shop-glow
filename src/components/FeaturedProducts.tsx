
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Show daily essentials, prices in ₹
const PRODUCTS = [
  {
    id: 1,
    name: "Tooth Brush",
    price: 40,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Brushes",
    badge: "sale" as "sale",
    discount: 33
  },
  {
    id: 2,
    name: "Face Cream",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1620916566886-f294219736cd?q=80&w=987&auto=format&fit=crop",
    category: "Cream",
    badge: "new" as "new",
    discount: 20
  },
  {
    id: 3,
    name: "Vitamin C Serum",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Serum",
    badge: "sale" as "sale",
    discount: 20
  },
  {
    id: 4,
    name: "Coconut Oil",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1528483667811-f9838f3df371?q=80&w=974&auto=format&fit=crop",
    category: "Oil",
    badge: "popular" as "popular",
    discount: 20
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Check out our most popular daily essentials.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * product.id }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
