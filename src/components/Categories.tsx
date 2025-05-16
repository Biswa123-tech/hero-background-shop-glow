
import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

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

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Shop by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Browse our collection of daily essentials from top Indian brands.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * category.id }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
