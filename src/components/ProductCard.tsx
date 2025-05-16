
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import PlaceholderImage from "./PlaceholderImage";

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand?: string;
  badge?: "sale" | "new" | "popular";
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  brand,
  badge,
  discount,
}) => {
  const [productImage, setProductImage] = useState(image);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("auth_token");
    
    if (!isLoggedIn) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to add items to your cart",
        variant: "destructive",
      });
      return;
    }

    // Get existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex((item: any) => item.id === id);
    
    if (existingItemIndex >= 0) {
      // Increment quantity if item exists
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      cartItems.push({
        id,
        name,
        price,
        originalPrice,
        image,
        category,
        brand,
        quantity: 1,
      });
    }
    
    // Save updated cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
    toast({
      title: "Item added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  // Calculate discount percentage if not provided
  const discountPercentage = discount || (originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0);

  const handleImageUploaded = (newImageUrl: string) => {
    setProductImage(newImageUrl);
    setImageError(false);
    setImageLoaded(true);
    
    // In a real app, you would update the product image in the database
    toast({
      title: "Image uploaded",
      description: "Your product image has been updated.",
    });
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  return (
    <motion.div 
      className="group rounded-lg border overflow-hidden bg-white h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <Link to={`/products/${id}`} className="block">
          {!imageError ? (
            <img
              src={productImage}
              alt={name}
              className={`w-full h-52 md:h-60 object-cover transition-transform duration-500 group-hover:scale-105 ${!imageLoaded ? 'hidden' : ''}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          ) : null}
          
          {(imageError || !productImage) && (
            <PlaceholderImage 
              onImageUploaded={handleImageUploaded} 
              className="w-full h-52 md:h-60"
              alt={name}
            />
          )}
        </Link>
        <div className="absolute top-2 left-2">
          {badge && (
            <Badge variant={badge}>
              {badge === "sale" && "Sale"}
              {badge === "new" && "New"}
              {badge === "popular" && "Popular"}
            </Badge>
          )}
          {discountPercentage > 0 && !badge && (
            <Badge variant="sale">
              {discountPercentage}% Off
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
        
        {/* Hover overlay with Add to Cart button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            onClick={handleAddToCart}
            className="bg-white text-black hover:bg-primary hover:text-white transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      
      <div className="flex-1 p-4 flex flex-col">
        <div className="mb-1 flex justify-between">
          <span className="text-xs text-gray-500">{category}</span>
          {brand && <span className="text-xs font-medium text-primary">{brand}</span>}
        </div>
        <Link to={`/products/${id}`} className="block mb-2">
          <h3 className="font-medium text-gray-900 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="text-xs text-green-600 mb-1">Free Shipping</div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">₹{price.toLocaleString("en-IN")}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ₹{originalPrice.toLocaleString("en-IN")}
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="text-xs text-green-600">
                {discountPercentage}% off
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
