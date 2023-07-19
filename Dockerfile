FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm i

# Copy app files
COPY . .

# Start app
CMD ["npm", "run", "dev"]
