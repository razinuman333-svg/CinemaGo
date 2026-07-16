import express from "express";
import { getFavorites, getUserBookings,upDateFavorite } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/bookings', getUserBookings);
userRouter.post('/update-favorite', upDateFavorite);
userRouter.get('/favorites', getFavorites);

export default userRouter;