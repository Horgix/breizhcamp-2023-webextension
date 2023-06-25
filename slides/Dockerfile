# Inspired from https://github.com/cloudogu/reveal.js-docker/blob/82946d3fc86f6a3613b164c947a2144a531f9620/Dockerfile
# Changes : https://github.com/hakimel/reveal.js/compare/master...cloudogu:reveal.js-docker:master
FROM node:18.14.0-alpine3.17 as node

WORKDIR /reveal

# Install dependencies first -> More effective docker build cache
COPY package.json package-lock.json ./
# Speed up build by removing dependencies that are large and not needed for this use case
# qunit -> pupeteer -> chrome
RUN sed -i '/^.*node-qunit-puppeteer.*$/d' package.json
# RUN npm config set registry https://repos.tech.orange/artifactory/api/npm/npmproxy
RUN npm install


# Copy remaining web resources later for better caching
COPY . ./

# Remove qunite dependency (see above)
RUN sed -i '/^const qunit.*$/d' gulpfile.js
# Build minified js, css, copy plugins, etc.
RUN node_modules/gulp/bin/gulp.js build


EXPOSE 8000
EXPOSE 35729

CMD [ "npm", "run", "start", "--", "--host", "0.0.0.0"]
