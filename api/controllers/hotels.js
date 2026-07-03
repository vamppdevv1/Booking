import Hotel from "../models/Hotel.js";
//create
export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
};
//update
export const updateHotel = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { returnDocument: "after" },
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
};
//delete
export const deleteHotel = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    res.status(200).json("Hotel has been deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

//get one hotel
export const getOneHotel = async (req, res) => {
  const id = req.params.id;
  try {
    const foundHotel = await Hotel.findById(id);
    res.status(200).json(foundHotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all hotels
export const getAllHotels = async (req, res) => {
  try {
    const foundHotels = await Hotel.find();
    res.status(200).json(foundHotels);
  } catch (err) {
    res.status(500).json(err);
  }
};
