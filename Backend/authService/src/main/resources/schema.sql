DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
                       id UUID PRIMARY KEY,
                       username VARCHAR(255) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL,
                       date_modify TIMESTAMP NOT NULL
);

CREATE TABLE role (
                      user_id UUID NOT NULL,
                      role VARCHAR(255) NOT NULL,
                      PRIMARY KEY (user_id, role),
                      CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
