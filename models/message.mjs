import mongoose from "mongoose";
const Schema = mongoose.Schema;

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
      enum: ["any", "duo", "medium", "large"],
      default: "any",
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
      enum: [
        "action_adventure",
        "adventure",
        "battle_royale",
        "card",
        "fighting",
        "fps",
        "horror",
        "mmorpg",
        "moba",
        "party",
        "platformer",
        "puzzle",
        "racing",
        "rougelike",
        "rpg",
        "sandbox",
        "simulation",
        "sports",
        "strategy",
        "survival",
      ],
    },
    gameRegion: {
      type: String,
      enum: ["af", "as", "eu", "me", "na", "oc", "sa", "sea"],
    },
    scheduledTime: {
      type: Date,
    },
    recurrences: {
      type: String,
    },
    gameImage: {
      type: String,
      default: "category",
    },
    inviteCode: {
      type: String,
    },
    platform: {
      type: String,
      enum: [
        "mobile",
        "nintendo_switch",
        "pc",
        "ps4",
        "ps5",
        "retro",
        "vr",
        "xbox_one",
        "xbox_series",
        "other",
      ],
    },
    status: {
      type: String,
      enum: ["scheduled", "ongoing"],
      default: "ongoing",
    },
    customTags: {
      type: String,
      enum: [
        "18_plus",
        "achievement_hunting",
        "beginner_friendly",
        "casual",
        "competitive",
        "controller",
        "discord",
        "dps",
        "experienced",
        "family_friendly",
        "healer",
        "host_only_needed",
        "initiator",
        "mic",
        "modded",
        "ranked",
        "roleplay",
        "speedrun",
        "strategist",
        "streaming",
        "tank",
        "tournament",
        "vanilla",
        "weekend_only",
        "weekday_only",
      ],
      default: "casual",
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
