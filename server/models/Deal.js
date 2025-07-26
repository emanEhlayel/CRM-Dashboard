import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    room_images: {
      type: [String],
      default: [],
    },
    street_address: { type: String, required: true },
    city_address: { type: String, required: true },
    state_address: { type: String, required: true },
    zip_code: { type: String, required: true },
    room_area: { type: Number },
    number_of_people: { type: Number },
    appointment_date: { type: Date },
    special_instructions: { type: String },
    room_access: {
      type: String,
      enum: ["Keys with doorman", "Keys with owner", "No keys"],
      required: true,
    },
    price: { type: Number, required: true },
    progress: {
      type: String,
      enum: ["In Progress", "Completed", "Cancelled"],
      default: "In Progress",
    },
  },
  { timestamps: true }
);

const Deal = mongoose.model("Deal", dealSchema);

export default Deal;
