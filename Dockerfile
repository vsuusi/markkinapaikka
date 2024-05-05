# build stage
FROM node:20-bookworm-slim as build-stage

# build client
WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

COPY ./client .

RUN npm run build

# final image

FROM node:20-bookworm-slim

# get client dist files from build stage

WORKDIR /app/client

COPY --from=build-stage /app/client/dist ./dist

# get server files

WORKDIR /app/server

COPY ./server/package*.json ./

RUN npm install

COPY ./server .

EXPOSE 3000

CMD ["npm", "start"]