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
    next(createError(404, "Something went wrong"));
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
    next(createError(404, "Something went wrong"));
    
  }
};
//update room availability
export const updateRoomAvailability = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Room.updateOne(
      { "roomNumber._id": id },
      {
        $push: {
          "roomNumber.$.unavailableDates": req.body.dates,
        },
      },
    );
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};
//delete
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const id = req.params.id;
  try {
   await Room.findByIdAndDelete(id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: id },
      });
    } catch (err) {
      next(createError(404, "Something went wrong"));
    }
    res.status(200).json("Room has been deleted successfully");
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};

//get one room
export const getOneRoom = async (req, res, next) => {
  const id = req.params.id;
  try {
    const foundRoom = await Room.findById(id);
    res.status(200).json(foundRoom);
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};

//get all rooms
export const getAllRooms = async (req, res, next) => {
  try {
    const foundRooms = await Room.find();
    res.status(200).json(foundRooms);
  } catch (err) {
    next(createError(404, "Something went wrong"));
  }
};
//Get count
export const getCount = async(req,res,next)=>{
 try {
   const count = await Room.countDocuments()
 res.status(200).json(count)
 } catch (err) {
   next(createError(404, "Something went wrong"));
 }
}