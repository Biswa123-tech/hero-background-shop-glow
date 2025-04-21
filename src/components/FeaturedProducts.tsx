
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

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
            Check out our most popular products selected just for you. Perfect for everyday use or as thoughtful gifts.
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
