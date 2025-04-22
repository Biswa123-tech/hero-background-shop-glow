
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Show daily essentials from Indian FMCG brands, prices in ₹
const PRODUCTS = [
  {
    id: 1,
    name: "Patanjali Dant Kanti Toothpaste",
    price: 100,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Personal Hygiene & Grooming",
    brand: "Patanjali",
    badge: "sale" as "sale",
    discount: 17
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
    id: 12,
    name: "Himalaya Neem Face Wash",
    price: 180,
    originalPrice: 215,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Skincare",
    brand: "Himalaya",
    badge: "sale" as "sale",
    discount: 16
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
            Check out our most popular daily essentials from top Indian brands.
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
