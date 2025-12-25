# SIT725 – Task 5.3  
## MVC Web Application with MongoDB

### Student Name: Fahad Alsaedi  
### Unit: SIT725 – Applied Software Engineering  
### Task: 5.3  
### Technology Stack: Node.js, Express, MongoDB, Mongoose, Vanilla JavaScript

---

## 1. Project Overview
This project is developed as part of **SIT725 Task 5.3**.  
The objective of this task is to extend the MVC-based web application from Task 5.2 by integrating **MongoDB** as the data persistence layer and removing all hardcoded data from the application.

The application provides a simple **Books Catalogue** that allows users to:
- Retrieve a list of books from a MongoDB database
- View detailed information for a selected book
- Verify API integrity using a dedicated endpoint

---

## 2. Architecture (MVC Pattern)

The application follows the **Model–View–Controller (MVC)** architecture:

- **Model**  
  - MongoDB database accessed using Mongoose
  - `Book` schema defines the structure of book data
  - `priceAUD` is stored using `Decimal128` as required

- **View**  
  - Static client interface built using HTML, CSS, and Vanilla JavaScript
  - Located in the `public/` directory

- **Controller**  
  - Handles HTTP requests and responses
  - Contains application logic
  - Located in the `controllers/` directory

- **Service Layer**  
  - Handles database interactions
  - No hardcoded data is used
  - Located in the `services/` directory

- **Routes**  
  - Defines API endpoints
  - No business logic inside routes
  - Located in the `routes/` directory

---

## 3. Project Structure

│
├── controllers/
│ ├── booksController.js
│ └── index.js
│
├── models/
│ └── Book.js
│
├── routes/
│ └── books.routes.js
│
├── services/
│ └── booksService.js
│
├── public/
│ ├── index.html
│ └── app.js
│
├── seed.js
├── server.js
├── package.json
└── README.md
---

## 4. API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/books` | Retrieve all books |
| GET | `/api/books/:id` | Retrieve a single book by ID |
| GET | `/api/integrity-check42` | Returns HTTP 204 (No Content) |

---

## 5. Database Seeding

A `seed.js` file is included to populate the MongoDB database with initial data.

The seed file:
- Inserts 5 book records
- Uses `Decimal128` for `priceAUD`
- Clears existing data before inserting new records

### Run seed script:
```bash
npm run seed

6. Running the Application
Install dependencies
npm install

Seed the database
npm run seed

Run the server (development mode)
npm run dev

Run the server (production mode)
npm start


The application will be available at:

http://localhost:3000

7. Client Interface

The client interface allows users to:

Click a button to retrieve all books

View book titles with prices in AUD

Click on a book to see detailed information including summary and price

The client is implemented using Vanilla JavaScript without any frontend framework.

8. Task Requirements Compliance

MVC architecture implemented ✔️

MongoDB used instead of hardcoded data ✔️

Decimal128 used for priceAUD ✔️

Seed script provided ✔️

Required API routes implemented ✔️

Integrity check endpoint implemented ✔️

Vanilla JavaScript client provided ✔️

9. Conclusion

This project successfully demonstrates the use of MVC architecture with MongoDB integration using Node.js and Express.
All requirements of SIT725 Task 5.3 have been met.