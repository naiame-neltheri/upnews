FROM node:15.7.0-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --slent

COPY . ./

CMD ["npm", "start"]