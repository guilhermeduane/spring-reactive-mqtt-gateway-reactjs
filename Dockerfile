FROM maven:3.8.6-amazoncorretto-11 AS MAVEN_TOOL_CHAIN

COPY pom.xml /tmp/
COPY api /tmp/api/
COPY data /tmp/data
COPY domain /tmp/domain/
COPY mqtt-dht11 /tmp/mqtt-dht11
COPY service /tmp/service

WORKDIR /tmp/

RUN mvn clean install -Pdocker

WORKDIR /tmp/mqtt-dht11

EXPOSE 8080
EXPOSE 1883
EXPOSE 9001
EXPOSE 5005

ENTRYPOINT mvn spring-boot:run -o -Dspring-boot.run.jvmArguments="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=0.0.0.0:5005 -Xms2048m -Xmx4096m"
