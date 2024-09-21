# Use uma imagem base do Maven 3.8.8 com Eclipse Temurin JDK 17
FROM maven:3.8.8-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Use uma imagem base do Eclipse Temurin JDK 17 para rodar a aplicação
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
