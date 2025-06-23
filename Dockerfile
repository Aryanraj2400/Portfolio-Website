# Simple Dockerfile for static portfolio site
FROM nginx:alpine
COPY . /usr/share/nginx/html
