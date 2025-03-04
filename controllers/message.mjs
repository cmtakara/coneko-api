import Message from "../models/message.mjs";

async function seed(req, res) {
  try {
    await Message.create([
      {
        stuff: String,
      },
    ]);
  } catch (err) {
    res.send(err).status(400);
  }
}

export default { seed };
