import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";
//create
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};
//update
export const updateRoom = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { returnDocument: "after" },
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
    Room;
  }
};
//delete
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const id = req.params.id;
  try {
    const deletedRoom = await Room.findByIdAndDelete(id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted successfully");
  } catch (err) {
    next(err);
  }
};

//get one room
export const getOneRoom = async (req, res, next) => {
  const id = req.params.id;
  try {
    const foundHotel = await Hotel.findById(id);
    res.status(200).json(foundHotel);
  } catch (err) {
    next(err);
  }
};

//get all rooms
export const getAllRooms = async (req, res, next) => {
  try {
    const foundRooms = await Room.find();
    res.status(200).json(foundRooms);
  } catch (err) {
    next(err);
  }
};
Room;
