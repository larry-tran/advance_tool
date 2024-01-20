# Use an official Node.js runtime as a parent image
FROM node:16

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle your app source
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
