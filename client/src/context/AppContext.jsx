import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/greencart_assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});
  //fetch all products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  // add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
      toast.success("Added to cart");
    }
    setCartItems(cartData);
    
  };

  // update cart item quantity

  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart updated");
  };

  // remove product from cart

  const removeCartItem = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
          delete cartData[itemId];
          toast.success("Removed from cart");
        }
    }
    setCartItems(cartData);
  };

  // get cart item count

  const getCartCount = () => {
    let totalCount = 0;
    for (let item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  //  get cart total amount

  const getCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      let itemInfo = products.find((product) => product._id === item);
      if(cartItems[item] > 0) {

        totalAmount += itemInfo.offerPrice * cartItems[item];
      }
    } 
    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeCartItem,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
