# Step 1: Use nginx as our base image (lightweight web server)
# nginx will serve our HTML/CSS/JS files
FRM nginx:alpine

# Step 2: Copy our website files into the nginx folder
# nginx serves files from /usr/share/nginx/html by default
COPY index.html /usr/share/nginx/html/index.html
COPY style.css  /usr/share/nginx/html/style.css
COPY script.js  /usr/share/nginx/html/script.js

# Step 3: Tell Docker that this container listens on port 80
EXPOSE 80
