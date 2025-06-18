CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(255)
);

INSERT INTO users (name, address) VALUES
  ('Nguyen Van A', 'Hanoi'),
  ('Tran Thi B', 'Ho Chi Minh'),
  ('Le Van C', 'Da Nang');
