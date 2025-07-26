import User from "../models/User.js";

export const addCustomer = async (req, res) => {
  try {
    const {
      fName,
      lName,
      email,
      phone,
      street_address,
      city_address,
      state_address,
      zip_code,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    if (
      !fName ||
      !lName ||
      !email ||
      !phone ||
      !street_address ||
      !city_address ||
      !state_address ||
      !zip_code
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({
      fName,
      lName,
      email,
      phone,
      street_address,
      city_address,
      state_address,
      zip_code,
    });
    await newUser.save();

    res.json({ message: "Customer added successfully", user: newUser });
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await User.find({});
    res.json(customers);
  } catch (error) {
    console.error(error.message);
  }
};


export const selectCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await User.findById(id);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json(customer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
