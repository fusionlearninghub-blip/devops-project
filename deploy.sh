#!/bin/bash

echo "Stopping old container..."
docker stop my-app || true
docker rm my-app || true

echo "Building new image..."
docker build -t devops-app .

echo "Starting new container..."
docker run -d -p 3000:3000 --name my-app devops-app

echo "Deployment complete!"
