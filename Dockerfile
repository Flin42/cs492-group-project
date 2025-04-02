# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy only the package.json
COPY package.json ./

# Install dependencies without generating a package-lock.json
RUN npm install --no-package-lock

# Copy the rest of the application files
COPY . . 
RUN npm run build

# Stage 2: Serve the static files using Node.js and 'serve'
FROM node:20-alpine
WORKDIR /app

# Install the 'serve' package globally
RUN npm install -g serve

# Copy the built artifacts from the 'builder' stage
COPY --from=builder /app/dist ./dist

# Expose the port 'serve' will listen on (default is 3000)
EXPOSE 3000

# Start 'serve' to serve the 'build' folder
CMD [ "serve", "-s", "dist", "-l", "3000" ]
