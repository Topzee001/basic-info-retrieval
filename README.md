# Node.js API for Basic Info Retrieval

This is a simple Node.js API, it is a get request response which returns basic info such as, email, git repo url of this project and current time in ISO 8601 format

## Features
- Responds to GET requests with the current date and time in UTC.
- Provides a fast response time (<500ms).
- Includes metadata like the developer's email and GitHub URL.

## Setup Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/Topzee001/basic-info-retrieval.git
2. Navigate to the project repository
     ```bash
    cd basic-info-retrieval

3. install required dependencies
   ```bash
    npm init -y
   npm i nodemon
5. start the server
   ```bash
    npm start
7. access the api locally with:
   ``` http://localhost:8000```

## API Documentation

Endpoint:

```GET /```

## Response:

```json
{
  "email": "ibrahimsakariyah@gmail.com",
  "current_datetime": "2025-01-29T12:34:56.789Z",
  "github_url": "https://github.com/Topzee001/basic-info-retrieval"
}

