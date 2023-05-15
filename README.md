# login-app

Prerequisites

1)Node.js installed on your machine

2)A MySQL database set up and running

3)A Google Firebase account with a project set up and Firebase Admin SDK added to your 

4)Node.js project

5)A basic understanding of React, Node.js and MySQL

Step 1: Set up the project

Create a new React project using create-react-app
Initialize a new Node.js project using npm init
Install required dependencies for both frontend and backend using npm

Step 2: Set up the MySQL database

Install MySQL server and client on your system
Create a new MySQL database for the login application
Create a new table for user authentication that includes fields like phone number, OTP, and login status

Step 3: Set up Firebase

Create a new Firebase project and enable phone number authentication
Configure Firebase SDK for JavaScript in your React project
Use Firebase APIs to send OTP to the user's phone number

Step 4: Implement frontend

Create a login form with input fields for phone number and OTP
Use Firebase APIs to send OTP to the user's phone number when they click on the "Send OTP" button
Implement form validation for phone number and OTP fields
When the user submits the form, call the Node.js API to verify the OTP

Step 5: Implement backend

Create a Node.js server using Express framework
Implement API endpoints for user authentication that receive phone number and OTP from the frontend
Use Sequelize ORM to connect to the MySQL database and store user details
Implement a function to generate and validate OTP
Use Firebase SDK to verify OTP sent to the user's phone number

Step 6: Test the application

Test the application by sending OTP to a phone number and verifying it on the login page
Use Postman to test API endpoints for user authentication
