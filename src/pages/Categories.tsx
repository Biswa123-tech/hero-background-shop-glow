
import React from "react";
import Layout from "@/components/Layout";
import CategoryCard from "@/components/CategoryCard";
import { motion } from "framer-motion";

// Using the same categories data as in Categories component
const CATEGORIES = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1593344484594-6e7bf5de682d?q=80&w=1015&auto=format&fit=crop",
    count: 42,
  },
  {
    id: 2,
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bda9f7b24446?q=80&w=1000&auto=format&fit=crop",
    count: 31,
  },
  {
    id: 3,
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1074&auto=format&fit=crop",
    count: 56,
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1571516111531-322dad13ce47?q=80&w=1170&auto=format&fit=crop",
    count: 28,
  },
  {
    id: 5,
    name: "Stationery",
    image: "https://images.unsplash.com/photo-1568205631766-1a821ee1323e?q=80&w=1170&auto=format&fit=crop",
    count: 18,
  },
  {
    id: 6,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1170&auto=format&fit=crop",
    count: 63,
  },
  // Additional categories
  {
    id: 7,
    name: "Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1170&auto=format&fit=crop",
    count: 24,
  },
  {
    id: 8,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
    count: 37,
  },
  {
    id: 9,
    name: "Pets",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1064&auto=format&fit=crop",
    count: 19,
  },
];

const CategoriesPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">All Categories</h1>
          <p className="text-gray-600">Browse our product categories to find exactly what you're looking for.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (category.id % 6) }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
