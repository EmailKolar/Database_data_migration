postgres_password

psql -h localhost -p 5433 -U postgres_user -d postgres_demo

mysql -h 127.0.0.1 -P 3309 -u mysql_user -p mysql_demo
Note: Using 127.0.0.1 instead of localhost forces the client to use TCP instead of a Unix socket.