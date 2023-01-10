package dht11.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Device {
    @Id
    private Long id;
    private String code;
    private String description;
}
