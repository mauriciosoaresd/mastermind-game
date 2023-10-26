#
# Build stage
#
FROM maven:3.9.5-eclipse-temurin-21 AS build
COPY . .
RUN mvn clean install

#
# Package stage
#
FROM eclipse-temurin:21
COPY --from=build /target/mastermind-backend-0.0.1-SNAPSHOT.jar mastermind-backend-0.0.1-SNAPSHOT.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "mastermind-backend-0.0.1-SNAPSHOT.jar"]
