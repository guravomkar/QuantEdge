const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// UPDATED: Explicitly allowed your live Vercel URLs
app.use(cors({ 
    origin: [
        "http://localhost:3000", 
        "http://localhost:3001", 
        "https://zerodha-frontend-xi.vercel.app", 
        "https://zerodha-dashboard-eta.vercel.app"
    ], 
    credentials: true 
}));

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => console.log("✅ Database Connected"))
    .catch((err) => console.log("❌ DB Error:", err));

// --- MODELS ---
const User = mongoose.model("User", new mongoose.Schema({
    username: String, email: { type: String, unique: true }, password: String, balance: { type: Number, default: 10000 }
}));

const Holding = mongoose.model("Holding", new mongoose.Schema({ 
    name: String, qty: Number, avg: Number, price: Number, net: String, day: String 
}));

const Position = mongoose.model("Position", new mongoose.Schema({ 
    userEmail: String, product: String, name: String, qty: Number, avg: Number, price: Number, net: String, day: String, isLoss: Boolean,
    createdAt: { type: Date, default: Date.now } 
}));

const Order = mongoose.model("Order", new mongoose.Schema({ 
    userEmail: String, name: String, qty: Number, price: Number, mode: String, type: String, product: { type: String, default: "CNC" }, 
    createdAt: { type: Date, default: Date.now } 
}));

// --- ROUTES ---
app.post("/signup", async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.json({ success: false, message: "User already exists" });
        const newUser = new User({ email, password, username });
        await newUser.save();
        res.json({ success: true, message: "Registered successfully" });
    } catch (err) { res.status(500).json({ success: false }); }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
        if (user && user.password === password) {
            res.json({ success: true, message: "Logged in successfully" });
        } else {
            res.json({ success: false, message: "Invalid email or password" });
        }
    } catch (err) { res.status(500).json({ success: false }); }
});

app.get("/allHoldings", async (req, res) => {
    try {
        const holdings = await Holding.find({});
        res.json(holdings);
    } catch (err) { res.status(500).json([]); }
});

app.get("/allHoldings/:email", async (req, res) => {
    try {
        const holdings = await Holding.find({});
        res.json(holdings);
    } catch (err) { res.status(500).json([]); }
});

app.get("/allOrders/:email", async (req, res) => {
    try {
        const orders = await Order.find({ userEmail: req.params.email }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) { res.status(500).json([]); }
});

app.get("/getBalance/:email", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        res.json({ balance: user ? user.balance : 0 });
    } catch (err) {
        res.status(500).json({ balance: 0 });
    }
});

app.post("/addFunds", async (req, res) => {
    const { email, password, amount } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid Password" });
        }
        user.balance += Number(amount);
        await user.save();
        res.json({ message: "Funds Added Successfully!", newBalance: user.balance });
    } catch (err) {
        res.status(500).json({ message: "Transaction Failed" });
    }
});

app.post("/withdrawFunds", async (req, res) => {
    const { email, password, amount } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid Password" });
        }
        if (user.balance < Number(amount)) {
            return res.status(400).json({ message: "Insufficient balance" });
        }
        user.balance -= Number(amount);
        await user.save();
        res.json({ message: "Withdrawal successful!", newBalance: user.balance });
    } catch (err) {
        res.status(500).json({ message: "Withdrawal failed" });
    }
});

app.post("/newOrder", async (req, res) => {
    try {
        const { name, qty, price, mode, type, product, email } = req.body;
        let user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });

        if (user) {
            const totalCost = Number(qty) * Number(price);
            if (mode === "BUY" && user.balance < totalCost) {
                return res.status(400).json({ success: false, message: "Insufficient funds" });
            }
            mode === "BUY" ? (user.balance -= totalCost) : (user.balance += totalCost);
            await user.save();
        }

        const newOrder = new Order({
            userEmail: email,
            name, qty: Number(qty), price: Number(price), mode,
            type: type || "LIMIT", product: product || "CNC"
        });
        await newOrder.save();

        const quantityChange = mode === "BUY" ? Number(qty) : -Number(qty);
        await Holding.findOneAndUpdate({ name }, { $inc: { qty: quantityChange } }, { upsert: mode === "BUY" });
        await Position.findOneAndUpdate(
            { name, userEmail: email }, 
            { $inc: { qty: quantityChange }, $set: { product: product || "CNC", price, avg: price, day: "+0.00%", isLoss: false, createdAt: new Date() }},
            { upsert: true }
        );

        await Holding.deleteMany({ qty: { $lte: 0 } });
        await Position.deleteMany({ userEmail: email, qty: { $lte: 0 } });

        res.json({ success: true });
    } catch (error) { res.status(500).json({ success: false }); }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));