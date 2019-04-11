FROM node:8.14.1 as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn && yarn cache clean

COPY . .
RUN yarn build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html