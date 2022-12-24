package dht11.config;

import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;

@Configuration
public class MqttClient {

    @Bean
    MqttPahoClientFactory clientFactory(@Value("${mqtt.server.local.uri}") String brokerUri){
        var factory = new DefaultMqttPahoClientFactory();
        var options = new MqttConnectOptions();
        String password = "12345678";
        options.setServerURIs(new String[] {brokerUri});
        options.setUserName("guilherme");
        options.setPassword(password.toCharArray());
        factory.setConnectionOptions(options);
        return factory;
    }
}
