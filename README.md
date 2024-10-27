# Full Cycle 3.0 Challenge
This project is a challenge from the Full Cycle 3.0 course. The goal is to create three services using Docker Compose: MySQL, Node.js, and Nginx.

## Project Overview

### MySQL
- **Service**: `mysql`
- **Database**: `people`
- **Fields**: `ID`, `name`

### Node.js
- **Service**: `node`
- **Framework**: Express
- **Route**: `GET /`
- **Functionality**: When accessed, this route stores a random name in the MySQL database using `faker-js`.
- **Port**: 3000 (not exposed)

### Nginx
- **Service**: `nginx`
- **Functionality**: Acts as a reverse proxy.
- **Port**: 8080 (exposed)
- **Proxy**: Forwards requests to the Node.js app using the shared network created by Docker Compose.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `docker-compose up -d` to start all services.

## Accessing the Application

Open your browser and navigate to `http://localhost:8080`. Each time you access this URL, a random name will be stored in the MySQL database.

## Technologies Used

- Docker Compose
- MySQL
- Node.js (Express)
- Nginx
- faker-js

## Directory Structure

```
/workspaces/fullcycle-docker-nginx-node/
├── docker-compose.yml
├── node/
│   ├── index.js
│   ├── package.json
│   └── ...
├── nginx/
│   ├── nginx.conf
│   └── ...
├── mysql/
│   ├── init.sql
│   └── ...
└── README.md
```

## Contact

For any questions or issues, please contact the course instructors or refer to the Full Cycle 3.0 course materials.
