
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import BuyNowButton from "./BuyNowButton";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Simulate fetching from inventory (update as needed)
const PRODUCTS = [
  {
    id: 1,
    name: "Patanjali Dant Kanti Toothpaste",
    price: 100,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Personal Hygiene & Grooming",
    description: "Ayurvedic toothpaste for healthier gums and teeth.",
    discount: 17
  },
  {
    id: 2,
    name: "Himalaya Neem Face Wash",
    price: 180,
    originalPrice: 215,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Skincare",
    description: "Purifies skin, removes impurities, prevents pimples.",
    discount: 16
  },
  {
    id: 3,
    name: "Parle-G Biscuits",
    price: 25,
    originalPrice: 30,
    image: "https://images.unsplash.com/photo-1583743089315-5e59e0afbcd6?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    description: "Classic glucose biscuits – tasty and energizing.",
    discount: 17
  },
  {
    id: 4,
    name: "Maggi Noodles",
    price: 60,
    originalPrice: 72,
    image: "https://images.unsplash.com/photo-1605349179255-03c8cbbafa6e?q=80&w=987&auto=format&fit=crop",
    category: "Food & Beverages",
    description: "Quick delicious instant noodles from Nestlé.",
    discount: 17
  }
]; // Add more/sample as needed

const EXTERNAL_PRODUCT = {
  name: "",
  price: 499,
  image: "https://raw.githubusercontent.com/lovable-ai/icons/main/generic-product.svg",
  tag: "External"
};

const Hero: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isExternal, setIsExternal] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<null | { id?: number; name: string; external?: boolean }>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter product suggestions
  let filtered = [];
  if (searchValue.length > 0) {
    filtered = PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (filtered.length === 0) {
      filtered = [{
        name: searchValue,
        external: true
      }];
    }
  }

  // Blur handler to hide dropdown a bit after blur (to allow click events)
  const handleBlur = () => setTimeout(() => setShowSuggestions(false), 150);

  // When clicking a suggestion
  const handleSuggestionClick = (suggestion: any) => {
    if (suggestion.external) {
      setIsExternal(true);
      setSelectedSuggestion(suggestion);
      setShowSuggestions(false);
    } else {
      navigate(`/products/${suggestion.id}`);
      setSearchValue("");
      setShowSuggestions(false);
    }
  };

  // Modal for external product
  const ExternalModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 max-w-xs w-full shadow-lg text-center">
        <img 
          src={EXTERNAL_PRODUCT.image} 
          alt="Generic Product" 
          className="mx-auto w-16 h-16 object-contain mb-3"
        />
        <h3 className="text-lg font-semibold mb-2">External Product</h3>
        <p className="text-gray-600 mb-3">
          This is an external product.<br />Not available for direct purchase.
        </p>
        <Button 
          className="mt-2 rounded-full px-6 bg-primary text-white"
          onClick={() => setIsExternal(false)}
        >
          Close
        </Button>
      </div>
    </div>
  );

  // Keyboard navigation to suggestions
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (!showSuggestions || !filtered.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedSuggestion((prev) => {
          let idx = filtered.findIndex(s => prev && (s.id ?? s.name) === (prev.id ?? prev.name));
          if (e.key === "ArrowDown") idx = (idx + 1) % filtered.length;
          else if (e.key === "ArrowUp") idx = (idx - 1 + filtered.length) % filtered.length;
          return filtered[idx];
        });
      }
      if (e.key === "Enter" && selectedSuggestion) {
        handleSuggestionClick(selectedSuggestion);
      }
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
    // eslint-disable-next-line
  }, [showSuggestions, filtered, selectedSuggestion]);

  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        <div className="max-w-2xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Shop Smarter, <span className="text-yellow-400">Live Better</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Discover our curated collection of essential products designed to enhance your everyday life at unbeatable prices.
            </p>
          </motion.div>

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mb-10 animate-fade-in"
          >
            <div className="relative w-full max-w-md">
              <span className="absolute left-3 top-2.5 text-gray-400 z-10">
                <Search size={21} />
              </span>
              <Input
                ref={inputRef}
                type="text"
                className="h-12 pl-10 pr-3 rounded-2xl bg-white/95 shadow-[0_0_0_3px_rgba(124,122,255,0.1)] focus:shadow-[0_0_8px_2px_rgba(103,200,255,0.35)] border border-gray-300 focus:border-indigo-500 text-base transition-all duration-200 ring-0 backdrop-blur-md"
                placeholder="Search products..."
                value={searchValue}
                onFocus={() => setShowSuggestions(true)}
                onBlur={handleBlur}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setShowSuggestions(true);
                  setSelectedSuggestion(null);
                }}
                aria-label="Search products"
              />
              {/* Suggestions */}
              <AnimatePresence>
              {showSuggestions && searchValue && (
                <motion.ul
                  className="absolute w-full bg-white z-20 rounded-xl shadow-md mt-2 border border-gray-100 max-h-64 overflow-y-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {filtered.map((suggestion, idx) =>
                    suggestion.external ? (
                      <li
                        key="external"
                        onMouseDown={() => handleSuggestionClick(suggestion)}
                        className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-xl"
                      >
                        <img 
                          src={EXTERNAL_PRODUCT.image} 
                          alt="external"
                          className="w-10 h-10 object-contain rounded-lg border border-gray-200"
                        />
                        <div>
                          <div className="font-medium">{searchValue}</div>
                          <span className="text-xs text-gray-500">
                            This product may be available on another site — <span className="font-semibold text-green-700">₹499</span>
                          </span>
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-200 text-xs font-semibold text-gray-700 align-middle">External</span>
                        </div>
                      </li>
                    ) : (
                      <li
                        key={suggestion.id}
                        onMouseDown={() => handleSuggestionClick(suggestion)}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-xl ${selectedSuggestion && (selectedSuggestion.id === suggestion.id) ? "bg-blue-50" : "" }`}
                      >
                        <img 
                          src={suggestion.image}
                          alt={suggestion.name}
                          className="w-10 h-10 object-cover rounded-lg border border-gray-100"
                        />
                        <div>
                          <div className="font-medium">{suggestion.name}</div>
                          <span className="text-xs text-gray-500">
                            ₹{suggestion.price} — {suggestion.discount}% off
                          </span>
                        </div>
                      </li>
                    )
                  )}
                </motion.ul>
              )}
              </AnimatePresence>
            </div>
            {isExternal && <ExternalModal />}
          </motion.div>

          {/* Hero Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BuyNowButton
              onClick={() => navigate("/products")}
              className=""
            >
              Shop Now
            </BuyNowButton>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/20 h-12 px-8 rounded-full"
            >
              <Link to="/categories">
                Browse Categories
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
