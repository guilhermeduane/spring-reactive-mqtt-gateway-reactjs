package dht11.mqtt;

import com.google.gson.Gson;
import dht11.model.Mensuration;
import dht11.model.MensurationMessage;
import dht11.repository.MensurationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.integration.dsl.IntegrationFlow;
import org.springframework.integration.dsl.IntegrationFlows;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;


import java.time.Instant;
import java.time.ZoneId;

@Configuration
public class MqttIn {
    MensurationRepository repository;
    public MqttIn(MensurationRepository repository){
        this.repository = repository;
    }


    @Bean
    IntegrationFlow inboundFlow (MqttPahoMessageDrivenChannelAdapter inboundAdapter){
        return IntegrationFlows
                .from(inboundAdapter)

                .handle((payload, headers) -> {
                    System.out.println("nova mensagem: " + payload);


                    MensurationMessage mensurationMessage = new Gson().fromJson((String) payload, MensurationMessage.class);
                    Mensuration mensuration = new Mensuration();
                    mensuration.setTemperature(mensurationMessage.getTemperature());
                    mensuration.setHumidity(mensurationMessage.getHumidity());
                    mensuration.setDeviceId(mensurationMessage.getDevice_id());
                    mensuration.setTimestamp(Instant.ofEpochSecond(mensurationMessage.getTimestamp()).atZone(ZoneId.systemDefault()).toLocalDateTime());
                    repository.save(mensuration).block();

                    System.out.println("data:"+ mensuration.getTimestamp());

                    return null;

                })
                .get();
    }

    @Bean
    MqttPahoMessageDrivenChannelAdapter inboundAdapter (@Value("${mqtt.topic}") String topic, MqttPahoClientFactory clientFactory){
        return new MqttPahoMessageDrivenChannelAdapter("consumer", clientFactory, "esp/dht");
    }


}