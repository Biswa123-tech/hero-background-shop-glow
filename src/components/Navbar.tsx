
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, User, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">MessBuy</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary">
              Categories
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              asChild
            >
              <Link to="/cart">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                  0
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link 
              to="/" 
              className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/categories" 
              className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/cart"
              className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
