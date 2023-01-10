CREATE TABLE device (
    id   INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    code        VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE mensuration (
    mensuration_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    device_id      INTEGER NOT NULL,
    temperature    INTEGER,
    humidity       INTEGER,
    timestamp      timestamp,
    CONSTRAINT device_id_fk FOREIGN KEY(device_id) REFERENCES device(id)
);

INSERT INTO device (code, description)
VALUES
    ('ESP32', 'ESP32 com sensor DHT11');

INSERT INTO mensuration (device_id, temperature, humidity, timestamp)
VALUES
    (1, 32, 55, '2023-01-09 19:10:25-07'),
    (1, 29, 59, '2023-01-09 21:00:25-07');
