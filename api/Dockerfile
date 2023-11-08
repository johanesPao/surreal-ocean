# syntax=docker/dockerfile:1
# escape=

# STAGE 1: Build actix-web API
FROM rust:latest AS build-api
WORKDIR /
COPY . .
RUN cargo build --release

# STAGE 2: Image final actix-web API dengan image
# minimum glibc
FROM cgr.dev/chainguard/glibc-dynamic
COPY --from=build-api /target/release/surreal-ocean-api /
# Expose port 5000 untuk komunikasi intra kontainer
# dalam network docker yang sama
EXPOSE 5000
CMD ["./surreal-ocean-api"]