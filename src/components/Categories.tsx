
import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

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
            Browse our extensive collection of products organized by category to help you find exactly what you need.
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
