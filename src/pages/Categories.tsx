
import React from "react";
import Layout from "@/components/Layout";
import CategoryCard from "@/components/CategoryCard";
import { motion } from "framer-motion";

// Updated categories for Indian FMCG products
const CATEGORIES = [
  {
    id: 1,
    name: "Personal Hygiene & Grooming",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000&auto=format&fit=crop",
    count: 10,
  },
  {
    id: 2,
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1620916566886-f294219736cd?q=80&w=987&auto=format&fit=crop",
    count: 7,
  },
  {
    id: 3,
    name: "Food & Beverages",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1172&auto=format&fit=crop",
    count: 9,
  },
  {
    id: 4,
    name: "Cleaning & Household",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=987&auto=format&fit=crop",
    count: 4,
  }
];

const CategoriesPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">All Categories</h1>
          <p className="text-gray-600">Browse our product categories to find exactly what you're looking for.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
