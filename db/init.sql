CREATE TABLE device (
    device_id   INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    code        VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE mensuration (
    mensuration_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    device_id      INTEGER NOT NULL,
    temperature    INTEGER,
    humidity       INTEGER,
    timestamp      timestamp,
    CONSTRAINT device_id_fk FOREIGN KEY(device_id) REFERENCES device(device_id)
);

INSERT INTO device (code, description)
VALUES
    ('teste', 'dispositivo teste');

INSERT INTO mensuration (device_id, temperature, humidity, timestamp)
VALUES
    (1, 32, 55, '2022-11-29 19:10:25-07'),
    (1, 29, 59, '2022-11-29 21:00:25-07');
