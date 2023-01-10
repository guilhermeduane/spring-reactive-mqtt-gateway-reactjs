package dht11.controller;

import dht11.model.Device;
import dht11.model.Mensuration;
import dht11.service.DeviceService;
import dht11.service.MensurationService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin()
@RequestMapping(path="mensuration", produces = "application/json")
public class MensurationController {

    private MensurationService service;

    public MensurationController(MensurationService service){
        this.service = service;
    }

    @GetMapping
    public Flux<Mensuration> findAll(){
        return service.findAll();
    }

    @GetMapping("/last")
    public Flux<Mensuration> findLastMensurations(){

        return service.findLastMensurations();
    }

    @PostMapping
    public Mono<Mensuration> save(@RequestBody Mono<Mensuration> mensurationMono){
        return service.save(mensurationMono);
    }
}