
# Shyftlabs coding test

This project is made using ReactJS for the fronend and Express on the backend. For the database the project uses mongoDB atlas. The project is developed for the Shyftlabs' coding test. The project is used for storing data about students, their courses and their results.


## Application overview

This webapp contains 4 basic webpages.
- Home: contains the navbar and a generic landing page
- Students: contains form to add student data and a table showing data about all the students
- Course: Contain form to add course into the system and a table showing the data about all the courses
- Results: Contains form to add results for each student for a particular course and a table showimg all the results.


## Building the app

### Building the app with docker

The project uses docker to containerize the application. To build the project with docker follow the instructions below:

Note: You'll need docker desktop installed in your machine inorder to start the containers. For more info about how to install docker visit the official docker [website](https://www.docker.com/products/docker-desktop/).

If you have docker installed already in your machine, after adding `.env` files run the following command in the root directory of the project.

```bash
  docker-compose up
```

The docker should build the container and start the application. You can access the application at [http://localhost:3000](http://localhost:3000)


### Building the app without docker

Without the docker, we will need to build the production build of the react app and we will have to serve it using the express backend.  

First let's install all the dependencies. 
To insall all the dependencies for the run following command in both `/frontend` and `/backend` directories. 

```bash
  npm install
```

To build the production version of the React app run the following command in the `/frontend` directory.

```bash
  npm run build
```

To run the server go to `/backend` and run the following command.

```bash
  npm start
```

This should start the server on [http://localhost:3001](http://localhost:3001) and you can access the webapp. 

This project was built using `NodeJS (v16.13.2)`. Please try running the project with the simillar version of node. For more info visit: [node version manager](https://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html)

Version information about any other packages can be found in `package.json` file in respective folders.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the `/frontend` directory.

`REACT_APP_API_URL_PROD`

In the `/backend` directory, you will need to add the following environment variables in order to run the app.

`mongodb_uri`

`PORT`

Note: values for these env variables are provided in the email.

## Troubleshooting

If running the app with docker doesn't connect to the database, try disabling the firewall temporarily or try running the app without docker.


