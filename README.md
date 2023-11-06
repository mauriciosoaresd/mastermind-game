# Mastermind - Game Application 
Mastermind is game application build with the power of Java Spring Boot and NextJS.


![Home page](./images/snappy_login.png)

![Game Page](./images/snappy.png)

## Installation Guide

### Requirements
- [JDK 21 or >](https://www.oracle.com/br/java/technologies/downloads/)
- [Apache Maven 3.9.5 or >](https://maven.apache.org/download.cgi)
- [NodeJS 18 or >](https://nodejs.org/en/download)
- [SQL Server](https://dev.mysql.com/downloads/mysql/)

#### Setup Backend
Cloning the repository and compiling:
```shell
git clone https://github.com/mauriciosoaresd/mastermind-game

cd mastermind-game\mastermind-backend
mvn clean install -DskipTests
```

Rename properties file from example-application.properties to application.properties and fill with your environment variables.
```shell
cd src\main\resources
mv example-application.properties application.properties
```

Running backend. (Make sure your database is running).
```shell
java -jar mastermind-game\mastermind-backend\target\mastermind-backend-0.0.1-SNAPSHOT.jar
```

#### Setup Frontend
Installing npm packages
```shell
cd mastermind-game\mastermind-frontend
npm i
```
Rename example.env.local to .env.local and fill your environment variables

```shell
mv example.env.local .env.local
```

Build and run the frontend server

```shell
npm build
npm start
```

Done! Now open localhost:3000 in your browser.