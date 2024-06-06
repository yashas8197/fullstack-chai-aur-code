import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title:
        "What do you get when you cross a snowman and a vampire? Frostbite!",
    },
    {
      id: 3,
      title:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 4,
      title: "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      id: 5,
      title: "What do you call fake spaghetti? An impasta!",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
