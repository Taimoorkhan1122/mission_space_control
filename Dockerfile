FROM node:lts-alpine

WORKDIR /app

# add layering 
# First just copy the package & lock json files
COPY package*.json ./

# Now just copy the respective package/lock.json files and install modules
COPY client/package*.json client/
RUN npm install-client --omit-dev

COPY server/package*.json server/
RUN npm install-server --omit-dev

# Now copy client code and build the frontend
COPY client/ client/
RUN npm build --prefix client

USER node

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000