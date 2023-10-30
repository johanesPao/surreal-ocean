# syntax=docker/dockerfile:1
# escape=`
# Menggunakan scratch image untuk build private key dan ssl cert
FROM alpine:latest as build-rahasia

# Menangkap ARG kedalam ENV
ARG SSL_KEY
ARG SSL_CERT
ARG SSL_KEY_FILE
ARG SSL_CERT_FILE

# Menulis key dan crt ke folder pada build-rahasia
RUN echo "${SSL_KEY}" | base64 -d > /tmp/SSL_KEY_FILE
RUN echo "${SSL_CERT}" | base64 -d > /tmp/SSL_CERT_FILE

# Stage akhir build nginx dengan konfigurasi dan key cert rahasia dari build-rahasia
FROM nginx:alpine-slim

ARG SSL_KEY_FILE
ARG SSL_KEY_PATH
ARG SSL_CERT_FILE
ARG SSL_CERT_PATH

# Working directory
WORKDIR /server

# Key dan cert SSL
COPY --from=build-rahasia /tmp/${SSL_KEY_FILE} ${SSL_KEY_PATH}${SSL_KEY_FILE}
COPY --from=build-rahasia /tmp/${SSL_CERT_FILE} ${SSL_CERT_PATH}${SSL_CERT_FILE}

# Konfigurasi Nginx
COPY nginx.conf /etc/nginx/nginx.conf:ro

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]