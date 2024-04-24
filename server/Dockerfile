# Specify the base image for your backend (e.g., Node.js)
FROM node:18-alpine

# Set the working directory within the container
WORKDIR /app

# Copy your backend codebase to the working directory
COPY package*.json ./
RUN npm install

# Copy your remaining backend source code
COPY . .

# Expose the port your backend listens on
EXPOSE 3000

# Start your backend application
CMD [ "npm", "start" ]
