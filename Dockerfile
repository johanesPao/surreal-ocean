# syntax=docker/dockerfile:1
# escape=`

# Dockerfile untuk build nginx reverse proxy pada 
# docker-compose.yml yang akan melakukan routing rekues 
# ke services yang diminta pada server 
FROM nginx:alpine-slim

# Hapus konfigurasi nginx bawaan image
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Kopi nginx.conf, private key dan sertifikat ssl pada server
# ke dalam folder container nginx reverse proxy ini
COPY /conf /etc/nginx
COPY /certs /etc/ssl/certs
COPY /key /etc/ssl/private