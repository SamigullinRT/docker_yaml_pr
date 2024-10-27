# Use official Node.js image as a base
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port
EXPOSE 80

# Start the app
CMD ["npm", "start"]
