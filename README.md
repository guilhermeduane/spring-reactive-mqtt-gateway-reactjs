# DHT11 MQTT Spring Reactive MQTT Gateway with Postgres, ReactJS and Docker Compose

Java Spring reactive gateway to receive DHT11 sensor humidity and temperature from MQTT and record in postgres database. You can create devices and see last mensuration values on ReactJs App. 
This project is dockerized and can runned on docker compose file with mosquitto broker, postgres database, react app and spring api and mqtt.

## Change MQTT Broker IP to accept external connections

You need to change listener ip to your real network ip to accept external connections in /config/mosquitto.conf and mqtt-dht11/src/main/resources/application.properties
(in my case is 192.168.1.89 you need the real ip localhost not work.)
  * mosquitto.conf :
```
listener 1883 192.168.1.89
```
  * application.properties :
```
mqtt.server.local.uri = tcp://192.168.1.89:1883
```
## 💻 MQTT Device JSON Payload 
The device connected to the sensor(Like ESP32, ESP8266, Raspberry PI, Arduino ...) needs to use this MQTT json payload format :
```
{
  "device_id":"device id (you can create devices on React Frontend)",
  "temperature":"temperature value received from sensor",
  "humidity":"humidity value received from sensor",
  "timestamp":"Date and hour in timestamp format(Java backend will convert to DateTime format and record in database)"
}
```
 * Example
```
{
  "device_id":"2",
  "temperature":"32",
  "humidity":"65",
  "timestamp":"1673398746"
}
```
## 🚀 Run Application
To run application just run Docker Compose:
```
docker compose up --build
```
or
```
docker-compose up --build
```
 * Acess the ReactJs frontend on : 

```
http://localhost:3000
```

You can debug spring app on container using port 5005.


## 😄 TODO 
TODO Tasks :
* Create .env file to docker compose to set the broker IP Address with more consistency
* Refactor the react code by updating the libraries, removing the warnings and a clean code
