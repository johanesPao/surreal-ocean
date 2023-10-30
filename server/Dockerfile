# syntax=docker/dockerfile:1
# escape=`
# Menggunakan scratch image untuk build private key dan ssl cert
FROM scratch as build-rahasia

# Menulis key dan crt ke folder pada build-rahasia
RUN --mount=type=secret,id=SSL_KEY echo -e "${SSL_KEY}" > /tmp/aws-surreal-ocean-priv.key
RUN --mount=type=secret,id=SSL_CERT echo -e "${SSL_CERT}" > /tmp/aws-surreal-ocean.crt

# Stage akhir build nginx dengan konfigurasi dan key cert rahasia dari build-rahasia
FROM nginx:alpine-slim

# Key dan cert SSL
COPY --from=build-rahasia /tmp/aws-surreal-ocean-priv.key /etc/ssl/private/aws-surreal-ocean-priv.key
COPY --from=build-rahasia /tmp/aws-surreal-ocean.crt /etc/ssl/certs/aws-surreal-ocean.crt

# Konfigurasi Nginx
COPY nginx.conf /etc/nginx/nginx.conf:ro

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]