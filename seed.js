// seed.js
const mongoose = require("mongoose");
const Book = require("./models/Book");

const MONGO_URI = "mongodb://127.0.0.1:27017/booksdb";

const seedBooks = [
  {
    id: "b1",
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    year: 2008,
    genre: "Science Fiction",
    priceAUD: "29.99",
    summary:
      "The Three-Body Problem is the first novel in the Remembrance of Earth's Past trilogy. The series portrays a fictional past, present, and future wherein Earth encounters an alien civilization...",
  },
  {
    id: "b2",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Classic",
    priceAUD: "22.00",
    summary:
      "An orphaned governess confronts class, morality, and love at Thornfield Hall, uncovering Mr. Rochester’s secret and forging her own independence.",
  },
  {
    id: "b3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
    priceAUD: "22.00",
    summary:
      "Elizabeth Bennet and Mr. Darcy navigate pride, misjudgement, and social expectations in a sharp study of manners and marriage.",
  },
  {
    id: "b4",
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical Fiction",
    priceAUD: "25.39",
    summary:
      "In a ruined Italian villa at the end of WWII, four strangers with intersecting pasts confront memory, identity, and loss.",
  },
  {
    id: "b5",
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    priceAUD: "31.99",
    summary:
      "In Omnia, the god Om returns as a tortoise, and novice Brutha must confront dogma, empire, and the nature of belief.",
  },
];

async function run() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected");

  // clean then insert
  await Book.deleteMany({});
  await Book.insertMany(
    seedBooks.map((b) => ({
      ...b,
      priceAUD: mongoose.Types.Decimal128.fromString(b.priceAUD),
    }))
  );

  console.log("Seed done");
  await mongoose.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
