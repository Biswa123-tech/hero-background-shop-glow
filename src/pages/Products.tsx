
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Daily essentials from Indian FMCG brands in Rupees
const PRODUCTS = [
  // Patanjali Products
  {
    id: 1,
    name: "Patanjali Dant Kanti Toothpaste",
    price: 100,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Personal Hygiene & Grooming",
    brand: "Patanjali",
    badge: "sale" as "sale",
    discount: 17
  },
  {
    id: 2,
    name: "Patanjali Kesh Kanti Hair Oil",
    price: 130,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=987&auto=format&fit=crop",
    category: "Personal Hygiene & Grooming",
    brand: "Patanjali",
    discount: 13
  },
  {
    id: 3,
    name: "Patanjali Aloe Vera Gel",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1620916566886-f294219736cd?q=80&w=987&auto=format&fit=crop",
    category: "Skincare",
    brand: "Patanjali",
    badge: "popular" as "popular",
    discount: 18
  },
  
  // Dabur Products
  {
    id: 4,
    name: "Dabur Amla Hair Oil",
    price: 175,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=987&auto=format&fit=crop",
    category: "Personal Hygiene & Grooming",
    brand: "Dabur",
    discount: 17
  },
  {
    id: 5,
    name: "Dabur Red Toothpaste",
    price: 99,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Personal Hygiene & Grooming",
    brand: "Dabur",
    badge: "sale" as "sale",
    discount: 18
  },
  {
    id: 6,
    name: "Dabur Honey",
    price: 220,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Dabur",
    discount: 12
  },
  
  // Nestlé Products
  {
    id: 7,
    name: "Nescafé Classic Coffee",
    price: 290,
    originalPrice: 325,
    image: "https://images.unsplash.com/photo-1550611087-ee349c7ffc98?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Nestlé",
    discount: 11
  },
  {
    id: 8,
    name: "Maggi Noodles",
    price: 60,
    originalPrice: 72,
    image: "https://images.unsplash.com/photo-1605349179255-03c8cbbafa6e?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Nestlé",
    badge: "popular" as "popular",
    discount: 17
  },
  {
    id: 9,
    name: "Nestlé KitKat",
    price: 40,
    originalPrice: 50,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Nestlé",
    discount: 20
  },
  
  // Parle Products
  {
    id: 10,
    name: "Parle-G Biscuits",
    price: 25,
    originalPrice: 30,
    image: "https://images.unsplash.com/photo-1583743089315-5e59e0afbcd6?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Parle",
    badge: "popular" as "popular",
    discount: 17
  },
  {
    id: 11,
    name: "Parle Monaco Biscuits",
    price: 30,
    originalPrice: 35,
    image: "https://images.unsplash.com/photo-1583743089315-5e59e0afbcd6?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Parle",
    discount: 14
  },
  
  // Himalaya Products
  {
    id: 12,
    name: "Himalaya Neem Face Wash",
    price: 180,
    originalPrice: 215,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Skincare",
    brand: "Himalaya",
    badge: "sale" as "sale",
    discount: 16
  },
  {
    id: 13,
    name: "Himalaya Face Scrub",
    price: 190,
    originalPrice: 225,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Skincare",
    brand: "Himalaya",
    discount: 16
  },
  {
    id: 14,
    name: "Himalaya Herbal Shampoo",
    price: 210,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1597854586415-9cf5ef699899?q=80&w=987&auto=format&fit=crop",
    category: "Personal Hygiene & Grooming",
    brand: "Himalaya",
    discount: 16
  },
  
  // Amul Products
  {
    id: 15,
    name: "Amul Butter",
    price: 55,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Amul",
    badge: "popular" as "popular",
    discount: 8
  },
  {
    id: 16,
    name: "Amul Cheese",
    price: 110,
    originalPrice: 125,
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Amul",
    discount: 12
  },
  {
    id: 17,
    name: "Amul Ice Cream",
    price: 220,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    brand: "Amul",
    discount: 12
  },
  
  // Mamaearth Products
  {
    id: 18,
    name: "Mamaearth Ubtan Face Wash",
    price: 249,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Skincare",
    brand: "Mamaearth",
    badge: "new" as "new",
    discount: 17
  },
  {
    id: 19,
    name: "Mamaearth Vitamin C Face Serum",
    price: 599,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Skincare",
    brand: "Mamaearth",
    badge: "new" as "new",
    discount: 14
  },
  {
    id: 20,
    name: "Mamaearth Tea Tree Shampoo",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1597854586415-9cf5ef699899?q=80&w=987&auto=format&fit=crop",
    category: "Personal Hygiene & Grooming",
    brand: "Mamaearth",
    discount: 13
  },
  
  // Additional Products for Cleaning & Household
  {
    id: 21,
    name: "Patanjali Floor Cleaner",
    price: 140,
    originalPrice: 170,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=987&auto=format&fit=crop",
    category: "Cleaning & Household",
    brand: "Patanjali",
    discount: 18
  },
  {
    id: 22,
    name: "Dabur Sanitize Surface Cleaner",
    price: 180,
    originalPrice: 210,
    image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=987&auto=format&fit=crop",
    category: "Cleaning & Household",
    brand: "Dabur",
    discount: 14
  },
  {
    id: 23,
    name: "Mamaearth Plant-Based Detergent",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=987&auto=format&fit=crop",
    category: "Cleaning & Household",
    brand: "Mamaearth",
    badge: "new" as "new",
    discount: 13
  },
  {
    id: 24,
    name: "Himalaya Hand Sanitizer",
    price: 99,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?q=80&w=987&auto=format&fit=crop",
    category: "Cleaning & Household",
    brand: "Himalaya",
    discount: 18
  }
];

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  
  // Get unique brands
  const brands = ["all", ...Array.from(new Set(PRODUCTS.map(p => p.brand)))];

  // Filter and sort products
  useEffect(() => {
    let result = [...PRODUCTS];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Apply brand filter
    if (selectedBrand !== "all") {
      result = result.filter(p => p.brand === selectedBrand);
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
  }, [searchTerm, sortOption, selectedCategory, selectedBrand]);
  
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
                <SelectTrigger className="w-[180px]">
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
              
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand === "all" ? "All Brands" : brand}
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
                setSelectedBrand("all");
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
