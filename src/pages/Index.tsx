
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Features from "@/components/Features";

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
    </Layout>
  );
};

export default Index;
