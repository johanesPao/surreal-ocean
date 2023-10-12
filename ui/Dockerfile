# syntax=docker/dockerfile:1
# escape=`
# ---------------------------------------------------------- Build Image
FROM alpine AS build-image
RUN apk update && apk upgrade
RUN apk add nodejs npm
ENV FOLDER /ui
ENV FOLDER_BUILD /dist
WORKDIR ${FOLDER}
COPY package*.json ${FOLDER}
RUN npm install
COPY . ${FOLDER}
RUN npm run build

# ---------------------------------------------------------- Production Image
FROM nginx AS production-image
ENV FOLDER /ui
ENV FOLDER_BUILD /dist
COPY --from=build-image ${FOLDER}${FOLDER_BUILD} /usr/share/nginx/html