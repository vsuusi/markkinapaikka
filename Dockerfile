# Use a base image for your server application
FROM node:18 AS server

# Set the working directory for the server
WORKDIR /usr/src/app/server

# Copy package.json and package-lock.json to install dependencies
COPY ./server/package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the server application
COPY ./server .

# Build the server application
RUN npm run build

# Start the server application
CMD ["npm", "start"]

# Use a separate stage for the client application
FROM node:14 AS client

# Set the working directory for the client
WORKDIR /usr/src/app/client

# Copy package.json and package-lock.json to install dependencies
COPY ./client/package*.json ./

# Install client dependencies
RUN npm install

# Copy the rest of the client application
COPY ./client .

# Build the client application
RUN npm run build

# Set up NGINX to serve the client application
FROM nginx:alpine AS nginx

# Copy the built client files to NGINX's HTML directory
COPY --from=client /usr/src/app/client/build /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 80


# build stage
FROM node:20-bookworm-slim as build-stage

# build client
WORKDIR /usr/src/app/client

COPY ./client/package*.json ./

RUN npm install

COPY ./client .

RUN npm run build

# final image

FROM node:20-bookworm-slim

# get client dist files from build stage

WORKDIR /usr/src/app/client

COPY --from=build-stage /usr/src/app/client/dist ./dist

# get server files

WORKDIR /usr/src/app/server

COPY ./server/package*.json ./

RUN npm install

COPY ./server .

CMD ["npm", "start"]