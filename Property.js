import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    required: true,
  },
  amenities: {
    type: [String], // Array of amenities (WiFi, Pool, AC, etc.)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Property = mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
