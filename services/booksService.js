// services/booksService.js
const Book = require("../models/Book");

async function getAllBooks() {
  // return array of docs
  return Book.find({}, { _id: 0 }).lean();
}

async function getBookById(id) {
  return Book.findOne({ id }, { _id: 0 }).lean();
}

module.exports = { getAllBooks, getBookById };
