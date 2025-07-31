import User from "../models/userModel.js";

// update user cartData POST /api/cart/update

export const updateCart = async (req, res) => {
  try {
    const { userId, cartItems } = req.body;
    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.error("Error in updateCart:", error.message);
    res.json({ success: false, message: error.message });
  }
};
