FROM node:lts-alpine

COPY . .

RUN npm install --omit-dev
RUN npm build --prefix client

USER node

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000