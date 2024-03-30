## Task Management App 

 * The Task Management Application optimizes task organization, prioritization, and collaboration. Users efficiently create, update, and categorize tasks for improved productivity and clarity.

### Table of Contents
* [Introduction](#Introduction)

* [Prerequisites](#prerequisites)

* [Installation and Setup](#install-and-setup)

* [Folder Structure](#folder-structure)

* [Configuration](#configuration)

* [Controllers](#controllers)

* [Models](#models)

* [Routes](#routes)

* [Starting the Server](#starting-the-server)

* [Deployed Link](#deployed-link)


### Introduction
 - This backend repository contains the server-side implementation for a Task Management Application. It provides RESTful API endpoints to perform CRUD operations on tasks stored in a MongoDB database.

### Prerequisites
 - Before getting started, ensure you have the following:

 - Node.js installed on your local machine.
 - MongoDB installed locally or accessible via a MongoDB URI.
 - Basic understanding of RESTful APIs.
### Installation and Setup
 - Clone this repository to your local machine.
 - Navigate to the project directory in your terminal.
 - Run npm install to install all dependencies.
 - Create a .env file in the root directory and define the necessary environment variables.
- Start the server by running npm run server.

### Folder Structure
            .
            ├── config/
            │   └── db.js
            ├── controller/
            │   └── taskController.js
            ├── modals/
            │   └── taskModal.js
            ├── routes/
            │   └── taskRoute.js
            ├── .env
            ├── index.js
            └── package.json
### Configuration
 - MongoDB Configuration (config/db.js):  - Responsible for setting up the MongoDB connection using Mongoose. It loads the connection URI from the environment variables.
### Controllers
 - addTask(req, res): Adds a new task to the database.
 - getTask(req, res): Retrieves all tasks from the database.
 - updateTask(req, res): Updates an existing task in the database.
 - deleteTask(req, res): Deletes a task from the database.
 - prioritizeTasks(req, res): Prioritizes tasks based on their priority level.

 ### Models
  
            title: String,
            description: String,
            priority: { type: String, enum: ['low', 'medium', 'high'],default: ["medium"] },
            category: String
 
### Routes

`Add Task Route`

- Endpoint: POST /tasks/add
- Response: Adds a new task to the database. Requires a JSON body containing task details (title, description, priority, category).

`Get All Tasks Route`

- Endpoint: GET /tasks/allTask
- Response: Retrieves all tasks from the database. Responds with a JSON array containing all tasks.

`Prioritize Tasks Route`

- Endpoint: GET /tasks/prioritize
- Response: Prioritizes tasks based on their priority level. Tasks are sorted into 'high', 'medium', and 'low' priority categories and updated in the database accordingly.

`Delete Task Route`

- Endpoint: DELETE /tasks/remove/:id
- Response: Deletes a task from the database based on its unique identifier (ID) provided in the URL parameter.

`Update Task Route`

- Endpoint: PATCH /tasks/edit/:id
- Response: Updates an existing task in the database based on its unique identifier (ID) provided in the URL parameter. Requires a JSON body containing the fields to be updated.


### Starting the Server
- Run npm start to start the server.
- The server will run on the port specified in the .env file.

### Deployed Link
[Live](https://defiant-sweatshirt-elk.cyclic.app/)