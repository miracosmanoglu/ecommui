# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /Users/furka/dockersugar
ENV PORT 3000

WORKDIR /Users/furka/dockersugar

COPY package.json /Users/furka/dockersugar
COPY yarn.lock /Users/furka/dockersugar

# install dependencies
RUN yarn install
# copy source files

COPY . /Users/furka/dockersugar

# start app
RUN yarn run build
EXPOSE 3000
CMD [ "yarn", "start" ]