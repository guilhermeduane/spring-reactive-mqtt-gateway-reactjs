package dht11.repository;

import dht11.model.Mensuration;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MensurationRepository extends ReactiveCrudRepository<Mensuration, Integer> {
}