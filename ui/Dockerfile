# syntax=docker/dockerfile:1
# escape=`
# ---------------------------------------------------------- Build Image
FROM alpine AS build-ui
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
FROM nginx AS production-ui
ENV FOLDER /ui
ENV FOLDER_BUILD /dist
COPY --from=build-ui ${FOLDER}${FOLDER_BUILD} /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]