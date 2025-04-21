
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: "sale" | "new" | "popular";
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  badge,
}) => {
  return (
    <motion.div 
      className="group rounded-lg border overflow-hidden bg-white h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <Link to={`/products/${id}`} className="block">
          <img
            src={image}
            alt={name}
            className="w-full h-52 md:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-2 left-2">
          {badge && (
            <Badge variant={badge}>
              {badge === "sale" && "Sale"}
              {badge === "new" && "New"}
              {badge === "popular" && "Popular"}
            </Badge>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <Heart size={18} className="text-gray-600" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 p-4 flex flex-col">
        <div className="mb-1">
          <span className="text-xs text-gray-500">{category}</span>
        </div>
        <Link to={`/products/${id}`} className="block mb-2">
          <h3 className="font-medium text-gray-900 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white"
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
