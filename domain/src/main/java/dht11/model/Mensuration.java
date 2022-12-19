package dht11.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Mensuration {

    private Long mensurationId;
    private Long deviceId;
    private Integer temperature;
    private Integer humidity;
    private LocalDateTime timestamp;

}