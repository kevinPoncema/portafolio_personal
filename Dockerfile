# Multi-stage Dockerfile for building an Astro static site and serving with nginx

# Build stage: use official Node image to install deps and build
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

# Install basic build deps
RUN apk add --no-cache python3 make g++

# Copy package manifests first to leverage Docker cache
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install dependencies (prefer npm if package-lock.json present)
RUN if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi

# Copy project files
COPY . .

# Build the static site
RUN npm run build


# Serve stage: use nginx to serve the generated static files from /usr/share/nginx/html
FROM nginx:alpine AS release

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built static site from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port (optional, default nginx uses 80)
EXPOSE 80

# Use the default nginx entrypoint/cmd
CMD ["nginx", "-g", "daemon off;"]
