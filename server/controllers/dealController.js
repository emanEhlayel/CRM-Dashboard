import Deal from "../models/Deal.js";
import User from "../models/User.js";

export const addDeal = async (req, res) => {
  try {
    const {
      customer,
      room_images,
      street_address,
      city_address,
      state_address,
      zip_code,
      room_area,
      number_of_people,
      appointment_date,
      special_instructions,
      room_access,
      price,
      progress,
    } = req.body;

    if (
      !customer ||
      !street_address ||
      !city_address ||
      !state_address ||
      !zip_code ||
      !room_access ||
      price === undefined
    ) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    const existingCustomer = await User.findById(customer);
    if (!existingCustomer) {
      return res.status(404).json({ message: "Customer not found." });
    }

    const newDeal = new Deal({
      customer,
      room_images,
      street_address,
      city_address,
      state_address,
      zip_code,
      room_area,
      number_of_people,
      appointment_date,
      special_instructions,
      room_access,
      price,
      progress,
    });

    await newDeal.save();

    res
      .status(201)
      .json({ message: "Deal created successfully", deal: newDeal });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};


export const editDeal = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const deal = await Deal.findByIdAndUpdate(id, updates, { new: true });

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    res.status(200).json({ message: "Deal updated successfully", deal });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};


export const getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find().populate("customer");
    res.status(200).json(deals);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};


export const getDealDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const deal = await Deal.findById(id).populate("customer");

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    res.status(200).json(deal);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
