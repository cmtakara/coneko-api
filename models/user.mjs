import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({});

const Users = mongoose.model("user", userSchema);

export default Users;
