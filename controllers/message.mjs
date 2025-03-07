import Message from "../models/message.mjs";

async function getAll(req, res) {
  try {
    const foundMessages = await Message.find({});
    res.status(200).json(foundMessages);
  }
  catch (e) {
    res.send(e).status(400);
  }
}

async function getUserMessage(req, res) {
  try{
    const foundUserMessage = await message.find({user: req.params.user})
    res.status(200).json(foundUserMessage)
  }
  catch(e){
    res.send(e).status(400); 
  }
}

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
        gameGenres: "adventure",
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
        gameGenres: "battle_royale",
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
        gameGenres: "sports",
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
        gameGenres: "party",
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
        gameGenres: "racing",
        gameRegion: "eu",
        status: "ongoing",
      },
      {
        user: "JackboxHost",
        playersNeeded: 8,
        gameTitle: "Jackbox Party Pack",
        requestDescription: "Hosting Jackbox Party Pack 5-9, come join!",
        platform: "pc",
        gameGenres: "party",
        gameRegion: "na",
        status: "ongoing",
      },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.send(err).status(400);
  }
}

export default { seed, getAll };
