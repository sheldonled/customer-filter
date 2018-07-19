FROM ubuntu:18.04

# Updating packages
RUN apt-get update -yq && apt-get upgrade -yq

# Installing necessary packages
RUN apt-get install -y curl sudo gnupg

# Install Node.js 
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -  && \
    apt-get install -y nodejs build-essential

WORKDIR /src

COPY ./api ./api
COPY ./frontend ./frontend
COPY ./.babelrc ./.babelrc
COPY ./package.json ./package.json
COPY ./server.js ./server.js

RUN npm install

# Front-end build task
RUN npm run build


# Cleaning up
RUN npm prune

RUN apt-get clean \
  && apt-get autoremove \
  && rm -rf /var/lib/apt/lists/* 

EXPOSE 3000
CMD [ "npm", "start" ]


