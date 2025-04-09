wrong-api

A simple Express-based API for tracking injustices and individuals involved. This project interfaces with a PostgreSQL database and provides routes for retrieving and managing "wrongs" and "people".
Features

    View all "wrongs"

    Get individual person details by ID

    Add a new person to the database
    REST API with Express

    PostgreSQL database integration

    Environment variable support with dotenv

    Basic CORS configuration

Tech Stack

    Node.js

    Express

    PostgreSQL

    CORS

Getting Started
Prerequisites

    Node.js (v16+ recommended)

    PostgreSQL

    npm

Installation

    Clone the repo:

git clone https://github.com/bbm2910/wrong-api.git
cd wrong-api

Install dependencies:

npm install

Create a PostgreSQL database and table structure (not included—assumed via db module).

Start the server:

    node index.js

API Endpoints
Method Endpoint Description
GET / Returns a welcome message
GET /wrongs Fetches all "wrongs" from the DB
GET /people/:id Fetches a specific person by ID
POST /people Adds a new person (expects JSON)
POST /people request body:

{
"person_name": "John Doe"
}

Notes

    PATCH and DELETE routes are defined but not yet implemented.

    Database connection is handled through a local module ./database/db, which must expose a query method compatible with PostgreSQL.
