# Build stage
FROM node:22-alpine as builder

# Install build dependencies
RUN apk add --no-cache yarn

WORKDIR /app

# Copy package.json and yarn.lock separately to leverage Docker cache
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY . .

# Build the application
RUN yarn build

# Final stage
FROM node:22-alpine

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Install only production dependencies
RUN yarn install --production --frozen-lockfile


# 필요하면 이거 넣자 그런데 이거 안 넣고 Docker-compose 에서 env_file 로 하는거 추천
# COPY .env ./

# Run the application
CMD ["node", "./dist/index.js"]
