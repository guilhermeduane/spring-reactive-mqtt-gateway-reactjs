package dht11.controller;

import dht11.model.Device;
import dht11.service.DeviceService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@RestController
@CrossOrigin()
@RequestMapping(path="devices", produces="application/json")
public class DeviceController {

    private DeviceService service;


    public DeviceController(DeviceService service){
        this.service = service;
    }

    @GetMapping
    public Flux<Device> findAll(){
        return service.findAll();
    }

    @GetMapping("{id}")
    public Mono<Device> findById(@PathVariable Long id){
        return this.service.findById(id);
    }

    @PostMapping
    public Mono<Device> save(@RequestBody Mono<Device> deviceMono){
        return service.save(deviceMono);
    }

    @DeleteMapping("{id}")
    public Mono<Void> deleteDevice(@PathVariable Long id){
        return this.service.deleteById(id);
    }
    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAllDevices() {
        service.deleteAllDevices();

    }

    @PutMapping("{id}")
    public Mono<Device> updateDevice(@PathVariable String id, @RequestBody Mono<Device> deviceMono) {

        return service.save(deviceMono);
    }
}