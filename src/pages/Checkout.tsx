
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IndianRupee, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("auth_token");
    
    if (!isLoggedIn) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to checkout",
        variant: "destructive",
      });
      navigate("/login?redirect=checkout");
      return;
    }

    // Get cart items from localStorage
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const items = JSON.parse(storedCartItems);
      if (items.length === 0) {
        // Redirect to cart if empty
        navigate("/cart");
        return;
      }
      setCartItems(items);
    } else {
      // Redirect to cart if no items
      navigate("/cart");
      return;
    }
    setIsLoading(false);
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (emptyFields.length > 0) {
      toast({
        title: "Please fill all required fields",
        description: `${emptyFields.join(', ')} ${emptyFields.length > 1 ? 'are' : 'is'} required`,
        variant: "destructive",
      });
      return;
    }
    
    // Process order
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase. We'll process your order soon.",
    });
    
    // Clear cart
    localStorage.setItem("cartItems", "[]");
    
    // Redirect to success page
    navigate("/order-success");
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <p>Loading checkout...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="flex-grow">
            <form onSubmit={handleSubmit}>
              <Card className="p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Enter your full name" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="Enter your email" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      placeholder="Enter your address" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleInputChange} 
                      placeholder="Enter your city" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input 
                      id="state" 
                      name="state" 
                      value={formData.state} 
                      onChange={handleInputChange} 
                      placeholder="Enter your state" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">PIN Code</Label>
                    <Input 
                      id="pincode" 
                      name="pincode" 
                      value={formData.pincode} 
                      onChange={handleInputChange} 
                      placeholder="Enter your PIN code" 
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <RadioGroup 
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex-grow cursor-pointer">UPI</Label>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6" />
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-grow cursor-pointer">Credit/Debit Card</Label>
                    <div className="flex space-x-1">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking" className="flex-grow cursor-pointer">Net Banking</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex-grow cursor-pointer">Cash on Delivery</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem value="manual" id="manual" />
                    <Label htmlFor="manual" className="flex-grow cursor-pointer">
                      Manual Payment
                      <p className="text-xs text-gray-500 mt-1">
                        Contact admin at vb46667@gmail.com or +91 7086542223
                      </p>
                    </Label>
                  </div>
                </RadioGroup>
              </Card>
              
              <div className="lg:hidden mb-6">
                <Card className="p-6">
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
                </Card>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" type="button" asChild className="flex-1">
                  <Link to="/cart">Back to Cart</Link>
                </Button>
                <Button type="submit" className="flex-1">Place Order</Button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-96 hidden lg:block">
            <div className="sticky top-24">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="max-h-64 overflow-y-auto mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start py-2 border-b">
                      <div className="flex-grow">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-right">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  ))}
                </div>
                
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
                
                <div className="rounded-md bg-gray-50 p-3 text-sm">
                  <div className="flex items-center text-green-600 mb-1">
                    <Check size={16} className="mr-1" />
                    <span>Free Shipping</span>
                  </div>
                  <p className="text-gray-600">Your order is eligible for free shipping.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
