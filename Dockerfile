# build stage
FROM node:20-bookworm-slim as build-stage

# build client
WORKDIR /usr/src/app/client

COPY ./client/package*.json ./

RUN npm install

COPY ./client .

RUN npm run build

# final image

FROM node:20-bookworm-slim

# get client dist files from build stage

WORKDIR /usr/src/app/client

COPY --from=build-stage /usr/src/app/client/dist ./dist

# get server files

WORKDIR /usr/src/app/server

COPY ./server/package*.json ./

RUN npm install

COPY ./server .

CMD ["npm", "start"]