import { Schema, model } from "mongoose";

const catregorySchema = new Schema({
  title: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

const Category = new model("category", catregorySchema);

export { Category };
