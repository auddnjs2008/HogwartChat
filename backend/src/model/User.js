import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  password: String,
  dormitory: String,
});

const model = mongoose.model("User", UserSchema);

export default model;
