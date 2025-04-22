
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, Plus, Minus } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

// Sample products, must match products page and featured products
const PRODUCTS = [
  {
    id: 1,
    name: "Tooth Brush",
    price: 40,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1559163525-fd82e738ad5b?q=80&w=1170&auto=format&fit=crop",
    category: "Brushes",
    details: "Soft bristles for gentle cleaning. Comfortable grip handle perfect for everyday use.",
    features: [
      "Soft bristles, gentle on gums",
      "Slip-resistant handle",
      "Durable quality",
      "Affordable and effective",
      "Free Shipping"
    ],
    discount: 33
  },
  {
    id: 2,
    name: "Face Cream",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1620916566886-f294219736cd?q=80&w=987&auto=format&fit=crop",
    category: "Cream",
    details: "Hydrating face cream with natural ingredients for all skin types. Provides lasting moisture and protection throughout the day.",
    features: [
      "Moisturizes and nourishes skin",
      "Non-greasy formula",
      "Suitable for day and night use",
      "Alcohol-free and paraben-free",
      "Free Shipping"
    ],
    discount: 20
  },
  {
    id: 3,
    name: "Vitamin C Serum",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160beba3?q=80&w=1974&auto=format&fit=crop",
    category: "Serum",
    details: "Potent Vitamin C serum to brighten skin and boost collagen. Fights signs of aging and improves skin texture.",
    features: [
      "Promotes radiant skin",
      "Reduces dark spots",
      "Paraben-free",
      "Fast absorbing texture",
      "Free Shipping"
    ],
    discount: 20
  },
  {
    id: 4,
    name: "Coconut Oil",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1528483667811-f9838f3df371?q=80&w=974&auto=format&fit=crop",
    category: "Oil",
    details: "Pure coconut oil for hair and skin care. Cold-pressed to retain all natural nutrients and benefits.",
    features: [
      "100% pure & natural",
      "Moisturizes hair & skin",
      "Edible multi-purpose oil",
      "Cold pressed",
      "Free Shipping"
    ],
    discount: 20
  },
  {
    id: 5,
    name: "Biscuits Pack",
    price: 60,
    originalPrice: 75,
    image: "https://images.unsplash.com/photo-1583743089315-5e59e0afbcd6?q=80&w=987&auto=format&fit=crop",
    category: "Eatables",
    details: "Crunchy and tasty biscuits for tea-time snack. Perfect blend of sweetness and crispiness.",
    features: [
      "Fresh and delicious",
      "Ideal with tea/coffee",
      "Sealed for freshness",
      "No artificial flavors",
      "Free Shipping"
    ],
    discount: 20
  },
  {
    id: 6,
    name: "Tea Pack",
    price: 160,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1550610939-14e048be2171?q=80&w=987&auto=format&fit=crop",
    category: "Eatables",
    details: "Premium blend tea pack for everyday freshness. Rich aroma and authentic taste in every cup.",
    features: [
      "Rich aroma & flavor",
      "Premium loose leaf",
      "Sealed for freshness",
      "Perfect for chai lovers",
      "Free Shipping"
    ],
    discount: 20
  },
  {
    id: 7,
    name: "Soap",
    price: 45,
    originalPrice: 60,
    image: "https://images.unsplash.com/photo-1607006483570-47ef11ec4ce1?q=80&w=987&auto=format&fit=crop",
    category: "Soap",
    details: "Mild and refreshing soap for daily use. Gentle cleansing with natural extracts.",
    features: [
      "Mild formula",
      "Long lasting freshness",
      "Dermatologically tested",
      "Suitable for all skin types",
      "Free Shipping"
    ],
    discount: 25
  },
  {
    id: 8,
    name: "Shampoo",
    price: 180,
    originalPrice: 225,
    image: "https://images.unsplash.com/photo-1597854586415-9cf5ef699899?q=80&w=987&auto=format&fit=crop",
    category: "Shampoo",
    details: "Nourishing shampoo for silky smooth hair. Enriched with vitamins for healthy-looking hair.",
    features: [
      "Enriched with vitamins",
      "Sulfate-free",
      "Cleanses gently",
      "For all hair types",
      "Free Shipping"
    ],
    discount: 20
  }
];

// Sample reviews
const REVIEWS = [
  {
    id: 1,
    productId: 1,
    user: "Ravi Kumar",
    rating: 5,
    comment: "Excellent quality, very satisfied with my purchase!",
    date: "2023-10-15"
  },
  {
    id: 2,
    productId: 1,
    user: "Priya Singh",
    rating: 4,
    comment: "Good product, comfortable grip. Would buy again.",
    date: "2023-09-22"
  },
  {
    id: 3,
    productId: 2, 
    user: "Ananya Sharma",
    rating: 5,
    comment: "This cream is amazing! My skin feels so soft now.",
    date: "2023-10-05"
  },
  {
    id: 4,
    productId: 3,
    user: "Rahul Patel",
    rating: 4,
    comment: "Great serum, saw visible results in a week.",
    date: "2023-09-30"
  },
  {
    id: 5,
    productId: 4,
    user: "Meera Joshi",
    rating: 5,
    comment: "Pure coconut oil, excellent quality and packaging.",
    date: "2023-10-12"
  },
  {
    id: 6,
    productId: 5,
    user: "Vikram Malhotra",
    rating: 4,
    comment: "Tasty biscuits, perfect with evening tea!",
    date: "2023-10-08"
  },
  {
    id: 7,
    productId: 6,
    user: "Sunita Gupta",
    rating: 5,
    comment: "Authentic tea flavor, highly recommended.",
    date: "2023-09-25"
  },
  {
    id: 8, 
    productId: 7,
    user: "Arun Verma",
    rating: 4,
    comment: "Nice fragrance, leaves skin feeling fresh.",
    date: "2023-10-10"
  },
  {
    id: 9,
    productId: 8,
    user: "Kavita Reddy",
    rating: 5,
    comment: "My hair feels so much healthier after using this shampoo!",
    date: "2023-09-28"
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => String(p.id) === id);
  const [quantity, setQuantity] = useState(1);
  
  // Get reviews for this product
  const productReviews = REVIEWS.filter(review => review.productId === Number(id));
  
  // Calculate average rating
  const avgRating = productReviews.length > 0 
    ? (productReviews.reduce((sum, review) => sum + review.rating, 0) / productReviews.length).toFixed(1)
    : "No ratings";

  const handleQuantityChange = (newQty: number) => {
    if (newQty >= 1 && newQty <= 10) {
      setQuantity(newQty);
    }
  };

  const handleAddToCart = () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("auth_token");
    
    if (!isLoggedIn) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to add items to your cart",
        variant: "destructive",
      });
      return;
    }

    if (!product) return;
    
    // Get existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      cartItems[existingItemIndex].quantity = quantity;
    } else {
      // Add new item to cart
      cartItems.push({
        ...product,
        quantity: quantity,
      });
    }
    
    // Save updated cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
    toast({
      title: "Added to cart",
      description: `${product.name} (Qty: ${quantity}) has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = "/checkout";
  };

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

  // Calculate discount percentage
  const discountPercentage = product.discount || 
    (product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2">
            <li><Link to="/" className="text-gray-500 hover:text-primary">Home</Link></li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link to="/products" className="text-gray-500 hover:text-primary">Products</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link to={`/categories`} className="text-gray-500 hover:text-primary">{product.category}</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-700">{product.name}</span>
            </li>
          </ul>
        </div>

        {/* Product Detail */}
        <div className="flex flex-col md:flex-row gap-10 animate-fade-in">
          {/* Product Image */}
          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-md w-full max-w-[420px] object-cover"
            />
          </motion.div>
          
          {/* Product Info */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-500 text-sm mb-2">{product.category}</p>
            
            {/* Ratings */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.round(Number(avgRating)) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {typeof avgRating === 'string' ? avgRating : `${avgRating} (${productReviews.length} reviews)`}
              </span>
            </div>
            
            {/* Price */}
            <div className="flex gap-4 items-center my-4">
              <span className="text-2xl font-semibold text-primary">₹{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              {discountPercentage > 0 && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {discountPercentage}% off
                </span>
              )}
            </div>
            
            <div className="text-green-600 text-sm mb-4">Free Shipping</div>
            
            {/* Description */}
            <p className="my-4 text-gray-700">{product.details}</p>
            
            {/* Features */}
            <ul className="mb-6 list-disc ml-8 text-gray-700 space-y-1">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                >
                  <Minus size={16} />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                  className="h-10 w-10"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="bg-primary text-white px-6 py-2 rounded" onClick={handleBuyNow}>
                Buy Now
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-2 rounded flex items-center gap-2" 
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
            </div>
            
            <p className="mt-6 text-xs text-gray-400">
              * Limited time offer. Free shipping on all orders!
            </p>
          </motion.div>
        </div>
        
        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          
          {productReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {productReviews.map((review) => (
                <Card key={review.id} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{review.user}</h3>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews yet for this product.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
