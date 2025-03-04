import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    user: {
      type: String,
    },
    inviteOnly: {
      type: Boolean,
    },
    playersNeeded: {
      type: Number,
      required: true,
    },
    gameTitle: {
      type: String,
      required: true,
    },
    requestDescription: {
      type: String,
      required: true,
    },
    gameGenre: {
      type: String,
    },
    gameRegion: {
      type: String,
    },
    scheduledTime: {
      type: Date,
    },
    recurrences: {
      type: String,
    },
    ongoing: {
      type: Boolean,
    },
    gameImage: {
      type: String,
      default: category,
    },
    inviteCode: {
      type: String,
    },
    platform: {
      type: String,
    },
    status: {
      enum: ["scheduled", "ongoing"],
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
