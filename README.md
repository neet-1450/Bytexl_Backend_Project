# Bytexl_Backend_Project



Here is a suggested README content for your project based on the provided code structure:

---

# Subscriber Management API

## Project Overview

This project is a **Node.js and Express**-based API designed to manage subscriber data. The application includes routes to retrieve all subscribers, view subscriber details by ID, and fetch specific subscriber fields. It also contains a sample "dummy" route for testing purposes. The data is stored and accessed using **MongoDB** with **Mongoose** as the ORM.

## Features

- **Retrieve All Subscribers**: Fetch a list of all subscribers with detailed information.
- **Retrieve Subscriber by ID**: Access detailed information of a specific subscriber using their unique ID.
- **Fetch Subscriber Names and Subscribed Channels**: Retrieve a list of all subscribers' names and their subscribed channels only.
- **Dummy Route for Testing**: A sample route (`/dummyapi`) that returns a success message for testing the API setup.

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Middleware**: Body-parser for handling JSON and URL-encoded data

## API Endpoints

- **GET /**: Serves the main HTML file (index.html) for the front end.
- **GET /subscribers**: Returns a JSON list of all subscribers.
- **GET /subscribers/:id**: Fetches a single subscriber by their ID.
- **GET /subscriberss/names**: Retrieves all subscriber names and the channels they are subscribed to.
- **GET /dummyapi**: Returns a "Dummy API is working" message for test verification.

## Getting Started

### Prerequisites

- **Node.js** and **npm**
- **MongoDB** installed or hosted database

### Installation

1. Clone the repository:
   
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Install dependencies:
   
   npm install
  

3. Configure MongoDB connection in `model/schema.js` or relevant configuration file.

4. Run the server:

   npm start
  
5. Access the API at `http://localhost:3000`.
