#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Define the Docker image name and container name
IMAGE_NAME="cs492-group-project"

echo "Building the Docker image..."
docker build -t $IMAGE_NAME .

# Check if a container with the same name is already running
if [ "$(docker ps -q -f name=$IMAGE_NAME)" ]; then
    echo "Stopping existing container..."
    docker stop $IMAGE_NAME
fi

# Check if a container with the same name exists (stopped or running)
if [ "$(docker ps -aq -f name=$IMAGE_NAME)" ]; then
    echo "Removing existing container..."
    docker rm $IMAGE_NAME
fi

echo "Running the Docker container..."
docker run -d -p 3000:3000 --name $IMAGE_NAME $IMAGE_NAME

echo "Docker container is running at http://localhost:3000"
