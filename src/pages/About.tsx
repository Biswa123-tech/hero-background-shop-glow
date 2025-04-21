
import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            About MessBuy Essentials
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose max-w-none"
          >
            <p className="text-lg mb-6">
              MessBuy Essentials is your one-stop shop for quality everyday items at affordable prices. We believe that essential products should be accessible to everyone without compromising on quality.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-10">Our Story</h2>
            <p className="mb-6">
              Founded in 2020, MessBuy Essentials started as a small online store with a curated selection of home and personal products. Our founder, Jane Smith, noticed that finding quality everyday items often meant spending too much money or settling for subpar products. She envisioned a store where customers could purchase reliable essentials without breaking the bank.
            </p>
            <p className="mb-6">
              What began as a modest selection of 20 products has grown to over 500 carefully sourced items across multiple categories. Despite our growth, our commitment to quality, affordability, and customer satisfaction remains unchanged.
            </p>
            
            <div className="my-10">
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1170&auto=format&fit=crop" 
                alt="Our Store" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 mt-10">Our Mission</h2>
            <p className="mb-6">
              At MessBuy Essentials, our mission is simple: to provide high-quality essential products that enhance everyday living at prices everyone can afford. We believe that good design and durability shouldn't be luxuries, but standards.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-10">Our Values</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Quality:</strong> We rigorously test every product before adding it to our catalog.</li>
              <li><strong>Affordability:</strong> We work directly with manufacturers to keep prices low without sacrificing quality.</li>
              <li><strong>Sustainability:</strong> We're committed to reducing our environmental impact through responsible sourcing and minimal packaging.</li>
              <li><strong>Customer Satisfaction:</strong> We stand behind every product we sell with our satisfaction guarantee.</li>
              <li><strong>Community:</strong> For every purchase, we donate 1% to local community initiatives.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-10">Our Team</h2>
            <p className="mb-6">
              Our dedicated team of 25 professionals works tirelessly to source quality products, maintain excellent customer service, and ensure smooth operations. We're a diverse group united by our passion for making quality essentials accessible to all.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-10">Join Our Journey</h2>
            <p className="mb-6">
              We're constantly growing and improving, and we invite you to be part of our journey. Whether you're a first-time customer or a long-time supporter, your feedback helps us better serve our community.
            </p>
            <p>
              Thank you for choosing MessBuy Essentials. We look forward to being your trusted source for all life's essentials.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
