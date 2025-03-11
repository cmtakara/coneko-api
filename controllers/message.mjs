import Message from "../models/message.mjs";

// get user messages by Id only ever one
async function getMessageByUserId(req, res) {
  try {
    const foundUserById = await Message.find({ userId: req.params.userId });
    res.status(200).json(foundUserById);
  } catch (e) {
    res.send(e).status(400);
  }
}

// get all users messages by name there can be many users with the same name
async function getMessageByUserName(req, res) {
  try {
    const foundUserByName = await Message.find({ user: req.params.user });
    res.status(200).json(foundUserByName);
  } catch (e) {
    res.send(e).status(400);
  }
}

// get a single message by the message Id
async function getMessageById(req, res) {
  try {
    const foundMessage = await Message.findById(req.params.id);
    res.status(200).json(foundMessage);
  } catch (e) {
    res.send(e).status(400);
  }
}

async function getAll(req, res) {
  try {
    const foundMessages = await Message.find({});
    res.status(200).json(foundMessages);
  } catch (e) {
    res.send(e).status(400);
  }
}

//CRUD

// create a new message
async function createMessage(req, res) {
  try {
    const newMessage = await Message.create(req.body);
    res.status(200).json(newMessage);
  } catch (e) {
    console.error(e);
    res.status(400).send({ error: e.message });
  }
}

// edit a new message
const editMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMessage = await Message.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json(updatedMessage);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
}

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params; // ✅ Extract id correctly

    // ✅ Validate ObjectId format before querying
    if (!id || id.length !== 24) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res
      .status(200)
      .json({ message: "Message deleted successfully", deletedMessage });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
};

async function seed(req, res) {
  try {
    await Message.create([
      {
        user: "Player123",
        playersNeeded: 5,
        gameTitle: "Overwatch 2",
        requestDescription: "Looking for 5man ranked, silver-gold players only",
        platform: "pc",
        gameGenre: "fps",
        gameRegion: "na",
        status: "ongoing",
        inviteCode: "OW2-12345",
      },
      {
        user: "GamerX",
        playersNeeded: 5,
        gameTitle: "Valorant",
        requestDescription: "I don't know anyhting about Valorant lel",
        platform: "pc",
        gameGenre: "strategy",
        gameRegion: "eu",
        status: "scheduled",
        dateTime: "2025-03-06T15:00:00Z",
        inviteCode: "VAL-67890",
      },
      {
        user: "FortnitePro",
        playersNeeded: 4,
        gameTitle: "Fortnite",
        requestDescription: "Looking for serious players, no trolls please",
        platform: "ps5",
        gameGenre: "battle_royale",
        gameRegion: "na",
        status: "ongoing",
      },
      {
        user: "LOLmaster",
        playersNeeded: 5,
        gameTitle: "League of Legends",
        requestDescription:
          "Need support main for our team, lets create that Ocean",
        platform: "pc",
        gameGenre: "moba",
        gameRegion: "eu",
        status: "ongoing",
      },
      {
        user: "BlockBuilder",
        playersNeeded: 15,
        gameTitle: "Minecraft",
        requestDescription: "Creating Your Moms house HAHA!",
        platform: "pc",
        gameGenre: "adventure",
        gameRegion: "na",
        status: "ongoing",
        inviteCode: "MC-SERVER-12345",
      },
      {
        user: "WarzonePlayer",
        playersNeeded: 4,
        gameTitle: "Call of Duty: Warzone",
        requestDescription: "Casual evening games, Call of Dutters AHOY!",
        platform: "xbox_series",
        gameGenre: "battle_royale",
        gameRegion: "na",
        status: "scheduled",
        dateTime: "2025-03-05T20:00:00Z",
      },
      {
        user: "FIFALegend",
        playersNeeded: 11,
        gameTitle: "FIFA 25",
        requestDescription: "Looking for all positions except GK",
        platform: "ps5",
        gameGenre: "sports",
        gameRegion: "eu",
        status: "ongoing",
      },
      {
        user: "SusPlayer",
        playersNeeded: 10,
        gameTitle: "Among Us",
        requestDescription:
          "The person reading this might be the imposter (Yoon)",
        platform: "mobile",
        gameGenre: "party",
        gameRegion: "na",
        status: "scheduled",
        dateTime: "2025-03-09T18:00:00Z",
        inviteCode: "AMONGUS-123",
      },
      {
        user: "RocketPro",
        playersNeeded: 3,
        gameTitle: "Rocket League",
        requestDescription:
          "Looking for Diamond+ players for weekend tournament",
        platform: "pc",
        gameGenre: "racing",
        gameRegion: "eu",
        status: "ongoing",
      },
      {
        user: "JackboxHost",
        playersNeeded: 8,
        gameTitle: "Jackbox Party Pack",
        requestDescription: "Hosting Jackbox Party Pack 5-9, come join!",
        platform: "pc",
        gameGenre: "party",
        gameRegion: "na",
        status: "ongoing",
      },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.send(err).status(400);
  }
}

export default {
  seed,
  getAll,
  getMessageByUserName,
  createMessage,
  getMessageByUserId,
  getMessageById,
  editMessage,
  deleteMessage,
};
