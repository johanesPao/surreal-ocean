# syntax=docker/dockerfile:1
# escape=`
# STAGE 1: Build Image
FROM alpine AS build-ui
RUN apk update && apk upgrade
RUN apk add nodejs npm
# Penambahan env variabel untuk sementara
# Nantinya env akan diload dari env repository
# yang akan di-inject dalam CI/CD dan build release
# docker
WORKDIR /ui
COPY package*.json /ui
RUN npm install
COPY . ${FOLDER}
RUN npm run build

# STAGE 2: Production Image
FROM scratch AS production-ui
WORKDIR /ui
COPY --from=build-ui /ui/dist /ui