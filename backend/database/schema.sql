-- SQLBook: Code

DROP TABLE IF EXISTS Salon;
DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS `Order`;


CREATE TABLE
    Salon (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(80) NOT NULL,
        email  VARCHAR(80) NOT NULL,
        hashed_password VARCHAR(50) NOT NULL DEFAULT 'beauty',
        address VARCHAR(250),
        phone_number VARCHAR(80) NOT NULL,
        point INT NOT NULL,
        is_subscription BOOLEAN NOT NULL DEFAULT 0
    );


CREATE TABLE
    Event (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(80) NOT NULL,
        description  TEXT NOT NULL,
        value INT NOT NULL
    );

CREATE TABLE
    `Order` (
        salon_id INT,
        event_id INT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
        CONSTRAINT fk_order_salon_id FOREIGN KEY (salon_id) REFERENCES salon (id) ON DELETE CASCADE,
        CONSTRAINT fk_order_event_id FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE,
        PRIMARY KEY (salon_id, event_id)
    );



/* Insert dans BDD

    INSERT INTO Salon(
        name,
        email,
        address,
        phone_number,
        hashed_password,
        point,
        is_subscription,
    ) VALUES(

    )
    */