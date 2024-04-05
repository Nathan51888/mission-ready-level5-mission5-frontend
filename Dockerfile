FROM node
COPY ./ ./app
WORKDIR ./app

RUN npm ci
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]
