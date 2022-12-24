package dht11.controller;

import dht11.model.Device;
import dht11.service.DeviceService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(path="devices", produces = "application/json")
@CrossOrigin(origins="http://localhost:8080")public class DeviceController {

    private DeviceService service;

    public DeviceController(DeviceService service){
        this.service = service;
    }

    @GetMapping
    public Flux<Device> findAll(){
        return service.findAll();
    }

    @PostMapping
    public Mono<Device> save(@RequestBody Mono<Device> deviceMono){
        return service.save(deviceMono);
    }
}