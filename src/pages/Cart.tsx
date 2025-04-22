
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const cartItems = [
  // Mock data, you can enhance later
];

const Cart: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg mb-4">Your cart is empty.</p>
            <Button asChild>
              <Link to="/products">Shop Products</Link>
            </Button>
          </div>
        ) : (
          <div>
            {/* Display real cart items here */}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
