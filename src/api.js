import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new MongoClient("mongodb://127.0.0.1:27017/");
let db;

// connect ONCE
async function connectDB() {
    await client.connect();
    db = client.db("reactdb");
    console.log("MongoDB Connected");
}
connectDB();

// GET users
app.get("/getusers", async (req, res) => {
    try {
        const data = await db.collection("tblusers").find({}).toArray();
        res.json(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST user
app.post("/registeruser", async (req, res) => {
    try {
        const userdetails = {
            UserId: req.body.UserId,
            UserName: req.body.UserName,
            Password: req.body.Password,
            Age: parseInt(req.body.Age),
            Mobile: req.body.Mobile,
            Subscribed: req.body.Subscribed === "true"
        };

        await db.collection("tblusers").insertOne(userdetails);
        res.redirect("/getusers");

    } catch (err) {
        res.status(500).send("Insert Failed");
    }
});

app.get("/getproducts", async (req, res) => {
    const data = await db.collection("tblproducts").find({}).toArray();
    res.json(data);
});

app.get("/getcategories", async (req, res) => {
    const data = await db.collection("tblcategories").find({}).toArray();
    res.json(data);
});


app.get("/getproduct/:id", async (req, res) => {
    try {
        const products = await db
            .collection("tblproducts")
            .find({ id: parseInt(req.params.id) })
            .toArray();

        res.json(products);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});



// LISTEN ONCE
app.listen(4000, () => {
    console.log("Server running at http://127.0.0.1:4000");
});
