import jwt from "jsonwebtoken";

// seller login user: POST /api/seller/login
export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.SELLER_EMAIL ||
      password !== process.env.SELLER_PASSWORD
    ) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  
    res.cookie("sellerToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Error in seller controller:", error.message);
    res.json({ success: false, message: error.message });
    
  }
};

// check seller auth seller: GET /api/seller/is-auth

export const isSellerAuth = async (req, res) => {
  try {

    return res.json({ success: true });
  } catch (error) {
    console.error("Error in isSellerAuth controller:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// seller logout user: POST /api/seller/logout

export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    console.error("Error in sellerLogout controller:", error.message);
    res.json({ success: false, message: error.message });
  }
};
