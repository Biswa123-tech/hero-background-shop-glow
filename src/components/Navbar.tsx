
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ShoppingCart, User, Search, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const navigate = useNavigate();
  
  // Check authentication status and cart items count
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("auth_token");
      setIsLoggedIn(!!token);
      
      // Get cart items count
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItemsCount(cartItems.reduce((total: number, item: any) => total + item.quantity, 0));
    };
    
    checkAuth();
    
    // Add event listener for storage changes
    window.addEventListener("storage", checkAuth);
    
    // Set interval to periodically check cart items
    const interval = setInterval(checkAuth, 2000);
    
    return () => {
      window.removeEventListener("storage", checkAuth);
      clearInterval(interval);
    };
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    setIsLoggedIn(false);
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    navigate("/");
  };
  
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
          
          <div className="hidden md:flex flex-1 max-w-sm mx-4 lg:mx-12">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pr-10"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
              >
                <Search size={18} />
              </Button>
            </div>
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
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search size={20} />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {isLoggedIn ? (
                  <>
                    <DropdownMenuItem>
                      <Link to="/profile" className="w-full">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/orders" className="w-full">My Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/wishlist" className="w-full">Wishlist</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <span className="flex items-center">
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </span>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <Link to="/login" className="w-full">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/signup" className="w-full">Sign Up</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              asChild
            >
              <Link to="/cart">
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <div className="mb-4">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
              />
            </div>
            
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
              Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
            </Link>
            
            <div className="border-t mt-2 pt-2">
              {isLoggedIn ? (
                <>
                  <Link 
                    to="/profile" 
                    className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                    to="/orders" 
                    className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md text-red-600"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block px-3 py-2 text-sm font-medium hover:bg-primary/10 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
