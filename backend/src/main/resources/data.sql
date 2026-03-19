INSERT INTO users (username, password)
VALUES ('admin', '123456')
ON DUPLICATE KEY UPDATE password = VALUES(password);
