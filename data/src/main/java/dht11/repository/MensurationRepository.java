package dht11.repository;

import dht11.model.Mensuration;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface MensurationRepository extends ReactiveCrudRepository<Mensuration, Integer> {
@Query("SELECT a.* FROM mensuration a LEFT OUTER JOIN mensuration b  ON a.device_id = b.device_id AND a.timestamp < b.timestamp WHERE b.device_id IS NULL")
Flux<Mensuration> findAllByLastTimestamp();
}