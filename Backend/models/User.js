import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  numberOfTravelers: {
    type: Number,
    required: true,
  },
  estimatedDateOfArrival: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  additionalInformation: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
