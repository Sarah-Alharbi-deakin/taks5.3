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

