FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npm run build

ENV PORT 3000

EXPOSE $PORT

VOLUME [ "/app/data" ]

CMD ["npm", "run", "start"]