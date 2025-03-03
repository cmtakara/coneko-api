import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema([
  {
    user_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      trim: true,
    },
    // for furture integration no one had confirmed if this should be added now
    timezone: {
      type: String,
    },
    age: {
      type: String,
      enum: [over, under],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transfrom: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  },
]);

const Users = mongoose.model("user", userSchema);

export default Users;
