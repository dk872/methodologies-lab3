# User Management Application

## Description
This is a simple Node.js application that interacts with a MongoDB database to manage user information. 
It allows users to add, view, and delete records of users via an interactive menu in the terminal.

## Features
- ✅ Add a new user (name and age)
- 📋 View all saved users
- ❌ Delete a user from the database

## Requirements
- Node.js (v18 or newer recommended)
- npm
- MongoDB instance (local or cloud, e.g., MongoDB Atlas)

## Running the program
First, clone the repository and navigate into the project directory:
```
git clone https://github.com/dk872/methodologies-lab3
```
```
cd .\methodologies-lab3\JavaScript
```

Install dependencies:
```
npm install
```

Run MongoDB locally:
  - Install MongoDB on your computer.
  - After installation, run the MongoDB server by executing this сommand:
    ```
    mongod
    ```
    This starts the MongoDB server locally on the default port (27017).
  - Set the MONGODB_URI in your .env file to (if you don't have it):
    ```
    MONGODB_URI=mongodb://localhost:27017/users-cli
    ```

Once you have set up MongoDB and installed the necessary dependencies, you can run the application with:
```
node app.js
```