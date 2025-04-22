
import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

// Daily essentials only
const CATEGORIES = [
  {
    id: 1,
    name: "Brushes",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000&auto=format&fit=crop",
    count: 10,
  },
  {
    id: 2,
    name: "Cream",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=989&auto=format&fit=crop",
    count: 7,
  },
  {
    id: 3,
    name: "Serum",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=828&auto=format&fit=crop",
    count: 5,
  },
  {
    id: 4,
    name: "Oil",
    image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=987&auto=format&fit=crop",
    count: 8,
  },
  {
    id: 5,
    name: "Eatables",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1172&auto=format&fit=crop",
    count: 12,
  },
  {
    id: 6,
    name: "Soap",
    image: "https://images.unsplash.com/photo-1518673743714-89347f83291b?q=80&w=987&auto=format&fit=crop",
    count: 6,
  }
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
            Browse our collection of daily essentials.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
