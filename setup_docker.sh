#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Define the Docker image name
IMAGE_NAME="cs492-group-project"

echo "Building the Docker image..."
docker build -t $IMAGE_NAME .

echo "Running the Docker container..."
docker run -d -p 3000:3000 --name $IMAGE_NAME $IMAGE_NAME

echo "Docker container is running at http://localhost:3000"

