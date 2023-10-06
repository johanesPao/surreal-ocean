# syntax=docker/dockerfile:1
# escape=`
# ---------------------------------------------------------- Build Image
FROM node:latest AS build
ENV FOLDER /ui
# Update paket dan aplikasi pada debian os untuk kompilasi npm modul
RUN apt-get update && apt-get install -y
WORKDIR ${FOLDER}
COPY package*.json ${FOLDER}
RUN npm -i


# ---------------------------------------------------------- Development Image
# Menggunakan node dengan platform minimal alpine
FROM node:alpine
# Setup variabel lingkungan
ENV FOLDER /ui
COPY --from=build ${FOLDER} ${FOLDER}
# Set pengguna dalam kontainer default ke node dan
# memastikan semua perintah di kontainer di bawah ini
# dieksekusi dan dimiliki oeleh pengguna node
USER node
# Folder kerja
WORKDIR ${FOLDER}
COPY --chown=node:node --from=build ${FOLDER}/node_modules ${FOLDER}/node_modules
COPY --chown=node:node . ${FOLDER}

