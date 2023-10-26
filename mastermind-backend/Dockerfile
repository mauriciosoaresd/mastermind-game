#
# Build stage
#
# FROM maven:3.9.5-eclipse-temurin-21 AS build
# COPY . .
# RUN mvn clean package -Pprod -DskipTests

#
# Package stage
#
# FROM eclipse-temurin:21
# COPY --from=build /target/mastermind-backend-0.0.1-SNAPSHOT.jar mastermind-backend-0.0.1-SNAPSHOT.jar
# ENV PORT=8080
# EXPOSE 8080
# ENTRYPOINT ["java", "-jar", "mastermind-backend-0.0.1-SNAPSHOT.jar"]
FROM debian:10 AS build

RUN apt-get update
RUN apt-get install openjdk-21-jdk -y
COPY . .

RUN apt-get install maven -y
RUN mvn clean install

FROM openjdk:21-jdk-slim

EXPOSE 8080

COPY --from=build /target/mastermind-backend-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
