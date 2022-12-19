package dht11.service;


import dht11.model.Device;
import dht11.repository.DeviceRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class DeviceService {
    private DeviceRepository repository;

    public DeviceService(DeviceRepository repository){
        this.repository = repository;
    }

    public Flux<Device> findAll(){
        return repository.findAll();
    }

    public Mono<Device> save(Mono<Device> deviceMono) {
        return deviceMono.flatMap(repository::save);
    }
}
