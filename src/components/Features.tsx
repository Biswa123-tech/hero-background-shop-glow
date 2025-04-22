
import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCw, PhoneCall } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free shipping on all orders over ₹500",
    icon: Truck,
  },
  {
    id: 2,
    title: "Quality Guarantee",
    description: "All products pass our strict quality checks",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "10-day easy return policy",
    icon: RefreshCw,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Get help whenever you need it",
    icon: PhoneCall,
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * feature.id }}
              className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
