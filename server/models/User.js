import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  street_address: { type: String, required: true },
  city_address: { type: String, required: true },
  state_address: { type: String, required: true },
  zip_code: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;