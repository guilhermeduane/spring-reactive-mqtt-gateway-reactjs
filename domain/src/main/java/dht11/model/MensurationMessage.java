package dht11.model;

import lombok.Getter;

@Getter
public class MensurationMessage {
    private String device;
    private Integer temperature;
    private Integer humidity;
    private Long timestamp;
}
