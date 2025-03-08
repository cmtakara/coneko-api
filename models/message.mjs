import mongoose from "mongoose";
const Schema = mongoose.Schema;

//!delete before merging just wanted to quick fix to start coding and testing
const category = "default-category-image-url.jpg";
// ! make userId required once we have user definded
const messageSchema = new Schema(
  {
    user: {
      type: String,
    },
    userId: {
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

// ** indexes user, genre, region, platform
// frontend would like custom tags also
const Message = mongoose.model("Message", messageSchema);

export default Message;
