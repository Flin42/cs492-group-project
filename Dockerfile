# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# RUN pnpm install # If using pnpm
# RUN yarn install --frozen-lockfile # If using yarn
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the static files using Node.js and 'serve'
FROM node:20-alpine
WORKDIR /app

# Install the 'serve' package globally (or locally if preferred)
RUN npm install -g serve

# Copy the built artifacts from the 'builder' stage
# Vite builds to the 'dist' directory by default
COPY --from=builder /app/dist ./dist

# Expose the port 'serve' will listen on (default is 3000)
EXPOSE 3000

# Start 'serve' to serve the 'dist' folder
# The '-s' flag handles SPA routing (rewrites all requests to index.html)
CMD [ "serve", "-s", "dist", "-l", "3000" ]
