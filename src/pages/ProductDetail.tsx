
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

// Sample products, must match products page and featured products
const PRODUCTS = [
  {
    id: 1,
    name: "Tooth Brush",
    price: 40,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1000&auto=format&fit=crop",
    category: "Brushes",
    details: "Soft bristles for gentle cleaning. Comfortable grip handle perfect for everyday use.",
    features: [
      "Soft bristles, gentle on gums",
      "Slip-resistant handle",
      "Durable quality",
      "Affordable and effective",
      "Free Shipping"
    ]
  },
  {
    id: 2,
    name: "Face Cream",
    price: 399,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=989&auto=format&fit=crop",
    category: "Cream",
    details: "Hydrating face cream with natural ingredients for all skin types.",
    features: [
      "Moisturizes and nourishes skin",
      "Non-greasy formula",
      "Suitable for day and night use",
      "Alcohol-free and paraben-free",
      "Free Shipping"
    ]
  },
  {
    id: 3,
    name: "Vitamin C Serum",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=828&auto=format&fit=crop",
    category: "Serum",
    details: "Potent Vitamin C serum to brighten skin and boost collagen.",
    features: [
      "Promotes radiant skin",
      "Reduces dark spots",
      "Paraben-free",
      "Fast absorbing texture",
      "Free Shipping"
    ]
  },
  {
    id: 4,
    name: "Coconut Oil",
    price: 199,
    image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=987&auto=format&fit=crop",
    category: "Oil",
    details: "Pure coconut oil for hair and skin care.",
    features: [
      "100% pure & natural",
      "Moisturizes hair & skin",
      "Edible multi-purpose oil",
      "Cold pressed",
      "Free Shipping"
    ]
  },
  {
    id: 5,
    name: "Biscuits Pack",
    price: 60,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1172&auto=format&fit=crop",
    category: "Eatables",
    details: "Crunchy and tasty biscuits for tea-time snack.",
    features: [
      "Fresh and delicious",
      "Ideal with tea/coffee",
      "Sealed for freshness",
      "No artificial flavors",
      "Free Shipping"
    ]
  },
  {
    id: 6,
    name: "Tea Pack",
    price: 160,
    image: "https://images.unsplash.com/photo-1519864600265-abb224a1fe28?q=80&w=1170&auto=format&fit=crop",
    category: "Eatables",
    details: "Premium blend tea pack for everyday freshness.",
    features: [
      "Rich aroma & flavor",
      "Premium loose leaf",
      "Sealed for freshness",
      "Perfect for chai lovers",
      "Free Shipping"
    ]
  },
  {
    id: 7,
    name: "Soap",
    price: 45,
    image: "https://images.unsplash.com/photo-1518673743714-89347f83291b?q=80&w=987&auto=format&fit=crop",
    category: "Soap",
    details: "Mild and refreshing soap for daily use.",
    features: [
      "Mild formula",
      "Long lasting freshness",
      "Dermatologically tested",
      "Suitable for all skin types",
      "Free Shipping"
    ]
  },
  {
    id: 8,
    name: "Shampoo",
    price: 180,
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1170&auto=format&fit=crop",
    category: "Shampoo",
    details: "Nourishing shampoo for silky smooth hair.",
    features: [
      "Enriched with vitamins",
      "Sulfate-free",
      "Cleanses gently",
      "For all hair types",
      "Free Shipping"
    ]
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold">Product Not Found</h2>
          <p className="my-4">Sorry, the product you are looking for doesn't exist.</p>
          <Link to="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 animate-fade-in">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-md w-full max-w-[420px] object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-sm mb-2">{product.category}</p>
          <div className="flex gap-4 items-center my-2">
            <span className="text-2xl font-semibold text-primary">₹{product.price.toLocaleString("en-IN")}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
            <span className="text-green-600 text-sm ml-2">Free Shipping</span>
          </div>
          <p className="my-4 text-gray-700">{product.details}</p>
          <ul className="mb-6 list-disc ml-8 text-gray-500 space-y-1">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <div className="flex gap-4">
            <Button className="bg-primary text-white px-6 py-2 rounded" asChild>
              <Link to="/cart">Buy Now</Link>
            </Button>
            <Button variant="outline" className="px-6 py-2 rounded" asChild>
              <Link to="/cart">Add to Cart</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            * Limited time offer. Free shipping on all orders!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
