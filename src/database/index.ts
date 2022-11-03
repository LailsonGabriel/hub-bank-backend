import mongoose from "mongoose";
import "dotenv/config";

export default function connectToMongoDB(): void {
  mongoose.connect(
    "mongodb+srv://lailsongabriel:lailson29@hub-bank.qgklt51.mongodb.net/hub-bank?retryWrites=true&w=majority",
    (error: any) => {
      if (error) {
        return console.log(`Could not connect to MongoDB: ${error.message}`);
      }
      return console.log("Connected to MongoDB!");
    },
  );
}
