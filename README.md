# SpaceLog — Mission Control

A space mission tracking website. Built for DS2 (Docker & CI/CD project).

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/) (version 20+)
- [Docker Compose](https://docs.docker.com/compose/) (included with Docker Desktop)

## Run with Docker

```bash
# Build and start the container
docker-compose up --build

# Open your browser at:
# http://localhost:8080
```

## Run manually with Docker

```bash
# Build the image
docker build -t spacelog-app .

# Run the container
docker run -p 8080:80 spacelog-app
```

## Project Structure

```
├── index.html              # Main website page
├── style.css               # Styles
├── script.js               # JavaScript
├── Dockerfile              # Docker image recipe
├── docker-compose.yml      # Multi-service orchestration
├── .dockerignore           # Files to exclude from Docker
└── .github/
    └── workflows/
        └── ci.yml          # GitHub Actions CI/CD pipeline
```
