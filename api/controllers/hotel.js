import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";
//create
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};
//update
export const updateHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { returnDocument: "after" },
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};
//delete
export const deleteHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    const hotel = await Hotel.findById(id);
    const rooms = hotel.rooms;
    for (const room of rooms) {
      await Room.findByIdAndDelete(room);
    }
    await Hotel.findByIdAndDelete(id);
    res.status(200).json("Hotel has been deleted successfully");
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};

//get one hotel
export const getOneHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    const foundHotel = await Hotel.findById(id);
    res.status(200).json(foundHotel);
  } catch (err) {
    next(createError(404, "Hotel not found"));
  }
};

//get all hotels
export const getAllHotels = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const foundHotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: Number(min) || 1, $lt: Number(max) || 10000 },
    }).limit(limit);
    res.status(200).json(foundHotels);
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};
//Count by city
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      }),
    );
    res.status(200).json(list);
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};
//Count by type
export const countByType = async (req, res, next) => {
  const types = req.query.types.split(",");
  try {
    const list = await Promise.all(
      types.map((type) => {
        return Hotel.countDocuments({ type: type });
      }),
    );
    res.status(200).json([
      { name: "Hotels", count: list[0] },
      { name: "Apartment", count: list[1] },
      { name: "Villas", count: list[3] },
      { name: "Cabins", count: list[4] },
      { name: "Resorts", count: list[2] },
    ]);
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};
//Get rooms
export const getRooms = async (req, res, next) => {
  const id = req.params.id;
  try {
    const hotel = await Hotel.findById(id).populate("rooms");
    const rooms = hotel.rooms;
    res.status(200).json(rooms);
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};
//Get count
export const getCount = async(req,res,next)=>{
 try {
   const count = await Hotel.countDocuments()
 res.status(200).json(count)
 } catch (err) {
   next(createError(404, "Something went wrong"));
 }
}