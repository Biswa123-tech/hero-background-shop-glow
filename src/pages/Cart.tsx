
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, IndianRupee } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get cart items from localStorage
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    setIsLoading(false);
  }, []);

  // Update localStorage whenever cart items change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoading]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart."
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getShippingCost = () => {
    // Free shipping
    return 0;
  };

  const getTotalCost = () => {
    return getSubtotal() + getShippingCost();
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <p>Loading cart...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="py-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg mb-4">Your cart is empty.</p>
              <Button asChild>
                <Link to="/products">Shop Products</Link>
              </Button>
            </motion.div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-grow">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Cart Items ({getTotalItems()})</h2>
                
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-grow">
                        <Link to={`/products/${item.id}`} className="text-lg font-medium hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <div className="mt-1 text-primary font-medium">
                          ₹{item.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8"
                        >
                          <Minus size={14} />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus size={14} />
                        </Button>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-right min-w-[80px]">
                        <div className="font-semibold">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </div>
                      </div>
                      
                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="w-full lg:w-96">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{getSubtotal().toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="flex items-center">
                        <IndianRupee size={16} className="mr-1" />
                        {getTotalCost().toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
                <div className="mt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
