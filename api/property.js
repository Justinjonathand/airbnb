import connectMongoDB from "../mongodb";
import Property from "../Property"; 

export default async function handler(req, res) {
  await connectMongoDB();

  const { method } = req;

  switch (method) {
    // CREATE new property
    case "POST":
      try {
        const property = await Property.create(req.body);
        res.status(201).json({ success: true, data: property });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // READ all properties
    case "GET":
      try {
        const properties = await Property.find({});
        res.status(200).json({ success: true, data: properties });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // UPDATE property by ID
    case "PUT":
      try {
        const { id } = req.query;
        const property = await Property.findByIdAndUpdate(id, req.body, { new: true });
        if (!property) {
          return res.status(404).json({ success: false, message: "Property not found" });
        }
        res.status(200).json({ success: true, data: property });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    // DELETE property by ID
    case "DELETE":
      try {
        const { id } = req.query;
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (!deletedProperty) {
          return res.status(404).json({ success: false, message: "Property not found" });
        }
        res.status(200).json({ success: true, message: "Property deleted successfully" });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method Not Allowed" });
      break;
  }
}
