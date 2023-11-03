# syntax=docker/dockerfile:1

# === STAGE 1: Build Image
FROM node:slim AS build-image

ARG VITE_NAMA_SITUS
ENV VITE_NAMA_SITUS=$VITE_NAMA_SITUS

RUN --mount=type=secret,id=VITE_DEV_API \
    --mount=type=secret,id=VITE_PROD_API \
    --mount=type=secret,id=VITE_GH_USER \
    --mount=type=secret,id=VITE_GH_TOKEN \
    export VITE_DEV_API=$(cat /run/secrets/VITE_DEV_API) && \
    export VITE_PROD_API=$(cat /run/secrets/VITE_PROD_API) && \
    export VITE_GH_USER=$(cat /run/secrets/VITE_GH_USER) && \
    export VITE_GH_TOKEN=$(cat /run/secrets/VITE_GH_TOKEN)

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