package dht11.repository;

import dht11.model.Device;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends ReactiveCrudRepository<Device, Long> {

}