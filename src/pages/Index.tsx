
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
    </Layout>
  );
};

export default Index;
