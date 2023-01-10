package dht11.service;



import dht11.model.Device;
import dht11.model.Mensuration;
import dht11.repository.MensurationRepository;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class MensurationService {
    private MensurationRepository repository;
    public MensurationService(MensurationRepository repository){
        this.repository = repository;
    }

    public Flux<Mensuration> findAll(){
        return repository.findAll();
    }

    public Mono<Mensuration> save(Mono<Mensuration> mensurationMono) {
        return mensurationMono.flatMap(repository::save);
    }


    public Flux<Mensuration> findLastMensurations() {
        return repository.findAllByLastTimestamp();
    }
}
