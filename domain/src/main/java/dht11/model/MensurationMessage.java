package dht11.model;

import lombok.Getter;

@Getter
public class MensurationMessage {
    private Long device_id;
    private Integer temperature;
    private Integer humidity;
    private Long timestamp;
}
