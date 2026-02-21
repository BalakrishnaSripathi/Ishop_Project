import { MongoClient } from "mongodb";

const uri = "mongodb+srv://react_db:abcd1234@reactdb.a5ozgks.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("reactdb");

    const usersCollection = db.collection("users");

    // Insert Sample User
    const result = await usersCollection.insertOne({
      name: "Balakrishna",
      age: 25,
      email: "bala@gmail.com",
      role: "Developer"
    });

    console.log("✅ User inserted:", result.insertedId);

  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
  }
}

run();
