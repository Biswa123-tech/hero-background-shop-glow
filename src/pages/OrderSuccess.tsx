
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OrderSuccess: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
        >
          <Check size={40} className="text-green-600" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold mb-4"
        >
          Order Placed Successfully!
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 max-w-md mb-8"
        >
          Thank you for your purchase! We've received your order and will process it soon.
          You will receive a confirmation email shortly.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-sm border mb-8 max-w-md w-full"
        >
          <h2 className="font-semibold text-lg mb-2">Order Information</h2>
          <p className="text-gray-600 mb-1">Order Number: #ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
          <p className="text-gray-600 mb-1">Order Date: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600">Payment Method: Card / UPI / Net Banking / COD</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 text-sm text-gray-500"
        >
          For any questions regarding your order, please contact our support at:
          <br />
          <a href="mailto:vb46667@gmail.com" className="text-primary hover:underline">vb46667@gmail.com</a> or 
          <a href="tel:+917086542223" className="text-primary hover:underline"> +91 7086542223</a>
        </motion.p>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
