import Address from "../models/addressModel.js";


// add address POST /api/address/add
export const addAddress = async (req, res) => {
    try {
        const { address, userId  } = req.body;
        await Address.create({...address, userId });
        res.json({ success: true, message: "Address added" });
    } catch (error) {
        console.error("Error in addAddress:", error.message);
        res.json({ success: false, message: error.message });
    }
}

// get address GET /api/address/get
export const getAddress = async (req, res) => {
    try {
        const { userId } = req.body;
        const addresses = await Address.find({ userId });
        res.json({ success: true, addresses });
    } catch (error) {
        console.error("Error in getAddress:", error.message);
        res.json({ success: false, message: error.message });
    }
}