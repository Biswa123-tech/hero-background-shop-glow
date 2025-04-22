
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-primary">MessBuy</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your one-stop shop for quality essentials at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1FQuDBQjP9/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/vegamart.v.m?igsh=MWplMzhkc2RzMmtseQ==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/Vegamart_V_M?t=TRL4QEUgkbcOFg6-1H1ktQ&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-500 hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-500 hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/products?new=true" className="text-gray-500 hover:text-primary">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?featured=true" className="text-gray-500 hover:text-primary">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/products?sale=true" className="text-gray-500 hover:text-primary">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-500 hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-500 hover:text-primary">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-500 hover:text-primary">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">
                  Satgaon Nowapara, Mili Juli Path, Panjabari, Guwahati, Assam 781037
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+917086542223" className="text-gray-500 hover:text-primary">
                  +91 7086542223
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:vb46667@gmail.com" className="text-gray-500 hover:text-primary">
                  vb46667@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} MessBuy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 justify-center md:justify-end">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-primary">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-sm text-gray-500 hover:text-primary">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
