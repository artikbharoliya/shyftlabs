FROM node:12.18.3

LABEL version="1.0"
LABEL description="This is the base docker image for the frontend of shyftlabs coding test project"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]