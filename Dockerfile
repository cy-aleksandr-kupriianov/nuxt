# Dockerfile
FROM node:20.18.1-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
#RUN mkdir -p /usr/src/nuxt-app/nuxtjs-tutorial
WORKDIR /usr/src/nuxt-app/tst

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app
#RUN npm install
#RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

#CMD [ "yarn", "start" ]
