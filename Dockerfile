FROM node:22-alpine

RUN apk add --no-cache yarn

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8765

CMD ["yarn", "dev"]