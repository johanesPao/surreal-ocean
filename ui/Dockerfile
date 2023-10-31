# syntax=docker/dockerfile:1
# escape=`

# === STAGE 1: Build Image
FROM node:slim AS build-image
# Kopi package*.json ke dalam kontainer
COPY package*.json .
# Eksekusi instalasi modul
RUN npm install
# Kopi folder dan file di host (kecuali mereka yang ada dalam
# daftar di .dockerignore) ke dalam kontainer
COPY . .
# Build
RUN npm run build

# === STAGE 2: Serving Image
FROM nginx:alpine-slim AS prod-image
# Kopi static files dari /dist ke /usr/share/nginx/html
COPY --from=build-image /dist /usr/share/nginx/html
# # Hapus konfigurasi default pada nginx:alpine-slim
# RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# # Kopi nginx.conf custom ke dalam folder /etc/nginx
# COPY /conf/nginx.conf /etc/nginx
# Jalankan nginx server untuk frontend
CMD ["nginx", "-g", "daemon off;"]