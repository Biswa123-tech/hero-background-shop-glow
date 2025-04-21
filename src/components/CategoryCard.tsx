
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image, count }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Link 
        to={`/categories/${id}`}
        className="group block relative h-40 md:h-48 rounded-lg overflow-hidden"
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-medium text-lg">{name}</h3>
          <p className="text-white/80 text-sm">{count} products</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
