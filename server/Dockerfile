FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image for the backend of shyftlabs coding test project"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 3001

CMD ["node", "index.js"]