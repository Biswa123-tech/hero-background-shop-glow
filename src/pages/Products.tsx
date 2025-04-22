import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Daily essentials categories/products in Rupees
const PRODUCTS = [
  {
    id: 1,
    name: "Tooth Brush",
    price: 40,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Brushes",
    badge: "sale" as "sale",
    discount: 33
  },
  {
    id: 2,
    name: "Face Cream",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1620916566886-f294219736cd?q=80&w=987&auto=format&fit=crop",
    category: "Cream",
    badge: "new" as "new",
    discount: 20
  },
  {
    id: 3,
    name: "Vitamin C Serum",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Serum",
    badge: "sale" as "sale",
    discount: 20
  },
  {
    id: 4,
    name: "Coconut Oil",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1528483667811-f9838f3df371?q=80&w=974&auto=format&fit=crop",
    category: "Oil",
    badge: "popular" as "popular",
    discount: 20
  },
  {
    id: 5,
    name: "Biscuits Pack",
    price: 60,
    originalPrice: 75,
    image: "https://images.unsplash.com/photo-1583743089315-5e59e0afbcd6?q=80&w=987&auto=format&fit=crop",
    category: "Eatables",
    discount: 20
  },
  {
    id: 6,
    name: "Tea Pack",
    price: 160,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1550610939-14e048be2171?q=80&w=987&auto=format&fit=crop",
    category: "Eatables",
    discount: 20
  },
  {
    id: 7,
    name: "Soap",
    price: 45,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1607006483570-47ef11ec4ce1?q=80&w=987&auto=format&fit=crop",
    category: "Soap",
    discount: 25
  },
  {
    id: 8,
    name: "Shampoo",
    price: 180,
    originalPrice: 225,
    image: "https://images.unsplash.com/photo-1597854586415-9cf5ef699899?q=80&w=987&auto=format&fit=crop",
    category: "Shampoo",
    discount: 20
  },
  {
    id: 9,
    name: "Body Lotion",
    price: 220,
    originalPrice: 275,
    image: "https://images.unsplash.com/photo-1619451334981-e66ed2dded8e?q=80&w=987&auto=format&fit=crop",
    category: "Cream",
    discount: 20
  },
  {
    id: 10,
    name: "Hand Sanitizer",
    price: 85,
    originalPrice: 100,
    image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=987&auto=format&fit=crop",
    category: "Hygiene",
    discount: 15
  },
  {
    id: 11,
    name: "Hair Oil",
    price: 150,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=987&auto=format&fit=crop",
    category: "Oil",
    discount: 17
  },
  {
    id: 12,
    name: "Sunscreen",
    price: 350,
    originalPrice: 450,
    image: "https://images.unsplash.com/photo-1598228812664-8280178581ed?q=80&w=987&auto=format&fit=crop",
    category: "Cream",
    badge: "new" as "new",
    discount: 22
  }
];

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  // Filter and sort products
  useEffect(() => {
    let result = [...PRODUCTS];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Apply sorting
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        result.sort((a, b) => {
          const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return discountB - discountA;
        });
        break;
      case "newest":
        // In a real app, you'd sort by date created
        // Here we'll just reverse the array as a placeholder
        result.reverse();
        break;
      default:
        // Default sorting (keep original order)
        break;
    }
    
    setFilteredProducts(result);
  }, [searchTerm, sortOption, selectedCategory]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">All Products</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
                <Button 
                  type="submit"
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full"
                >
                  Search
                </Button>
              </div>
            </form>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default sorting</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="discount">Discount</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between">
            <p className="text-gray-600">Showing {filteredProducts.length} results</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * (product.id % 8) }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 text-lg mb-4">No products found matching your criteria.</p>
              <Button onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSortOption("default");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
