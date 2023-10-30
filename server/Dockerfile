# syntax=docker/dockerfile:1
# escape=`
# Menggunakan scratch image untuk build private key dan ssl cert
FROM alpine:latest as build-rahasia

# Menangkap ARG kedalam ENV
ARG SSL_KEY
ARG SSL_CERT

# Menulis key dan crt ke folder pada build-rahasia
RUN echo "${SSL_KEY}" | base64 -d > /tmp/aws-surreal-ocean-priv.key
RUN echo "${SSL_CERT}" | base64 -d > /tmp/aws-surreal-ocean.crt

# Stage akhir build nginx dengan konfigurasi dan key cert rahasia dari build-rahasia
FROM nginx:alpine-slim

# Working directory
WORKDIR /server

# Key dan cert SSL
COPY --from=build-rahasia /tmp/aws-surreal-ocean-priv.key /etc/ssl/private/aws-surreal-ocean-priv.key
COPY --from=build-rahasia /tmp/aws-surreal-ocean.crt /etc/ssl/certs/aws-surreal-ocean.crt

# Konfigurasi Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf:ro

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]