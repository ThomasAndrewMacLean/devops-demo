FROM node:10.16.0

RUN mkdir /app
WORKDIR /app
COPY package*.json /app/
RUN npm install

CMD [ "npm", "run", "dev" ]