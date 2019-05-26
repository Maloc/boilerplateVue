FROM node:8.15.1

WORKDIR /app

COPY package.json ./
RUN yarn && yarn cache clean

COPY . .
CMD ["yarn", "run", "start"]