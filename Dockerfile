# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /usr/src/note-app
ENV NODE_PATH /usr/src/note-app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . /usr/src/note-app

# Set environment variables
ENV MONGO_URI mongodb://mongo:27017/note-app
ENV REDIS_URI redis://redis:6379

# Expose port 8000
EXPOSE 8000

# Start the Node.js app
CMD ["npm", "start"]
