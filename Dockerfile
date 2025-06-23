# Use a lightweight web server
FROM nginx:alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site files to nginx's default directory
COPY . /usr/share/nginx/html

# Expose port 80 (used by nginx)
EXPOSE 80

# Start nginx (default command is already set in base image)
